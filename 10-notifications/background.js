chrome.action.onClicked.addListener(async () => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'd.png',
        title: 'Time to go',
        message: "Everyday I'm your dad'!",
        buttons: [{ title: 'Keep it Flowing.' }],
        priority: 0
    });
})