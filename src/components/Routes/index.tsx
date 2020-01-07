import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Menu from "../Menu";
import mainMenuObject from "../../resources/mainMenu";
import Footer from "../Footer";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Users from "../Pages/Users";

import "./Routes.scss";

export default function Routes(): object {
  return (
    <BrowserRouter>
      <Menu routerList={mainMenuObject} />
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{ enter: 1000, exit: 1000 }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/users" component={Users} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
      <Footer />
    </BrowserRouter>
  );
}
