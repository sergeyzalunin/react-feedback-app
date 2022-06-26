import { useState } from 'react';
import Header from "./components/Header";
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData';

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    return (
        <>
            <Header text='header text'/>

            <div className="container">
                <FeedBackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App