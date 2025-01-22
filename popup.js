document.getElementById("download").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.url.includes("youtube.com/watch")) {
    chrome.runtime.sendMessage({ action: "download", url: tab.url });
  } else {
    alert("Please navigate to a YouTube video page to use this extension.");
  }
});
