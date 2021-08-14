import './App.css';
import Home from './Pages/Home'
import Weather from './Pages/Weather';
import {Switch, Route, Redirect} from 'react-router-dom'
import {useContext} from "react"
import {CityContext} from "./Context/CityContext"

function App() {

  const {canAccessRoute} = useContext(CityContext)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/weather">
            {canAccessRoute ? <Weather/> : <Redirect to="/"/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
