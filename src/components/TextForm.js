import React,{useState} from 'react'

function TextForm() {

    const [text,setText] = useState('Enter some text here....');

    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const HandleRemoveClick=()=>{
        let newText = '';
        setText(newText);
    }
    const HandleOnchange=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
        
        <div className='container my-3'>
            <h1>Enter Text Below...</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnchange} id="floatingTextarea" rows='8'></textarea>  
                <button className="btn btn-primary mt-3 mx-3" onClick={HandleUpClick}>Click To UpperCase</button> 
                <button className="btn btn-primary mt-3 mx-3" onClick={HandleLowerClick}>Click To lowerCase</button> 
                <button className="btn btn-danger mt-3 mx-3" onClick={HandleRemoveClick}>Click To RemoveAll</button> 
            </div>
        </div>
        <div className="container my-3">
            <h2>Summary of your Work...</h2>
            <p>{text.split(' ').length} Words and {text.length} charachters</p>
            <h3>Time to read</h3>
            <p>{0.008*text.split(' ').length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
