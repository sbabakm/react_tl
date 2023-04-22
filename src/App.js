import React from "react";
import { Switch, Route , Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Posts from "./components/posts";
import Footer from "./components/footer";
import Courses from "./components/courses";
import Education from "./components/edu";
import Skill from "./components/skill";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/notfound";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid rtl">
          <div className="row">
            <SideBar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              
              <Switch>
                <Route path="/courses" component={Courses} />
                <Route path="/education" component={Education} />
                <Route path="/skill" component={Skill} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/" exact component={Posts} />
                <Redirect to="/not-found" />
              </Switch>
             
            </main>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
