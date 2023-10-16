import React from "react";
import './Main.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import lankaNIC from "lanka-nic";
import { ChangeEvent, useState } from "react";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CopyrightIcon from '@mui/icons-material/Copyright';







export  function National(){

const [inputText, setInputText] = useState("");

const handleChange = (e) => {
      
      setInputText(e.target.value);
    };


const Submit =()=>{


let DisplayData = lankaNIC.getInfoFromNIC(inputText);
console.log(DisplayData);

document.getElementById('dateview').innerHTML=DisplayData.dateOfBirth;
document.getElementById('genderview').innerHTML=DisplayData.gender;

}

const Clear=()=>{
      document.getElementById('dateview').innerHTML="Display the D.O.B";
      document.getElementById('genderview').innerHTML="Display the Gender";
      document.getElementById('nic').value="";
}


return(


<>


<div className="main">
    <h2>NIC DETAILS</h2>
    <input 
    type="text" 
    id="nic" 
    onChange={handleChange} 
    value={inputText}
    placeholder="Enter the NIC here"></input><br></br>




    <Button id='btnsubmit' variant="contained" endIcon={<SendIcon />} onClick={()=>{Submit()}}>
        SUMBIT
      </Button><br></br>

<div className="displayArea">
      <label id='nicdate'>BIRTHDAY</label> <CalendarMonthIcon/>
      <div id="dateview"> Displays the D.O.B</div>
      </div>

<div className="genderviewer">
<label id='nicdate'>GENDER </label><WcIcon/>
      <div id="genderview">Displays the Gender</div>

</div>

<Button id='btnclear' variant="contained" endIcon={<CleaningServicesIcon />} onClick={()=>{Clear()}}>
        CLEAR
      </Button><br></br>

    <div className="copyright">

      <CopyrightIcon/><div className="txt">2023 Manoj Vitharana</div>

      </div>
</div>

</>

)
    
};