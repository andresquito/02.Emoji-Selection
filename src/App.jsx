
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Result from './Components/Result'


function App() {
    const [emoji, setEmoji]=useState('fruit')
    return(
        <div className="App">
            <Header />
            <Form setEmoji={setEmoji}/>
            <Result emoji={emoji}/>
            <Footer/>
        </div>
    )

}

export default App
