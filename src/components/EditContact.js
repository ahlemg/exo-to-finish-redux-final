import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const  EditContact = (props) => {

  const {state} =  useLocation();

  const navigate = useNavigate();


    //const { id, name, email } = location.state.contact;
console.log("location.state.",state)
    const id1 = state.contact.id;
    const name1 = state.contact.name;
    const email1 = state.contact.email;
    
  
  
 const [name, setName] = useState(name1);  
 const [id, setId] = useState(id1);  
 const [email, setEmail] = useState(email1); 
      

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.updateContactHandler({id, name, email});
    setEmail("");
    setName("");
    navigate("/");
  };
  
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  
}

export default EditContact;
