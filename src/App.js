import React,{useState} from 'react'
import Alert from './Alert';
// import Cards from './components/Cards'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


export default function App() {
    const [mode,setMode] = useState('dark');
    const [alert,setAlert] = useState(null);

    const showAlert=(message,type)=>{
        setAlert({
            message:message,
            type:type
        })
    }
    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert('light mode has been enabeld','success');
            document.title='Wellcome to application';
        }
        else{
            setMode('dark');
            document.body.style.backgroundColor='darkblue';
            showAlert('Dark mode has been enabeld','info');
            document.title='Dark Mode enabled';



        }
    }
    return (
        <>
            <Navbar title='khalid First React Application' mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <TextForm mode={mode} showAlert={showAlert}/>
            
        </>
        
    )
}
