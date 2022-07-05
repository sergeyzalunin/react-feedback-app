import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackItem({ item }) {
    const {deleteFeedback} = useContext(FeedBackContext)

    return (
        <Card key={item.id}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem