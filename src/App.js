import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedBackProvider } from './context/FeedBackContext'

function App() {
    return (
        <FeedBackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>                    
                        <Route exact path='/' element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedBackList />
                            </>
                        }>
                        </Route>

                        <Route exact path='/about' element={<AboutPage />} />
                    </Routes>
                    
                    <AboutIconLink />
                </div>

            </Router>
        </FeedBackProvider>
    )
}

export default App