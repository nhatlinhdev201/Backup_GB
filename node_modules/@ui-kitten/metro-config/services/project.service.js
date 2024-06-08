"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const log_service_1 = __importDefault(require("./log.service"));
/**
 * Since metro.config.js should be stored at the project root. E.g:
 * - /
 * - /metro.config.js
 * - /package.json
 */
const PROJECT_PATH = path_1.default.resolve(__dirname, '../../../../');
// eslint-disable-next-line no-restricted-syntax
class ProjectService {
    static resolvePath = (path) => {
        if (!path) {
            return './';
        }
        return path_1.default.resolve(PROJECT_PATH, path);
    };
    static requireModule = (path) => {
        const modulePath = ProjectService.resolvePath(path);
        try {
            return require(modulePath);
        }
        catch (error) {
            if (error.code === 'MODULE_NOT_FOUND' && ~error.message.indexOf(modulePath)) {
                return null;
            }
            else {
                log_service_1.default.warn(error);
            }
        }
    };
    static requireActualModule = (relativePath) => {
        if (!ProjectService.hasModule(relativePath)) {
            return null;
        }
        const modulePath = ProjectService.resolvePath(relativePath);
        return fs_1.default.readFileSync(modulePath, { encoding: 'utf8' });
    };
    static hasModule = (path) => {
        return ProjectService.requireModule(path) !== null;
    };
}
exports.default = ProjectService;
//# sourceMappingURL=project.service.js.map