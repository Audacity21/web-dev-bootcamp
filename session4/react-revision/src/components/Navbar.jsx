import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <AppBar>
            <Toolbar>
                <Typography>App</Typography>
                <Container>
                    <Link style={{ color: "white"}} to="/"><Button color="white">Home</Button></Link>
                    <Link to="/form"><Button color="white">Form</Button></Link>
                    <Link to="/people"><Button color="white">People</Button></Link>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;