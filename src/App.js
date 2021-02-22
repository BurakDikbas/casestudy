import { createMuiTheme } from '@material-ui/core';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { StylesProvider } from "@material-ui/core/styles";
import Main from './pages/Main/Main';
import NewSave from './pages/Newsave/Newsave';

import {ListProvider} from "./context/ListContext"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>

      <ListProvider>
        <StylesProvider injectFirst>
        <Router>
          <Navbar/>
            <div>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/newsave"  component={NewSave} />
              </Switch>
            </div>
        </Router>
        </StylesProvider>
      </ListProvider>
    </div>
  );
}

export default App;
