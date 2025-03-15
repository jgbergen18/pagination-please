chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ maxVisibleHeight: 3000 }); // Initial scroll limit
});
