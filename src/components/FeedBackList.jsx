import PropTypes from 'prop-types'
import FeedBackItem from "./FeedBackItem"
import React from "react"

function FeedBackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feed back yet!</p>
    }

    return <div className="feedback-list">
        {
            feedback.map(item => (
                <React.Fragment key={item.id}>
                    <FeedBackItem item={item} handleDelete={handleDelete} />
                </React.Fragment>
            ))
        }
    </div>
}

FeedBackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedBackList