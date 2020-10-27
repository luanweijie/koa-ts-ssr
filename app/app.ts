import Koa = require('koa');
import koaBody = require('koa-body');
import proxy  = require('koa-proxies');
import bodyParser = require("koa-bodyparser");
import serve = require('koa-static');
import log4js = require('koa-log4');


import { config } from './config';
import { routes } from './routes';
import { getLogger } from './logger';
import { render } from './render';

const logger = getLogger('app');
const app = new Koa();

app.use(proxy('/api', {
    target: 'http://localhost:9090',    
    changeOrigin: true,
    rewrite: path => path
}))
app.use(log4js.koaLogger(getLogger('http')));
app.use(render);
app.use(koaBody());
app.use(bodyParser())
app.use(routes);
app.use(serve('dist/views'));

export const server = app.listen(config.port);

logger.info(`Server running on port ${config.port}`);
