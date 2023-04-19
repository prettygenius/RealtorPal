import {Paper, Grid ,Typography, Box} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



const HouseCard = (props) => {
    
    return ( 
        <Grid item xs={10} sm={5} md={3}>
        <Paper elevation={3}>
        <img src={props.photo} alt='image of house' 
         className='img'/>
        <Box paddingX={1}>
        <Typography variant="h5" component="h2" marginLeft={0.5}>
        ${props.price},000
         </Typography>
         <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <HomeIcon sx={{
            width: 22
        }} />
        <Typography variant="body2" component="p" marginLeft={0.5}>
        For Sale By Owner
        </Typography>
        </Box>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <AccessTimeIcon 
        sx={{
            width: 22,
            marginTop: 3
        }} />
        <Typography variant="body2" component="p" marginTop={3} marginLeft={0.5}>
            Open House: 12-4
        </Typography>

        </Box>
        </Box>
        </Paper>
        </Grid>
     );
}
 
export default HouseCard;