const tldLocales = {
    'com.au': 'Australia',
    'com.br': 'Brazil'
}

chrome.runtime.onInstalled.addListener(async () => {
    for (let [tld, locale] of Object.entries(tldLocales)) {
        chrome.contextMenus.create({
            id: tld,
            title: locale,
            type: 'normal',
            contexts: ['selection']
        });
    }
});