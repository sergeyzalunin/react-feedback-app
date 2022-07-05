import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from "./FeedBackItem"
import React from "react"
import FeedBackContext from '../context/FeedBackContext'

function FeedBackList() {
    const {feedback} = useContext(FeedBackContext)

    if (!feedback || feedback.length === 0) {
        return <p>No feed back yet!</p>
    }

    return <div className="feedback-list">
        <AnimatePresence>
        {
            feedback.map(item => (
                <motion.div 
                    key={item.id} 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    exit={{opacity: 0}}>
                    <FeedBackItem item={item} />
                </motion.div>
            ))
        }
        </AnimatePresence>
    </div>
}


export default FeedBackList