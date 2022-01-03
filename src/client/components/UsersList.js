import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRequest } from "../store/actions/users.actions";


class UsersList extends Component {

    componentDidMount(){
        // this.props.getUserRequest();
    }
    renderUsers = () => {
        this.props.users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ));
    }


    render(){
        return(
            <div>
                {this.props.users?
                    <ul>
                        {renderUsers()}
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

export default connect(mapStateToProps, {getUserRequest})(UsersList);