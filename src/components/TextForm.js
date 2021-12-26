import React,{useState} from 'react'

function TextForm(props) {

    const [text,setText] = useState('Enter some text here....');
    
    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Uppercase has been clicked','info');
    }
    
    const HandleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('lowerCase has been clicked','info');

    }
  
    const HandleRemoveClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Remove all has been clicked','danger');

    }
    const HandleOnchange=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
        
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Enter Text Below...</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleOnchange} id="floatingTextarea" rows='8'></textarea>  
                <button className="btn btn-primary mt-3 mx-3" onClick={HandleUpClick}>Click To UpperCase</button> 
                <button className="btn btn-primary mt-3 mx-3" onClick={HandleLowerClick}>Click To lowerCase</button> 
                <button className="btn btn-danger mt-3 mx-3" onClick={HandleRemoveClick}>Click To RemoveAll</button> 
                

            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Summary of your Work...</h2>
            <p>{text.split(' ').length} Words and {text.length} charachters</p>
            <h3>Time to read</h3>
            <p>{0.008*text.split(' ').length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter some text above in the text field to preview it Here....."}</p>
        </div>
        </>
    )
}

export default TextForm
