chrome.commands.onCommand.addListener((command) => {
    if (command !== "open-tab") return;
    chrome.tabs.create({ url: "https://developer.chrome.com" });
});