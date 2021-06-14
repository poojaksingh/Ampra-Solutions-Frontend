import React from 'react'
import logo from "../../Assets/welcome.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./Home.css";
import logo1 from "../../Assets/logoR.png";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { useLocation } from 'react-router-dom';


import { Link } from "react-router-dom";

function Home() {
    const location = useLocation();
    console.log(location.state.user.user.first_name)
    let message="Hello,Welcome "
    return (
        <div className="text-center background">
           
            <div className="text-center text-white  ">
            <img style={{ width: "120px", height: "80px" }} src={logo1} alt="logo1" />
          
            
              <span className="float-right pr-2 py-4">
              <Link to="/" style={{ color: "white" }}>
                  Log Out
                </Link>
              </span>
            
           
           
            </div>
           
           
            
           <div className=" container-fluid signup-background">
          
           <div className="row">
                <div className="col-lg-6">
<div>
<img style={{ width: "400px", height: "400px" }} src={logo} alt="logo" />
</div>
                </div>
                <div className="col-lg-6  mt-5">
               <div>
               <Card className="cardSmall">
      <CardContent>
      <h4 style={{ color:"orange" }}>{ message + location.state.user.user.first_name}</h4>
      <p>“We are so excited to have you on our team! With your experience, you will be a great addition. Welcome aboard!”</p>
       <button className="btn text-white font-weight-bolder"
                style={{
                  backgroundColor: "#001b30",
                  width: "150px",
                  borderRadius: "20px",
                }}>Know More</button>
        
      </CardContent>
     
    </Card>
               </div>

                </div>
                  {/* Cards */}
               <div className="container text-center pb-3 ">
               <div className="font-weight-bolder mb-2" style={{ fontFamily:"cursive", color:"darkblue",fontSize:"30px" }}>Facility</div>
<div className="row">
<div className="col-lg-3 ">
<Card className="cardSection text-white font-weight-bolder" style={{ backgroundColor:"palegreen" }}>
      <CardContent>
      <DriveEtaIcon/>
      <p>Tranportation Services</p>
       
      </CardContent>
     
    </Card>  
</div>
<div className="col-lg-3 ">
<Card className="cardSection text-white font-weight-bolder" style={{ backgroundColor:"skyblue" }}>
      <CardContent>
     <LocalHospitalIcon/>
     <p>Medical Insurance</p>
               
      </CardContent>
     
    </Card>  
</div>
<div className="col-lg-3 ">
<Card className="cardSection text-white font-weight-bolder" style={{ backgroundColor:"palevioletred" }}>
      <CardContent>
      <FastfoodIcon/>
      <p>Canteen and Snacks</p>
      
        
      </CardContent>
     
    </Card>  
</div>
<div className="col-lg-3 ">
<Card className="cardSection text-white font-weight-bolder" style={{ backgroundColor:"palegoldenrod" }}>
      <CardContent>
      <AllInclusiveIcon/>
      <p>Learnings & apportunity</p>
      
      </CardContent>
     
    </Card>  
</div>
</div>
                   </div>   

                   {/* cards end       */}

            </div>
  
               </div> 
               

                     </div>
    )
}

export default Home
