import Koa from 'koa';
import path from 'path';
import serve from 'koa-static-server';
import convert from 'koa-convert';
import config from '../config/config';
import proxy from 'koa-proxies';
import favicon from 'koa-favicon';

const app = new Koa();
app.use(convert(serve({rootDir: path.join(__dirname, '..', '..', 'build')})));
app.use(favicon(path.join(__dirname, '..', '..', 'assets', 'favicon.ico')));

// proxy all api calls to api server
app.use(proxy('/api', {
  target: config.serverUrl,
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, '')
}));

app.listen(process.env.HTTP || 3000); //eslint-disable-line no-process-env

module.exports = app;


