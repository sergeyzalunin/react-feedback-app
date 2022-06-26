import { useState } from 'react';
import Header from "./components/Header";
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData';

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    
    const deleteFeedback = (id) => {
        if (window.confirm('Sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header text='header text'/>

            <div className="container">
                <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App