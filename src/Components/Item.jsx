import React, { useState } from 'react'

const Item = ({title, emoji}) => {
    const [copy, setCopy] = useState(false)
    const uno = () =>{
        setCopy(true)
        navigator.clipboard.writeText(emoji)
        setTimeout(() => {
            setCopy(false)            
        }, 3000);
    }

  return (
    <article  className='card-emoji'>
        <p className='emoji-icon' onClick={uno} >{emoji}</p>
        <h4>{title}</h4>
        {copy && <p className='copied'>Copied</p>}

    </article>

  )
}

export default Item