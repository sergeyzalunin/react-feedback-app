import FeedBackItem from "./FeedBackItem"

function FeedBackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No feed back yet!</p>
    }

    return <div className="feedback-list">
        {feedback.map((item) => (
            <FeedBackItem key={item.Id} item={item} />
        ))}
    </div>
}

export default FeedBackList