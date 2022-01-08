import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Header extends Component{

    render(){
        // console.log(this.props.auth)

        const authButton = this.props.auth ? (
            <div 
                style={{
                    cursor: 'pointer',
                }}
                onClick={this.props.onLogout}
            >Logout</div>
        ) : (
            <Link to="/login">Login</Link>
        )
        
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"  style={{ marginLeft: '20px'}}>SSR React</Link>

                    <ul className="right" style={{ marginRight: '20px'}}>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/admins">Admins</Link></li>
                        <li>{authButton}</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({auth})=> {
    return { auth }
};

export default connect(mapStateToProps)(Header);