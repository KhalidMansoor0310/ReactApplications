import React,{useState} from 'react'
// import Cards from './components/Cards'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


export default function App() {
    const [mode,setMode] = useState('dark');
    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');
            document.body.style.backgroundColor='white';
        }
        else{
            setMode('dark');
            document.body.style.backgroundColor='darkblue';

        }
    }
    return (
        <>
            <Navbar title='khalid First React Application' mode={mode} toggleMode={toggleMode}/>
            <TextForm mode={mode}/>
        </>
        
    )
}
