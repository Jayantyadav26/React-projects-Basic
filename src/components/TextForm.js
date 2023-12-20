import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'


export default function TextForm(props) {
  
  const handleUPclick =()=>{
    //   console.log("upper case was clicked"+text);
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value);
}
  const [text ,setText] = useState('Enter text here');
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUPclick}>Convert to Uppercase</button>
    </div>
  )
}
TextForm.propTypes = {
   heading: PropTypes.string.isRequired,
}
TextForm.defaultProps={
heading: 'write heading here'
}
