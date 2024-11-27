class JBFisher {

    static main = () => {

        const URL_DOWNLOADS = 'plugins.jetbrains.com';
        const URL_PLUGINS = 'download.jetbrains.com';

        const init = () => {
            switch (true) {
                case imHere(URL_DOWNLOADS):
                    redirectPlugins();
                    break;
                case imHere(URL_PLUGINS):
                    redirectDownloads();
                    break;
                default:
                    break;
            }
        }

        const imHere = (url) => location.origin.includes(`://${url}`);

        const redirectPlugins = () => {
            const isValidPath = location.pathname.includes('/files/') && location.search.includes('pluginId=');
            if (isValidPath) {
                location.href = `https://downloads.marketplace.jetbrains.com${location.pathname}${location.search}`;
            }
        }

        const redirectDownloads = () => {
            const newOrigin = location.origin.replace('download.jetbrains.com', 'download-cdn.jetbrains.com');
            location.href = `${newOrigin}${location.pathname}${location.search}`;
        }

        init();
    }

}

JBFisher.main();
