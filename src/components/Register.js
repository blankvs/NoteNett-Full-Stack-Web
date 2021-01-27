import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"


class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    onType = (e) => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegister = () => {
        axios.post('/auth/register', this.state).then((res) => {
            console.log(res.data)
            this.props.loginUser(res.data)
            this.props.history.push("/Notes")
        }).catch(() => alert("Register failed"))
    }

    render() {
        
        if (this.props.isLoggedIn) {
            return <Redirect to="/Notes" />
        }

        return (
            <div>
                <div className="userForm">
                    <h1 className="textEmail">EMAIL</h1>
                    <input className="inputEmail" value={this.state.email} name="email" type="text" onChange={(e) => this.onType(e)} />
                    <h1 className="textPass">PASSWORD</h1>
                    <input className="inputPass" value={this.state.password} name="password" type="text" onChange={(e) => this.onType(e)} />
                    <ul>
                        <li><Link className="registerSwitch" to="/Login">LOGIN?</Link></li>
                    </ul>
                </div>
                <div>
                    <button className="loginButton" onClick={() => this.handleRegister()}>SIGN UP</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Register);
