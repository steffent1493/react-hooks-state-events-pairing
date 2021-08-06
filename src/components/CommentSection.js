import { useState } from "react";
import CommentsList from "./CommentsList";

function CommentSection({comments}) {
    const [toggleState, setToggleState] = useState(false)

    function handleClick() {
        setToggleState(!toggleState)
    }
    
    return (
        <div>
            <button onClick={handleClick}>{toggleState ? 'Show' : 'Hide'} Comments</button>
            {toggleState ? null : <CommentsList comments={comments} />}
        </div>
    )
}

export default CommentSection;