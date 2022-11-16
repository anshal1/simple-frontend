import React from 'react';
import Card from '../Card/Card';
import "./Content.css";
const Content = () => {
  return (
    <>
    <div className="main_content_box" >
        <div className="header">
            <div className="heading">
                <h1>Creative</h1>
                <h3>Creative Studio</h3>
                <p>images from Freepik</p>
            </div>
        </div>
        <div className="main_content">
            <div className="content_heading">
                <h1>Fresh Solutions for You</h1>
            </div>
            <div className="content_paragraph">
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="cards">
                <Card color="rgba(121, 84, 177,1)" logo="fa-solid fa-rocket"/>
                <Card color="rgba(121, 84, 177,1)" logo="fa-solid fa-cross"/>
                <Card color="rgba(121, 84, 177,1)" logo="fa-solid fa-rocket"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content