import Comment from "./Comment"

function CommentsList({comments}) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <p>
                {comments.map(comment => <Comment user={comment.user} comment={comment.comment} key={comment.id}/>)}
            </p>
        </div>
    )
}
export default CommentsList;