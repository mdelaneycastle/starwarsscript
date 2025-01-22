chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes("youtube.com/watch")) {
    const videoId = new URL(tab.url).searchParams.get("v");
    if (!videoId) {
      alert("Unable to find video ID. Please ensure you're on a valid YouTube video page.");
      return;
    }
    const downloadUrl = `https://www.y2mate.com/youtube/${videoId}`; // Example external link
    chrome.tabs.create({ url: downloadUrl }); // Opens a new tab to process the download
  } else {
    alert("Please navigate to a YouTube video page to use this extension.");
  }
});
