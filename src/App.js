import Header from "./components/Header";
import FeedBackItem from './components/FeedBackItem'

function App() {
    return (
        <>
            <Header text='header text'/>

            <div className="container">
                <FeedBackItem/>
            </div>
        </>
    )
}

export default App