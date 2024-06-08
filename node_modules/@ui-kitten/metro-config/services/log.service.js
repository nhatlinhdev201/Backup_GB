"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const SEPARATOR = '\n';
// eslint-disable-next-line no-restricted-syntax
class LogService {
    static log = (...messages) => {
        // tslint:disable-next-line:no-console
        console.log(`${LogService.formatMessages(messages)}`);
    };
    static debug = (...messages) => {
        // tslint:disable-next-line:no-console
        console.log(`${chalk_1.default.gray.bold('debug')} ${LogService.formatMessages(messages)}`);
    };
    static success = (...messages) => {
        // tslint:disable-next-line:no-console
        console.log(`${chalk_1.default.green.bold('success')} ${LogService.formatMessages(messages)}`);
    };
    static info = (...messages) => {
        // tslint:disable-next-line:no-console
        console.log(`${chalk_1.default.cyan.bold('info')} ${LogService.formatMessages(messages)}`);
    };
    static warn = (...messages) => {
        console.warn(`${chalk_1.default.yellow.bold('warn')} ${LogService.formatMessages(messages)}`);
    };
    static error = (...messages) => {
        console.error(`${chalk_1.default.red.bold('error')} ${LogService.formatMessages(messages)}`);
    };
    static formatMessages = (messages) => {
        return chalk_1.default.reset(messages.join(SEPARATOR));
    };
}
exports.default = LogService;
//# sourceMappingURL=log.service.js.map