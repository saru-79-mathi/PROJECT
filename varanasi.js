import './varanasi.css';
import {Link} from 'react-router-dom';

import {Stack,Box} from '@mui/material';


const Varanasi=()=>{
    return(
       <div className="varanasibg">
        <button>Back</button>
        <Link to="./Home"></Link>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button id='btn1'>Cab</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button id='btn2'>Food</button></Box>
            </Stack>
            <Stack direction="row">
                <Box flex={1} sx={{height:'500px'}}><button id='btn3'>Resort</button></Box>
                <Box flex={1} sx={{height:'500px'}}><button id='btn4'>Places</button></Box>
            </Stack>
       </div>
    )
}
export default Varanasi;
