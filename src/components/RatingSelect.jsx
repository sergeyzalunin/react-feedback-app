import { useState } from 'react'
import PropTypes from 'prop-types'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(0)

    const handleSelected = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

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

//Select.propTypes = {}

export default RatingSelect
