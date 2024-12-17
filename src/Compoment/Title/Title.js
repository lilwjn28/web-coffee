import React from 'react';
import "./Title.css"
const Title = (props) => {
    return (
        <div className="heading">
           <p id="description">{props.des}</p> 
            <h3 id="title">{props.title}</h3>
        </div>
    );
};

export default Title;