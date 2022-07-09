import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 1
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 3
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack, ...feedback]);
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id
            ? { ...item, ...updItem } : item))
    }

    const editFeedBack = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return <FeedBackContext.Provider value={{
        feedback,
        addFeedBack,
        editFeedBack,
        deleteFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext