import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Student(props){
    return(
        <div className={`student ${props.Selected ? 'selected' : ''}`} onClick={props.onClick}>
            <img className="card-image" src={props.profilePic} alt="profile picture"/>
            <div className="info">
                <p>Student ID: {props.studentNum} </p>
                <p>Name: {props.name}</p>
                <p>Birthday: {props.birth}</p>
                <p>Quotable Quotes: "{props.quote}"</p>
            </div>
        </div>
    );
}
Student.propTypes ={
    profilePic: PropTypes.string,
    studentNum: PropTypes.string,
    name: PropTypes.string,
    birth: PropTypes.string,
    quote: PropTypes.string,
    Selected: PropTypes.bool,
    onClick: PropTypes.func,
}
Student.defaultPops = {
    profilePic: "./assets/student-1.jpg",
    studentNum: "0000", 
    name: "Guest",
    birth: "January 1",
    quote: "none",
};
export default Student