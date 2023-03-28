import Nav from "./components/Nav"
import Content from "./components/Content";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Nav />
      <Grid container columnSpacing={1}>
        <Grid item sx={{width: "20%", display: {xs: "none", sm: "none", md:"block"}}}>
          <Sidebar />
        </Grid>

        <Grid item sx={{
          width: { xs: "90%", sm: "90%", md: "50%" },
          margin: {xs: "auto", sm: "auto"}
        }}>
          <Content />
        </Grid>

        <Grid item sx = {{width: "30%", display: {xs: "none", sm: "none", md:"block"}}}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
