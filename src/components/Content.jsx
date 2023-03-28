import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function Content() {
  return (
    <Grid>
      <Box sx={{bgcolor: 'background.paper'}}>
          <br></br>
          <Typography variant="h4">Welcome to My Website</Typography>
          <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nemo dolore nostrum minus ad laboriosam numquam placeat dolorem nam accusamus, omnis esse! Voluptate, rerum repellendus sapiente saepe beatae dignissimos quaerat.</Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={3} sx = {{marginTop : "10px"}}>
          <Grid item sx={{width: {xs: "100%", md: "100%"}}}>
            <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/BeforeSunset1.jpeg"
                  alt="Julie Delpy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam cupiditate iste nobis modi blanditiis veritatis numquam, quia deserunt rem laboriosam necessitatibus adipisci molestias. Accusantium debitis ducimus numquam necessitatibus id.
                  </Typography>
                </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{width: {xs: "100%", sm: "50%"}}}>
            <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/BeforeSunset1.jpeg"
                  alt="Julie Delpy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam cupiditate iste nobis modi blanditiis veritatis numquam, quia deserunt rem laboriosam necessitatibus adipisci molestias. Accusantium debitis ducimus numquam necessitatibus id.
                  </Typography>
                </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{width: {xs: "100%", sm: "50%"}}}>
            <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/BeforeSunset1.jpeg"
                  alt="Julie Delpy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam cupiditate iste nobis modi blanditiis veritatis numquam, quia deserunt rem laboriosam necessitatibus adipisci molestias. Accusantium debitis ducimus numquam necessitatibus id.
                  </Typography>
                </CardContent>
          </Card>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Content;