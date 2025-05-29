chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    blockedSites: ["youtube.com", "instagram.com"],
    isBlocking: false
  });
});

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  chrome.storage.local.get(["blockedSites", "isBlocking"], ({ blockedSites, isBlocking }) => {
    if (!isBlocking) return;
    const url = new URL(details.url);
    if (blockedSites.some(site => url.hostname.includes(site))) {
      chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("blocked.html") });
    }
  });
}, { url: [] });