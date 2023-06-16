import React, {useState} from 'react'
// import propTypes from 'prop-types'

export default function Textbar(props) {
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleOnClick = ()=>{
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert ("Converted to Uppercase", "BOOOOM!!!!")

    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert ("Converted to Lowercase", "BOOOOM!!!!")
    }
    const handleClrClick= ()=>{
    let newText = (" ");
    setText(newText)
}
const handleCpClick = ()=>{
    var text = document.getElementById ("myBox2")
    text.select()
    navigator.clipboard.writeText(text.value)
    alert("you ave copied the text")
}
    const [text, setText] = useState(" ");

  return (
    <div>
      <form>
  <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
    <label htmlFor="myBox2">{props.label}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox2" rows="3"></textarea>
  </div>
</form>
<button type="button" className="btn btn-primary my-2" onClick={handleOnClick}>UPPERCASE</button>
<button type="button" className="btn btn-secondary mx-1" onClick={handleloClick}>LOWERCASE</button>
<button type="button" className="btn btn-danger mx-1" onClick={handleClrClick}>Clear</button>
<button type="button" className="btn btn-warning mx-1" onClick={handleCpClick}>Copy to clipboard</button>
    <div className="container my-3">
    <h2> your text summary is given below</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} is the average time taken by you </p>
    <h3> Preview you text below </h3>
    <p>{text}</p>
    </div>
    </div>
  )
}
