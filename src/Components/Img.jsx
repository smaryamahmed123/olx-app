import Img from '../assets/btnImg.png'
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

function Image() {
    return ( 
        <>
         <Box position="relative" >
      <img src={Img} alt="" width="70px" height="25%" />
       <div style={{ position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         textAlign: 'center',
         color: '#002f34',
         display: 'flex',
         alignItems: 'center',
         fontWeight: 'bold'
             }}>
         <AddIcon style={{ fontSize: 25 }} />
         <div style={{}}>SELL</div>
       </div>
    </Box>
        </>
     );
}

export default Image;