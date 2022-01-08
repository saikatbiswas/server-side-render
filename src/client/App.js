import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser, userSignOut } from "./store/actions/users_actions";
import { connect } from "react-redux";

class App extends Component{

    componentDidMount(){
        // this.props.fetchCurrentUser();

    }

    logoutHandler = ()=>{
        console.log('hi')
        this.props.dispatch(userSignOut()).then(response=>{
            this.props.history.push('/');
        })
    }

    render(){
        return(
            <div>
                <Header onLogout={this.logoutHandler} />
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}


export default {
    // component: App,
    component: connect(mapStateToProps)(App),
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser(), userSignOut() )
};