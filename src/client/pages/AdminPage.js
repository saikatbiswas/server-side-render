import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllAddress } from "../store/actions/users_actions";

class AdminPage extends Component {

    componentDidMount(){
        
        this.props.getAllAddress();
        // console.log('prop',this)

    }
    renderUsers() {
        return this.props.admin.map(user => (
            <li key={user._id}>{user.fullname}</li>
        ))
    }

    render() {
        return (
            <div>
                {this.props.admin && this.props.admin.length > 0?
                    <ul>
                        {this.renderUsers()}
                    </ul>
                :null}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        admin: state.admin,
        auth: state.auth
    }
}


export default {
    component: connect(mapStateToProps, {getAllAddress})(AdminPage),
    loadData: ({ dispatch }) => dispatch(getAllAddress())
};