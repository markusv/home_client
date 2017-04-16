import Koa from 'koa';
import path from 'path';
import serve from 'koa-static-server';
import convert from 'koa-convert';
import config from '../config/config';
import proxy from 'koa-proxies';
import favicon from 'koa-favicon';
import httpProxy from 'http-proxy';

const app = new Koa();
app.use(convert(serve({rootDir: path.join(__dirname, '..', '..', 'build')})));
app.use(favicon(path.join(__dirname, '..', '..', 'assets', 'favicon.ico')));

// proxy all api calls to api server
app.use(proxy('/api', {
  target: config.serverUrl,
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, '')
}));

// proxy all websockets connections to api server
const wsproxy = httpProxy.createProxyServer();
app.use((ctx) => {
  ctx.respond = false;
  wsproxy.web(ctx.req, ctx.res, { target: config.wsServerUrl });
});

const server = app.listen(process.env.HTTP || 3000); //eslint-disable-line no-process-env
server.on('upgrade', (req, socket, head) => {
  wsproxy.ws(req, socket, head, { target: config.wsServerUrl });
});

module.exports = app;
