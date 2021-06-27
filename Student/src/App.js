import React, {useEffect, useState} from 'react'
import Routes from './Routes'
import { Link, withRouter, BrowserRouter, Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './App.css'
import LOGO from './static/images/logo.png'
import SdkService from './utils/sdkService'
import LandingPage from './LandingPage';
import {MessageService} from "./utils/messageService";

function App(props) {
  window.sdk = new SdkService()
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [shareRequestToken, setShareRequestToken] = useState(null);
  const [acceptVCLink, setAcceptVCLink] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      window.sdk.init().then(networkMember => {
        window.messageService = new MessageService(networkMember)
      }).catch(console.error)
    } else {
      window.messageService = null
    }
  }, [isAuthenticated])

  async function handleLogout(event) {
    event.preventDefault()
    userHasAuthenticated(false)

    try {
      await window.sdk.signOut()
      props.history.push('/login')
    } catch (error) {
      console.log('error on logout', error)
    }
  }

 

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/login" >
    <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>
                <p style={{height: '50px', paddingLeft: '20px', marginTop: '20px'}}>&#127891; DecentDocs</p>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              { isAuthenticated
                ? <>
                    <NavItem onClick={handleLogout}>Logout</NavItem>
                  </>
                : <>
                    <LinkContainer to='/signup'>
                      <NavItem>Sign Up</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated, shareRequestToken,  setShareRequestToken, acceptVCLink, setAcceptVCLink}} />
        
    </div>
    </Route>
    </Switch>
  )
}

export default withRouter(App)
