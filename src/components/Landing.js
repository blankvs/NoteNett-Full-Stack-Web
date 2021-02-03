import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/userReducer'
import { Link, Redirect } from "react-router-dom"
import '../Scss/LandingStyle.scss'

function Landing() {

    return (
        <div>
            <h1 className="landSlogan">NOTES IN THE BEST WAY YOU "NOTE" HOW</h1>
                <div className="OrganizerLand">
                    <div className="redLogOutline">
                        <button className="redLogin"><Link className="redLogin" to="/Login">LOGIN</Link></button>
                    </div>
                    <div className="redRegOutline">
                        <button className="redRegister"><Link className="redRegister" to="/Register">REGISTER</Link></button>
                    </div>
                </div>
        </div>
    )
}

export default Landing; 