import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
import axios from "axios";
import baseurl from "../Api";


export default function Settings({onChange}) {
  var [inputs,setInputs]=useState()
  var [selectedimage,setSelectedimage] = useState(null);
   
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    // image1:''
    
  });

  

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

 
 
 
 
//   const handleimage =(event)=>{
//     const file = event.target.files[0];
//     setSelectedimage(file)
//     inputs.certphoto=file;
// }


  const savedata = ()=>{
    console.log("clicked")
    console.log(formData)
    axios.post(baseurl+'/update/updateview',formData)
    .then((response)=>{alert("Record save")})
    .catch(err=>console.log(err))
    
  
  } 
  


 
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" >
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={formData.image1} alt="Not"
            />
             
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              name="image1"
              // value={formData.image1}
              // onChange={handleimage}
              style={{ display: "none" }}
              className="settingsPPInput"
            />
           
          </div>
          <label>Username</label>
          <input type="text" name="username"  value={formData.username}
      onChange={handleChange}/>
          <label>Email</label>
          <input type="email" name="email"  value={formData.email}
      onChange={handleChange}/>
          <label>Password</label>
          <input type="password" name="password"  value={formData.password}
      onChange={handleChange}/>
          <button className="settingsSubmitButton" type="submit" onClick={savedata}>
            Update
          </button>
          
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
