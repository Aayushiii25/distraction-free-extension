document.getElementById("toggleBlock").addEventListener("click", () => {
  chrome.storage.local.get("isBlocking", ({ isBlocking }) => {
    chrome.storage.local.set({ isBlocking: !isBlocking }, () => {
      document.getElementById("toggleBlock").innerText = !isBlocking ? "Stop Blocking" : "Start Blocking";
    });
  });
});

chrome.storage.local.get("isBlocking", ({ isBlocking }) => {
  document.getElementById("toggleBlock").innerText = isBlocking ? "Stop Blocking" : "Start Blocking";
});