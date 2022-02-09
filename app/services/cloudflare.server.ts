type queryResult = {
  viewer: {
    accounts: {
      series: {
        sum: {
          visits: number;
        };
        dimensions: {
          metric: string;
        };
      }[];
    }[];
  };
};

const query = `query ($accountTag: string, $filter: AccountRumPageloadEventsAdaptiveGroupsFilter_InputObject) {
  viewer {
    accounts(filter: {accountTag: $accountTag}) {
      series: rumPageloadEventsAdaptiveGroups(limit: 5000, filter: $filter) {
        sum {
          visits
        }
        dimensions {
          metric: requestHost
        }
      }
    }
  }
}`;

export const getSites = async (kv: KVNamespace, APIKEY: string) => {
  let json = await kv.get('$$sites', 'json');
  if (json) {
    return json;
  }
  const variables = {
    accountTag: '96f10109ea482311a0fe5e42d6ea35f7',
    filter: {
      AND: [
        {
          datetime_geq: new Date(
            new Date().getTime() - 1000 * 86400
          ).toISOString(),
          datetime_leq: new Date().toISOString()
        },
        {
          siteTag_in: ['2d601ad173194607ab8ab6960fed8803']
        }
      ]
    }
  };

  const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    body: JSON.stringify({ query, variables }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${APIKEY}`
    }
  });
  const { data }: { data: queryResult } = await res.json();
  const sites: { [key: string]: number } = {};
  for (let i = 0; i < data.viewer.accounts[0].series.length; i += 1) {
    const item = data.viewer.accounts[0].series[i];
    sites[item.dimensions.metric] =
      (sites[item.dimensions.metric] || 1) + item.sum.visits;
  }
  json = Object.entries(sites).sort((a, b) => (a[1] - b[1] > 0 ? -1 : 1));
  await kv.put('$$sites', JSON.stringify(json), {
    expirationTtl: 86400
  });
  return json;
};
