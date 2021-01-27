import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <div className="landSlogan"><h1>NOTES IN THE BEST WAY YOU "NOTE" HOW</h1></div>
                <div className="redLogReg">
                    <Link className="redLogin" to="/Login">LOGIN</Link>
                    <Link className="redRegister" to="/Register">REGISTER</Link>
                </div>
            </div>
        )
    }
}

export default Landing; 