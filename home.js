import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Navigate, useNavigate } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const Home=()=>{
    const [Age, setAge] = React.useState('');
    const navigate=useNavigate();
    const handleChange = (event) => {
      setAge(event.target.value);
      let c=event.target.value;

      if(c==="Chennai"){
        navigate('/chennai');
      }
      else if(c=="Allahabad"){
        navigate('/Allahabad');
      }
      else if(c=="Darjeeling"){
        navigate('/Darjeeling');
      }
      else if(c=="Bengaluru"){
        navigate('/bengaluru');
      }
      else if(c=="Varanasi"){
        navigate('/varanasi');
      }
    };
  

    return(

        <div className='front'>
            <h1>INCREDIBLE ! INDIA</h1>
           

    <div className="city">
    <FormControl sx={{width:'300px'}}>
    <InputLabel id="demo-simple-select-label">Select your city</InputLabel>
      <Select id="city" sx={{color:'black'}}
 
    
    value={Age}
    label="Select your city"
    onChange={handleChange}
      >
    <MenuItem value="Chennai">Chennai</MenuItem>
    <MenuItem value="Allahabad">Allahabad</MenuItem>
    <MenuItem value="Darjeeling">Darjeeling</MenuItem>
    <MenuItem value="Bengaluru">Bengaluru</MenuItem>
    <MenuItem value="Varanasi">Varanasi</MenuItem>
    <MenuItem value="Kolkata">Kolkata</MenuItem>
  </Select>
  </FormControl>

  </div>
  </div>
    );
}
export default Home;
