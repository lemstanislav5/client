import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoginPage from './componsnts/LoginPage/LoginPage'
import LayoutLoginPage from "./componsnts/Layouts/LayoutsLoginPage"
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useEffect } from 'react'
// import { Provider } from 'react-redux'
// import { store } from './redux/store';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LayoutLoginPage>
            <LoginPage />
          </LayoutLoginPage>
        </Route>
      </Switch>
    </Router>
  );
}
