class JBFisher {

    static DOMAINS = {
        PLUGIN: 'plugins.jetbrains.com',
        PLUGIN_NEW: 'downloads.marketplace.jetbrains.com',
        BINARY: 'download.jetbrains.com',
        BINARY_NEW: 'download-cdn.jetbrains.com',
    };

    static main = () => this.#handleRedirect();

    static #handleRedirect() {
        switch (true) {
            case this.#isCurrentDomain(this.DOMAINS.PLUGIN):
                this.#redirectPlugin();
                break;
            case this.#isCurrentDomain(this.DOMAINS.BINARY):
                this.#redirectBinary();
                break;
            default:
                break;
        }
    }

    static #isCurrentDomain = (domain) => location.origin.includes(`://${domain}`);

    static #redirectPlugin() {
        if (this.#isValidPluginPage()) {
            const newUrl = this.#buildNewPluginUrl()
            this.#redirect(newUrl);
        }
    }

    static #isValidPluginPage = () => location.pathname.includes('/files/') && location.search.includes('pluginId=');

    static #buildNewPluginUrl = () => `https://${this.DOMAINS.PLUGIN_NEW}${location.pathname}${location.search}`;

    static #redirectBinary() {
        const newUrl = this.#buildNewBinaryUrl();
        this.#redirect(newUrl);
    }

    static #buildNewBinaryUrl() {
        const newOrigin = location.origin.replace(this.DOMAINS.BINARY, this.DOMAINS.BINARY_NEW);
        return `${newOrigin}${location.pathname}${location.search}`;
    }

    static #redirect = (href) => location.href = href;

}

JBFisher.main();
