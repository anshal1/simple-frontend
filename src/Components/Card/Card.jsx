import React from 'react';
import "./Card.css";
const Card = (props) => {
  return (
    <>
    <div className="main_card_container" style={{backgroundColor: props.color}}>
        <h1 id='card_logo'><i className={props.logo}></i></h1>
        <h1>Sample Headline</h1>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <p id='link'>learn more</p>
    </div>
    </>
  )
}

export default Card