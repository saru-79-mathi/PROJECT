import './Allahabad.css';
import {Stack,Box} from '@mui/material';


const Allahabad=()=>{
    return(
       <div className="Allahabadbg">
         <button>Back</button>
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
export default Allahabad;
