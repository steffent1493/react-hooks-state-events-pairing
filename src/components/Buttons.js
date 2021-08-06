import { useState } from "react";

function Buttons({upvotes, downvotes}) {
    const [upVote, setUpVote] = useState(upvotes)
    const [downVote, setDownVote] = useState(downvotes)

    return (
        <div>
            <button onClick={() => setUpVote(upVote + 1)}>{upVote} 👍</button>
            <button onClick={() => setDownVote(downVote + 1)}>{downVote} 👎</button>
        </div>

    )
}

export default Buttons;