chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes("youtube.com/watch")) {
    const videoUrl = tab.url;
    const downloadUrl = `https://youtubevideodownload.com/api/download?video=${encodeURIComponent(videoUrl)}`;
    chrome.downloads.download({
      url: downloadUrl,
      filename: "video.mp4"
    });
  } else {
    alert("Please navigate to a YouTube video page to use this extension.");
  }
});
