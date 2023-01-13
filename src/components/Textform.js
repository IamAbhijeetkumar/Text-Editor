import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Upper Case", "success");
    }
    const handleloClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lower Case", "success");
    }
    const clear = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Cleared", "danger");
    }
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handlecopy = () => {
        console.log("I am copy")
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Chnage");
        setText(event.target.value);
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className='container' >
                <h1 style={{ color: props.mode === !'dark' ? 'white' : 'black' }} >{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.Example}</label>
                    <textarea value={text} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white' }} onChange={handleOnChange} className="form-control" id="myBox" rows="5"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" style={{ border: '2px solid black' }} onClick={handleUpClick}>Convert to Uppercase </button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" style={{ border: '2px solid black' }} onClick={handleloClick}>Convert to Lowercase </button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" style={{ border: '2px solid black' }} onClick={clear}>Clear Text </button>
                <button disabled={text.length === 0} className="btn btn-dark mx-2 my-2" style={{ border: '2px solid black' }} onClick={handlecopy}>Copy Text </button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" style={{ border: '2px solid black' }} onClick={handleExtraspaces}>Remove Extra Spaces</button>

            </div>
            <div className='container my-5' style={{ color: props.mode === !'dark' ? 'white' : 'black' }}>
                <h2 >Your text summary</h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {text.split("").filter((element) => { return element.length !== 0 }).length} Charactors</p>
                <p> {0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something into Above Box to preview here ! "}</p>

            </div>
        </>

    )
}
