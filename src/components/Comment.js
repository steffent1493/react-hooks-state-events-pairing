function Comment({user, comment}) {
    return (
        <ul>
            <p><strong>{user}</strong></p>
            <p>{comment}</p>
        </ul>
    )
}
export default Comment;