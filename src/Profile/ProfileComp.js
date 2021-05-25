import React from 'react'
import './profile.css';
import propTypes from "prop-types";

const ProfileComp = (props) => {
    console.log("props=",props)
    return (
    
        <div >
            
            <ul>
            <li>{props.children}</li>
            <li><span className="title">Full Name :</span> {props.fullName}</li>
            <li><span className="title">Profession :</span> {props.profession}</li>
            <li><span className="title">Bio :</span> {props.bio}</li>
            <li><button onClick={()=>props.handleName(props.fullName)}>User Name</button></li>
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

