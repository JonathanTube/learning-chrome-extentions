chrome.action.onClicked.addListener(async (tab) => {
    chrome.action.setBadgeText({ 'text': '√' });
    chrome.action.setBadgeBackgroundColor({ 'color': 'green' });
});