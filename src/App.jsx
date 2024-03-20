
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Result from './Components/Result'


function App() {
    const [emoji, setEmoji]=useState('fruit')
    const [darkMode, setDarkMode]=useState(false)

    const modeDark = () =>{
        setDarkMode(current=>!current)
    }
    return(
        <div className={`App ${darkMode?"darkbg":""}`}>
            <Header />
            <Form setEmoji={setEmoji} darkMode={darkMode} modeDark={modeDark}/>
            <Result emoji={emoji} darkMode={darkMode}/>
            <Footer/>
        </div>
    )

}

export default App
