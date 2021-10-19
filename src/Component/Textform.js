import React,{useState} from 'react'

export const Textform = (props) => {
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked"+Text);
         let newText=Text.toUpperCase();
        setText(newText);
    }

    const handleOnchange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    const handleLowclick=()=>{
        let newTextt=Text.toLowerCase();
        setText(newTextt);

    }
    const handleExtraSpaces=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const ClearText =()=>{
        let newText='';
        setText(newText);
    }


    const [Text,setText]=useState(" ");
    // setText("abkabka");

    return (
        <>
        <div className="Container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="my-box" class="form-label"></label> */}
                <textarea className="form-control" id="mybox" value={Text} onChange={handleOnchange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Removes Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{Text.split(" ").length} Words and {Text.length} characters</p>
            <p>Time taken to read {0.008*Text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter the text something above to preview here"}</p>
        </div>
        </>
    )
}
