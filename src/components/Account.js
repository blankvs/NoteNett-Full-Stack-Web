import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { logout, loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"
import { withRouter } from 'react-router-dom'

class Account extends Component {

    componentDidMount() {
        axios.get('/auth').then(res => {
            if (res.data.id) {
                this.props.loginUser(res.data)
            }
        })
    }

    logoutUser = () => {
        axios.delete('/auth/logout').then(() => {
            this.props.logout()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <div className="inputOutline">
                    <button className="loginButton" onClick={this.logoutUser}>LOGOUT</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = redux => {
    return redux
}

export default connect(mapStateToProps, { logout, loginUser })(withRouter(Account));

