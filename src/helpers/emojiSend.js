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
    return value === '' ? response : response.slice(0.24)
}

export default emojiSend