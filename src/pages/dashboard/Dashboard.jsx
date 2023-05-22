import React ,{useContext} from 'react';
import logoimg from '../../images/logo.png'
import './dashboard.css'
import { AuthContext } from "../../context";
import home3 from '../../images/home3.jpeg'
import home2 from '../../images/home2.jpeg'
import home1 from '../../images/home1.jpeg'
import {useState} from "react";
import { app, database, storage } from "../../firebase";
import { collection, addDoc ,getDocs } from "firebase/firestore";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import { useEffect } from 'react';





export default function Dashboard() {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    const db = database;
    await getDocs(collection(db, "pg")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData, "newData");
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const {user} =useContext (AuthContext);
  const initialvalue ={
    pg_name: "",
    owner_name: "",
    address: "",
    facilities: "",
    rent: "",
    phone: "",
    photo_url: ""
   
    };
    const [pg, setPg] = useState(initialvalue);
    const [urlkey, seturlkey] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setPg({ ...pg, [name]: value });
     // console.log(pg);

  };
    // handle file input changes
    const [file, setFile] = useState(null);
    const [uploadedMessage, setUploadedMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

    const handleFileInputChange = (event) => {
      setFile(event.target.files[0]);
      console.log(event.target.files[0]);
      
    };
  
  
    const handleform = () => {
      setUploadedMessage('Image uploaded successfully!');
        const PGImageRef = ref(storage, `images/${file.name}`);
        console.log("uploading:");
    
        console.log(file);
        uploadBytes(PGImageRef, file).then((snapshot) => {
          
          
          
          getDownloadURL(PGImageRef)
            .then((url) => {  
              seturlkey(url);
              setPg({ ...pg, photo: url });
              console.log(url);
              
            })
            .catch((error) => {
              console.log(error);
            });
        });
  
    
      };
  
  
    const handleAddDoc = () => {
      const dbInstance = collection(database, "pg");
      setSubmittedMessage('Form submitted successfully!');
    
              addDoc(dbInstance, {
                ...pg,
              });
  
    };
    const handleForm = () => {
      // Upload logic goes here
      // After successful upload, set the uploaded message
      setUploadedMessage('Image uploaded successfully!');
    };
  
    
  
  
    
  
  // console.log(file);
  //   console.log(pg);
  console.log(user);
  if (user){
  return (
    <div className='container'>
      
      
      <div className='navbar'>
        <div className='logo'>
          <img src={logoimg}alt=""></img>

        </div>
        <div className='head'>
          <h1>DASHBOARD</h1>
        </div>
        <div className='name'>
            <p>{user.displayName}</p>
        </div>
        <div className='photo'>
          <img src={user.photoURL}></img>
        </div>
      </div>
      <div className='subcontainer'>
      <div className='sidebar'>
        <div className='button1'>
          <a href="/">HOME</a>
        </div>
        
        <div className='button2'>
          <a href="/">LOGOUT</a>
        </div>
      </div>
      
      <div className='cardsection'>
  {data.map((pg, index) => (
    <div className={`card${index + 1}`} key={index}>
      <div className="pic">
        <img src={pg.photo} alt=""></img>
      </div>
      <div className="facilities">
        <h4>PG Name: {pg.pg_name}</h4>
        Contact: {pg.phone}<br/>
        Address: {pg.address}<br/>
        Rent: {pg.rent}<br/>
      </div>
    </div>
  ))}
</div>
     
<div className='rightbar'>
      <div className="addpg">
        <h2>Add Your PG</h2>
        <div>
          <label>PG Name:</label> <br />
          <input
            type="text"
            value={pg.pg_name}
            name="pg_name"
            onChange={handleChange}
            id="name"
          />
          <br />

          <label>Image:</label> <br />
          <input
            type="file"
            onChange={handleFileInputChange}
            accept="image/*"
          />
          <br />
          <button onClick={handleForm} type="button">Upload</button>
          <br />
          {uploadedMessage && <p>{uploadedMessage}</p>}
          <br />

          <label>Address:</label> <br />
          <input
            id="address"
            name="address"
            value={pg.address}
            onChange={handleChange}
          />
          <br />
          <label>Facilities:</label> <br />
          <input
            type="text"
            id="facilities"
            name="facilities"
            value={pg.facilities}
            onChange={handleChange}
          />
          <br />
          <label>Rent:</label> <br />
          <input
            type="number"
            id="rent"
            name="rent"
            value={pg.rent}
            onChange={handleChange}
          />
          <br />
          <label>Phone Number:</label> <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={pg.phone}
            onChange={handleChange}
          />
          <br />

          <button onClick={handleAddDoc} type="button">Submit</button>
          {submittedMessage && <p>{submittedMessage}</p>}
        </div>
      </div>
    </div>
     
          
        </div>
      </div>
      
      

    
    
  )
}
}