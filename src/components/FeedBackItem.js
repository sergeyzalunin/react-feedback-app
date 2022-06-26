import {useState} from 'react';

function FeedBackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState(
        'This is an example of a feedback item')

    const handleClick = () => {
        setRating((prevRating) => {
            return prevRating + 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedBackItem