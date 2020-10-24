import * as config from 'config';
import * as Log4js from 'log4js';
import { Logger } from 'log4js';

Log4js.configure(config.get('log4js'));


export const getLogger = function (name: string): Logger {
    return Log4js.getLogger(name);
};

