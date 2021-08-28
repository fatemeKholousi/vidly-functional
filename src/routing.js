import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Rental from "./components/rental";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieDetail from "./components/movieDetail";
import Login from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MovieForm from "./components/movieForm";

function Routing() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/rental" component={Rental} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/movies/:id" component={MovieForm} />
      <Route exact path="/not-found" component={NotFound} />

      <Redirect from="/" to="/movies" />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routing;
