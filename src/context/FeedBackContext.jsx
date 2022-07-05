import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return <FeedBackContext.Provider value={{
        feedback,
        addFeedBack,
        deleteFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext