import { ExternalScripts, ExternalScriptsFunction } from 'remix-utils';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix';
import type { MetaFunction } from 'remix';
// eslint-disable-next-line import/no-unresolved
import tailwindStyles from '~/styles/global.css';

export const meta: MetaFunction = () => ({
  title: 'js.cool | 为开源项目提供提供免费域名',
  descrption: 'Free Open Source Domain Names'
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }
];

const scripts: ExternalScriptsFunction = () => [
  {
    src: 'https://willin.wang/clipboard.js'
  },
  {
    async: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5059418763237956',
    crossOrigin: 'anonymous'
  },
  {
    async: true,
    src: 'https://platform-api.sharethis.com/js/sharethis.js#property=618092f66fc5810019e08702&product=sticky-share-buttons'
  }
];
// and export it through the handle, you could also create it inline here
// if you don't care about the type
export const handle = { scripts };

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
        <ExternalScripts />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
