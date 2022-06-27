import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from "./components/Header"
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm';

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    
    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedBackForm handleAdd={addFeedBack} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App