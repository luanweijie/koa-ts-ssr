import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';
import * as log4js from 'koa-log4';

import * as serve from 'koa-static';

import { config } from './config';
import { routes } from './routes';
import { getLogger } from './logger';
import { render } from './render';

const logger = getLogger('app');
const app = new Koa();

app.use(log4js.koaLogger(getLogger('http')));
app.use(render);
app.use(koaBody());
app.use(cors());
app.use(routes);
app.use(serve('dist/views'));

export const server = app.listen(config.port);

logger.info(`Server running on port ${config.port}`);
