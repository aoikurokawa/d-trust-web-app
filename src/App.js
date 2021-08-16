import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { init } from 'emailjs-com'

import './App.css'
import Home from './components/Home/Home'
import Template from './components/Template'
import Start from './components/Start/Start'
import Formdtrust from './components/dtrust/Formdtrust'
import UseControlKey from './components/ControlKey/UseControlKey'
import DestroyControlKey from './components/ControlKey/DestroyControlKey'
import Promote from './components/Promote/Promote'
import Docs from './components/Docs/Docs'
import Legal from './components/Legal/Legal'
import DTTokens from './components/DTTokens/DTTokens'
import Contact from './components/Contact/Contact'

init('user_y2e2B4RkPGGgKgzhsVXSG')

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/start" exact>
              <Start />
            </Route>
            <Route path="/formdtrust" exact>
              <Formdtrust />
            </Route>
            <Route path="/usecontrolkey" exact>
              <UseControlKey />
            </Route>
            <Route path="/destroycontrolkey" exact>
              <DestroyControlKey />
            </Route>
            <Route path="/promote">
              <Promote />
            </Route>
            <Route path="/docs/:tabIndex([0-4])?" exact>
              <Docs />
            </Route>
            <Route path="/legal" exact>
              <Legal />
            </Route>
            <Route path="/dttokens" exact>
              <DTTokens />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App
