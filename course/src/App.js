import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import AddCourses from "./AddCourses";
import Courses from "./Courses";
import {Jumbotron} from "react-bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: {}
        }
    }


    render() {
        return (
            <>
                <BrowserRouter>
                    <Jumbotron>React-Django</Jumbotron>
                    <div className={'container col-4 justify-content-center'}>
                        <Link classname={"btn btn-primary"} to={"/"}>Home</Link>
                        <Link classname={"btn btn-primary"} to={"/add"}>Add</Link>
                        <Switch>
                            <Route path="/add" component={AddCourses}/>
                            <Route path="/" component={Courses}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default App