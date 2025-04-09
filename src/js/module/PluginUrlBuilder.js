import {DOMAINS} from './Constants';
import {RouteValidator} from './RouteValidator';

export class PluginUrlBuilder {
    build() {
        return RouteValidator.isValidPluginPage()
            ? this.#buildNewUrl()
            : '';
    }

    #buildNewUrl() {
        return `https://${DOMAINS.PLUGIN_NEW}${location.pathname}${location.search}`;
    }
}