export default class ProjectService {
    static resolvePath: (path: string) => string;
    static requireModule: <T = Record<string, unknown>>(path: string) => T;
    static requireActualModule: (relativePath: string) => string | null;
    static hasModule: (path: string) => boolean;
}
