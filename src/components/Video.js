
function Video({videoData}) {
    return (
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={videoData.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={videoData.title}
        />
        <h1>{videoData.title}</h1>
        <small>{videoData.views} Views | Uploaded {videoData.createdAt}</small>
        <br/>
      </div>
    );
  }
export default Video;