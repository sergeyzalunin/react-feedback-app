function App() {
    const title = 'blog post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: "comment #1"},
        { id: 2, text: "comment #2"},
        { id: 2, text: "comment #3"}
    ]

    return (
        <div className="container">
            <h1>{title}</h1> 
            <p>{body}</p>

            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}

export default App