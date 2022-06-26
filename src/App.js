import { useState } from 'react'
import Header from "./components/Header"
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    
    const deleteFeedback = (id) => {
        if (window.confirm('Sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedBackStats feedback={feedback} />
                <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App