import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import CreatePost from './createpost';
import AllPosts from './allposts';
import CreateCourse from './createcourse';

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid rtl">
                <Navbar />
                <div className="row">
                    <Sidebar />
                    <main
                        role="main"
                        className="col-md-9 ml-sm-auto col-lg-10 px-4"
                    >
                        <Switch>
                            <Route path="/admin/create-post" component={CreatePost} />
                            <Route path="/admin/allposts" component={AllPosts} />
                            <Route path="/admin/create-course" component={CreateCourse} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

export default Dashboard;
