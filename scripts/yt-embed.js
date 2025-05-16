const ytEmbed = document.querySelector(".yt-embed");

fetch(
  `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`
)
  .then((response) => response.json())
  .then((data) => {
    const videoId = data.items[0].id.videoId;
    ytEmbed.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
  })
  .catch((err) => console.error("Failed to load video:", err));
