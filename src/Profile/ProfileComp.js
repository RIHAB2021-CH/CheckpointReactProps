import React from 'react'
import './profile.css';
import propTypes from "prop-types";
const S={display: "inline",
    fontFamily:"Georgia, Times New Roman, Times, serif" ,
    fontSize: "1.114rem",
    fontWeight:"bold" ,
    maxWidth: "19rem",
    textAlign: "center",
    margin: "1rem 0.789rem" ,
    padding:"3rem 0"}
const ProfileComp = (props) => {
    console.log("props=",props)
    return (
    
        <div >
            
            <ul >
            <li style={S}>{props.children}</li>
            <li style={S}><span className="title">Full Name :</span> {props.fullName}</li>
            <li style={S}><span className="title">Profession :</span> {props.profession}</li>
            <li style={S}><span className="title">Bio :</span> {props.bio}</li>
            <li style={S}><button onClick={()=>props.handleName(props.fullName)}>User Name</button></li>
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

