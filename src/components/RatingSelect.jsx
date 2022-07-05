import { useContext, useEffect, useState } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(0)
    const { feedbackEdit } = useContext(FeedBackContext)

    const handleSelected = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    return (
        <>
            <ul className='rating'>
                { 
                    [ ...Array(10) ].map((_, i) => { 
                        i++

                        return <li key={i}>
                            <input 
                                type="radio" 
                                name="rating" 
                                id={`num${i}`}
                                value={i}
                                onChange={handleSelected}
                                checked={selected === i} 
                            />
                            <label htmlFor={`num${i}`}>{i}</label>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default RatingSelect
