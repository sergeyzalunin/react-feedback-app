import PropTypes from 'prop-types'
import Card from "../shared/Card"

function FeedBackItem({ key, item }) {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem