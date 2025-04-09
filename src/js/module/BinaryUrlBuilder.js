import {DOMAINS} from './Constants';

export class BinaryUrlBuilder {
    build() {
        return this.#buildNewUrl();
    }

    #buildNewUrl() {
        const newOrigin = this.#buildNewOrigin();
        return `${newOrigin}${location.pathname}${location.search}`;
    }

    #buildNewOrigin() {
        return location.origin.replace(DOMAINS.BINARY, DOMAINS.BINARY_NEW);
    }
}