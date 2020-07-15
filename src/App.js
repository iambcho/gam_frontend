/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React, { Component } from 'react';
//styling for the webpage
import './App.css';

//These are all the component we need to run our application
import AllStudents from "./components/container/AllStudents";
import AddStudent from './components/container/AddStudent';
import SingleStudent from './components/container/SingleStudent';
import EditStudent from './components/container/EditStudent';
import AllCampuses from "./components/container/AllCampuses";
import SingleCampus from "./components/container/SingleCampus";
import AddCampus from "./components/container/AddCampus";
import EditCampus from './components/container/EditCampus';

//This is needed in order to create a SPA (Single Page Application)
//SPA's are useful in the sense that they allow the client to 
//transition between "pages" without having to reload the entire page
//instead with routers you can just load the contents of the single page
//that need to be changed, leading to faster load times
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import Appview to be able to display the components in a SPA;
import AppView from "./AppView";

class AppContainer extends Component {
  //tells the reactDOM what to display bsaed on the information provided
  render() {
    //With Route component we cannot load up pre-built components
    //as a result we generate these functions that return the components.
    //This way we can render pages by passing them as functions (which arent pre-built)
    const AppViewComponent = () => <AppView />
    const AllStudentsComponent = () => <AllStudents />
    const AddStudentComponent = () => <AddStudent/>
    const SingleStudentComponent = () => <SingleStudent/>
    const EditStudentComponent = () => <EditStudent/>
    const SingleCampusComponent = () => <SingleCampus/>
    const AllCampusesComponent = () => <AllCampuses/>
    const AddCampusComponent = () => <AddCampus/>
    const EditCampusComponent = () => <EditCampus/>

    return (
      <div>
        {/*The Router component enables use to render the pages we provide the paths to*/}
        <Router>
          {/* The Switch component ensure we render only one page (this means that multiple 
          components can be rendered at the same time but to avoid problems we ensure 
          only one page is rendered ) */}
          <Switch>
          <div className="App">
            <div className="App-header">
                {/* Each Route Component needs a path prop followed by a render prop 
                to be able to load to component at the appropriate url link */}
                <Route exact path="/" render={AppViewComponent}/>
                <Route exact path="/students" render={AllStudentsComponent}/>
                {/* Add Students comment later You DUmmy */}
                <Route exact path="/add_students" render={AddStudentComponent}/> 
                <Route exact path="/single_student/:studentId" render={SingleStudentComponent}/>
                <Route exact path="/edit_student" render={EditStudentComponent}/>
                <Route exact path ="/single_campus" render = {SingleCampusComponent}/>
                <Route exact path="/campuses" render={AllCampusesComponent}/>
                <Route exact path="/add_campus" render={AddCampusComponent}/>
                <Route exact path="/edit_campus" render={EditCampusComponent}/>

              </div>
          </div>
          </Switch>
        </Router>
      </div>
    )
  }
}
//prupose is to when we import this component into another file, the 
//main component that will be called on is AppContainer
export default AppContainer;