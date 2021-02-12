import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, loginUser } from '../Redux/userReducer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import '../Scss/HeaderStyle.scss'

class Header extends Component {

    componentDidMount() {
        axios.get('/auth').then( res => {
            if( res.data.id ) {
                this.props.loginUser(res.data)
            }
        })
    }

    render() {
        return (
            <header>
                    <h1 className="logo">NOTE NETT</h1>
                <div className="navBar">
                    {
                        !this.props.isLoggedIn ? null : (
                            <ul className="nav_links">
                                <li><Link className="linkNote" to="/Notes">NOTES</Link></li>
                                <li><Link className="linkAccount" to="/Account">ACCOUNT</Link></li>
                            </ul>
                        )
                    }
                </div>
            </header>
        )
    }
}

const mapStateToProps = redux => {
    return redux
}

export default connect(mapStateToProps, { loginUser })(withRouter(Header))