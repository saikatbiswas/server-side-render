import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/users_actions";


class UsersPage extends Component {

    componentDidMount(){
        this.props.fetchUsers();

    }
    renderUsers() {
        return this.props.users.map(user => (
            <li key={user._id}>{user.name}</li>
        ))
    }


    render(){
        return(
            <div>
                {this.props.users?
                    <ul>
                        {this.renderUsers()}
                    </ul>
                :null}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
}

const loadData = (store) => {
    // console.log(store.dispatch(fetchUsers()));
    
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersPage)
};