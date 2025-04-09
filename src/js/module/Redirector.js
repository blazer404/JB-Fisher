import {BinaryUrlBuilder} from './BinaryUrlBuilder';
import {PluginUrlBuilder} from './PluginUrlBuilder';
import {RouteValidator} from './RouteValidator';

export class Redirector {
    constructor() {
        this.pluginUrlBuilder = new PluginUrlBuilder();
        this.binaryUrlBuilder = new BinaryUrlBuilder();
    }

    redirect() {
        if (RouteValidator.isPluginDomain()) {
            return this.#redirectTo(this.pluginUrlBuilder.build());
        }
        if (RouteValidator.isBinaryDomain()) {
            return this.#redirectTo(this.binaryUrlBuilder.build());
        }
    }

    #redirectTo(href) {
        if (href) {
            location.href = href;
        }
    }
}