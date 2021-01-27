import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Notes from './components/Notes'
import Pinned from './components/Pinned'
import Account from './components/Account'
import { Link } from 'react-router-dom'

export default <Switch>
    <Route exact path="/" component = { Landing } />
    <Route path="/Login" component = { Login } />
    <Route path="/Register" component = { Register } />
    <Route path="/Notes" component = { Notes } />
    <Route path="/Pinned" component = { Pinned } />
    <Route path="/Account" component = { Account } />
</Switch>