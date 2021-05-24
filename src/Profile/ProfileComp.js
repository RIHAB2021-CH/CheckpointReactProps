import React from 'react'
import './profile.css';
import propTypes from "prop-types";

const ProfileComp = (props) => {
    console.log("props=",props)
    return (
    
        <div >
            {props.handleName}
            <ul>
            <li>{props.children}</li>
            <li><span className="title">Full Name :</span> {props.fullName}</li>
            <li><span className="title">Profession :</span> {props.profession}</li>
            <li><span className="title">Bio :</span> {props.bio}</li>
            </ul>
        </div>
        
    )
}

export default ProfileComp
ProfileComp.defaultProps={
    fullName :"full Name",
    profession:"profession",
    bio:"bio"
}
ProfileComp.propTypes={
    fullName:propTypes.string,
    profession:propTypes.string,
    bio:propTypes.string
}

