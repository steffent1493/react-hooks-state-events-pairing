import video from "../data/video.js";
import Video from "./Video";
import Buttons from "./Buttons";
import CommentSection from "./CommentSection"

function App() {
  return (
    <div className="main">
    <Video videoData={video}/>
    <br/>
    <Buttons upvotes={video.upvotes} downvotes={video.downvotes}/>
    <br/>
    <CommentSection comments={video.comments} />
    </div>
  );
}

export default App;
