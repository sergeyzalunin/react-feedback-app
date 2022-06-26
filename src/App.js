function App() {
    const title = 'blog post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: "comment #1"},
        { id: 2, text: "comment #2"},
        { id: 2, text: "comment #3"}
    ]

    const loading = false
    const showComments = true

    if (loading) return <h1>Loading...</h1>

    const commentsBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )

    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1> 
            <p>{body}</p>

            {showComments && commentsBlock}
        </div>
        
    )
}

export default App