import React ,{useContext} from 'react'
import logoimg from '../../images/logo.png'
import './dashboard.css'
import { AuthContext } from "../../context";
import home3 from '../../images/home3.jpeg'
import home2 from '../../images/home2.jpeg'
import home1 from '../../images/home1.jpeg'

export default function Dashboard() {
  const {user} =useContext (AuthContext);
  console.log(user);
  if (user){
  return (
    <div className='container'>
      
      
      <div className='navbar'>
        <div className='logo'>
          <img src={logoimg}alt=""></img>

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
          <a href="/">Home</a>
        </div>
        <div className='button2'>
          <a href="/">Dashboard</a>
        </div>
      </div>
      <div className='cardsection'>
        <div className='card1'>
          <div className="pic">
            <img src={home1} alt=""></img>
          </div>
          <div className="facilities">
            <h4>Bucker PG</h4>
            Contact:<br/>

            Address:<br/>
            Rent:<br/>
          </div>
        </div>
        <div className='card2'>
        <div className="pic">
            <img src={home2} alt=""></img>
          </div>
          <div className="facilities">
            <h4>Bucker PG</h4>
            Contact:<br/>
            Address:<br/>
            Rent:<br/>
        </div>
        </div>
        <div className='card3'>
        
        
        </div>
      </div>
      <div className='rightbar'>
        
        
          [ <div className="title">Find Your PG </div>
              <br/>
              <form action=''>
                <div className="user_details">
                  <div className="input_box">
                    <span className="details">Full Name : </span>
                    <input type="text" placeholder="Enter your name" required/>
                  </div><br/>
                  <div className="input_box">
                    <span className="details">PGName : </span>
                    <input type="text" placeholder="Enter the PGName" required/>
                  </div><br/>
                  <div className="input_box">
                    <span className="details">Contact : </span>
                    <input type="number" placeholder="Enter the contact no" required/>
                  </div><br/>
                 
                 
                  <div className="input_box">
                    <span className="details">Address  :   - </span>
                    <input type="text" placeholder="Enter the address" required/>
                  </div><br/>
                  <div className="input_box">
                    <span className="details">Gender Details : </span>
                    <input type="text" placeholder="Enter the genders" required/>
                  </div>
                </div>  <br/>
                <div className="button">
                  <input type="submit" value="REGISTER"/>
                </div>
              </form>

          
        </div>
      </div>
      </div>
      

    
    
  )
}
}