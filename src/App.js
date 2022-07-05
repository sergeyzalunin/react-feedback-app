import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Post from './components/Post'
import Header from "./components/Header"
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

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
        <Router>
            <Header />
            <div className="container">
                <Routes>                    
                    <Route exact path='/' element={
                        <>
                            <FeedBackForm handleAdd={addFeedBack} />
                            <FeedBackStats feedback={feedback} />
                            <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    }>
                    </Route>

                    <Route exact path='/about' element={<AboutPage />} />
                    <Route exact path='/post/*' element={<Post />} />
                </Routes>
                
                <AboutIconLink />
            </div>

        </Router>
    )
}

export default App