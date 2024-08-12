import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'

export const MyCard = ({match}) => {
   return(
    <Card>
       <CardContent>
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant="h6">First Team</Typography>
            </Grid>
            <Grid item>
              <img style={{width:85}}src={require("../images/vs.png")}/> 
            </Grid>
            <Grid item>
                <Typography variant="h6">Second Team</Typography>
            </Grid>
        </Grid>
       </CardContent>
       <Grid container justifyContent="center" spacing={2}>
       <CardActions>
        <Button item variant="contained" color="success">
            Show Details
        </Button>
        <Button item variant="contained" color="success">
            {new Date().toString()}
        </Button>
       </CardActions>
       </Grid>
    </Card>
   );
}
