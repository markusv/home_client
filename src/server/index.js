import Koa from 'koa';
import path from 'path';
import serve from 'koa-static-server';
import convert from 'koa-convert';

const app = new Koa();
app.use(convert(serve({rootDir: path.join(__dirname, '..', '..', 'build')})));
app.use(convert(serve({rootDir: path.join(__dirname, '..', '..', 'assets')})));
app.listen(process.env.HTTP || 3000);

module.exports = app;


