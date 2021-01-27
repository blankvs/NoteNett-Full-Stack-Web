import React from 'react'
import './App.css';
import routes from './routes'
import { connect } from 'react-redux'
import Header from './components/Header'
import loginUser from './Redux/userReducer'

function App(props) {
  return (
    <div className="App">
      <Header/>
      { routes }
      <div className="UserIn">
        {
          props.isLoggedIn?`LOGGED AS ${props.user.email}`: null
        }
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return {reduxState}
}

export default connect(mapStateToProps, {loginUser})(App);
