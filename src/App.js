import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'

import './App.css'
import { useSelector } from 'react-redux'

const UnAuthApp = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    </div>
  )
}

const AuthApp = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Products />
        </Route>
      </Switch>
    </div>
  )
}
function App() {
  const {user} = useSelector(state => state.auth)
  return (
    <div className='App'>
      <Nav />
      {!user ? <UnAuthApp /> : <AuthApp />}
    </div>
  )
}

export default App
