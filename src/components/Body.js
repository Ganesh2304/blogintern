import React from "react";
import "../components/Body.css";
import Pic from '../components/pic1.jpg';
import Profile from '../components/profile1-removebg-preview.png';

function Body() {
  return (
    <div>


      <div className="body">
        <div className="body-text1">Our blog</div>
        <div className="body-text2">Stories & ideas</div>
        <div className="body-text3">The latest news to drive business strategy</div>
      </div>

      <div className="body-container">
        <div className="body-card-left">
         <img src={Pic} alt=""/>
         <div className="body-card-left-part2">
            <div >
              <button className="sales-button" >Sales Ops</button>
            </div>
            <div style={{color:'black',fontSize:'16px'}}>
                8 min to read
            </div>
         </div>
         <div className="body-card-left-part3">
            The 3 Best Pratices in Sales Prospecting
            </div>
         <div className="body-card-left-part4">
            <div>
               <img src={Profile} className="profile" alt=""/>         
            </div>
            <div className="body-profile-text">
             <div style={{color:'black',fontSize:'20px'}}>Mehdi Lerille</div>
             <div style={{color:'grey',fontSize:'16px'}}>20 apr 2022</div>
            </div>
         </div>
        </div>
        <div  className="body-card-right">
          right
        </div>
      </div>

    </div>
  );
}

export default Body;
