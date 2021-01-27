import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"

class Pinned extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Pinned;