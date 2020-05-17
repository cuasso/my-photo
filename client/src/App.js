import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import { reducer, initialState } from './reducers/userReducer'
import './App.css'

export const UserContext = createContext()
const Routing = () => {
  const history = useHistory()
  const { state, dispath } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispath({ type: 'USER', payload: user })
      history.push('/')
    } else {
      history.push('/signin')
    }
  }, [])
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/create'>
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {

  const [state, dispath] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispath }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
