import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';
import {Button, TextField, List, ListItem, Grid, Paper, Card, CardActions, CardContent} from '@material-ui/core';

const AllRestaurantsView= (props) => {
		//object destructuring that takes restaurants and any other things we add here from props
    const {restaurants} = props;

    const style = {
        color: 'white',
        textDecoration: 'none'
      }

    const arrayOfRestaurantsFromAPI = [
      {
      "id": 1,
      "restaurantName": "Don Pedro's",
      "cuisine" : "Mexican",
      "address": "Test Address",
      "zipcode": 11111,
      "menu options": ["drink", "meal"],
      },

      {
        "id": 2,
        "restaurantName": "Tea Alley",
        "cuisine" : "Boba tea",
        "address": "Test Address",
        "zipcode": 11111,
        "menu options": ["drink", "meal"],
        },

      {
        "id": 3,
        "restaurantName": "Caribbean Grill",
        "cuisine" : "Caribbean",
        "address": "Test Address",
        "zipcode": 11111,
        "menu options": ["drink", "meal"],
        },
    ]

      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
        },
        control: {
          padding: theme.spacing(2),
        },
      }));
      const classes = useStyles();

    return (
        <div className="container">
            <div className= "nav-bar">
            <ul>
                <li><Link style = {style} to="/">Home</Link></li>
                <li><Link style = {style} to="/restaurants">Our Mission</Link></li>
            </ul>
          </div> 

          <br/>

          <form className="zip-input">
            <TextField id="outlined-basic" label="Enter zip code" variant="outlined"/>
            <Button variant="contained" color="primary">
              Search
            </Button><br/>
          </form><br/>

        <Grid className="main-grid"
            container 
            container spacing={1} 
            container direction="row"
            justify="center"
            alignItems="stretch"> 


          <Grid className="Grid" 
                container spacing={1}
                item xs={6} 
                container direction="column"
                justify="center" 
                alignItems="stretch">

                                            
                   {arrayOfRestaurantsFromAPI.map((restaurant)=>{ 
                    return (
                      <Grid item> 
                        <Paper style={{minHeight: 150, minWidth: 800, maxHeight: 100, overflow: 'auto', backgroundColor: '#f0f0f5', border: '1px solid white'}}> 
                          <List className="List">
                            <ListItem className="ListItem" alignItems="center" justify="space-between">
                              <Grid container xs={4} direction="row" justify="space-between" >
                                <Grid item xs={3}>
                                  <div className={classes.paper}>Photo</div>
                                </Grid>
                                <Grid item xs={3}>
                                  <div className={classes.paper}>
                                    <p>{restaurant.restaurantName}</p>
                                    <p>{restaurant.cuisine}</p>
                                    <p>{restaurant.address}</p>
                                  </div>
                                </Grid>
                                <Grid item xs={3}>
                                  <div className={classes.paper}>
                                    <p>{restaurant["menu options"]}</p>
                                  </div>
                                </Grid>
                              </Grid>
                          </ListItem>
                          </List>
                      </Paper> <br/><br/>  
                    </Grid>                

                      )
                  })} 
          
          </Grid>
          </Grid>


        </div>
    );
}


export default AllRestaurantsView;