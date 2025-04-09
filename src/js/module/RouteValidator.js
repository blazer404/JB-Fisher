import {DOMAINS} from './Constants';

export class RouteValidator {
    static isPluginDomain() {
        return this.#locationHas(DOMAINS.PLUGIN);
    }

    static isBinaryDomain() {
        return this.#locationHas(DOMAINS.BINARY);
    }

    static #locationHas(domain) {
        return location.origin.includes(`://${domain}`);
    }

    static isValidPluginPage() {
        return this.isPluginDomain()
            && location.pathname.includes('/files/')
            && location.search.includes('pluginId=');
    }
}