
import './App.css';
import ProfileComp from "./Profile/ProfileComp"
const data={
  fullName:"Rihab Chouikh",
  bio:"Diplomed From the National School of Engeneering of Carthage",
   profession:"Industrial Engeneer" }

const handleName = Name => alert("Profile User : Rihab Chouikh");

function App() {
  return (
    <div>
      
      <ProfileComp  fullName={data.fullName} bio={data.bio} profession={data.profession}  handleName={handleName()} > 
      <img src="/fotoProfile.jpg" alt="PhotoProfile" height="350"width="350"/></ProfileComp>
    </div>
  );
}

export default App;
