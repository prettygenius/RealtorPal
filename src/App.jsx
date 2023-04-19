import HouseCard from "./components/HouseCard";
import { Grid, Container } from "@mui/material";
import './App.css'
import SearchAppBar from "./components/AppBar";
import homes from './data.json'
import Typography from "@mui/material/Typography";



function App() {

    return ( 
        <div className="App">
        <SearchAppBar />
        <Container sx={{marginY: 5}}>
       
        <Typography 
        variant="h5" 
        component="h2" 
        marginY={3}>
        Top Homes For Sale
         </Typography>
        <Grid container spacing={5}>
        {homes.map((photo) => (
            <HouseCard price={photo.price} photo={photo.image} key={photo.id} />
        ))}
        </Grid>  
        
        </Container>
        </div>
     );
    
}

export default App;







  