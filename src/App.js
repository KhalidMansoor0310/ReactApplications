import React,{useState} from 'react'
// import Alert from './Alert';
// import About from './components/About';
// import Cards from './components/Cards'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default function App() {
    const [mode,setMode] = useState('dark');
    // const [alert,setAlert] = useState(null);

    // const showAlert=(message,type)=>{
    //     setAlert({
    //         message:message,
    //         type:type
    //     })
    // }
    const toggleMode=()=>{
        if(mode==='dark'){
            setMode('light');
            document.body.style.backgroundColor='white';
            // showAlert('light mode has been enabeld','success');
            document.title='Wellcome to application';
        }
        else{
            setMode('dark');
            document.body.style.backgroundColor='darkblue';
            // showAlert('Dark mode has been enabeld','info');
            document.title='Dark Mode enabled';



        }
    }
    return (
        <>
        {/* <Router> */}
         <Navbar title='khalid First React Application' mode={mode} toggleMode={toggleMode}/>
         {/* <Alert alert={alert}/> */}
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            <div className="container my-3">
            {/* <About /> */}
            </div>
          {/* </Route> */}
          {/* <Route path="/TextForm"> */}
            <TextForm mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        {/* </Router> */}
                
               
      
            
            
        </>
        
    )
}
