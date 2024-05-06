
chrome.action.onClicked.addListener(async function () {
    await chrome.tabs.create({ url: chrome.runtime.getURL("overview.html") });
});