import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../store/actions/users_actions';

class LoginPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    submitForm = (event)=>{
        event.preventDefault();
        // this.props.getUserLogin(this.state).then((res)=>{
        //     console.log(res);
        // });
        // this.props.dispatch(getUserLogin(this.state)).then((res)=>{
        //     console.log(res);
        // });

        this.props.getUserLogin(this.state).then((res)=>{
            if(this.props.auth){
                this.props.history.push('/');
            }
        });
    }

    render() {
        // console.log('this',this)
        
        return (
            <div>
                <form onSubmit={(event)=>this.submitForm(event)}>
                    <input type="email" onChange={(event)=>this.setState({email:event.target.value})} />
                    <input type="password" onChange={(event)=>this.setState({password:event.target.value})} />

                    <button onClick={(event)=>this.submitForm(event)} data-test="login-submit-component">Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}


export default {
    component: connect(mapStateToProps, { getUserLogin })(LoginPage),
    // component: connect(mapStateToProps)(LoginPage)
    // loadData: ({ dispatch }) => dispatch(getUserLogin(this.state))
};