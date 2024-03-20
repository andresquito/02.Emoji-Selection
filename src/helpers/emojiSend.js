import React from 'react'
import emojiList from './emojiList.json'

const emojiSend = (value) => {
    const mayusculas = value.toLowerCase()
    const response = [];
    emojiList.map(item => {
        if (item.keywords.includes(mayusculas)) {
            response.push(item);
        }
   
    })
    return response
}

export default emojiSend