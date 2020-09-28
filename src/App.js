import React, { useState } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import {
  MainBox,
  MainDiv,
  H2,
  Label,
  Input,
  UserBox,
  Button,
} from "./Style/AppStyled";

import { UserContext } from "./contexts/UserContext";
import UserKit from "./data/UserKit";
import Customer from "./pages/Customer";
import UserInfo from "./components/UserInfo";
import GetClients from "./components/GetClients";
import CreateCustomer from "./components/CreateCustomer";
import CreateUser from "./components/CreateUser";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [customerList, setCustomerList] = useState("");

  const userKit = new UserKit();
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const uid = params.get("uid");
  const token = params.get("token");

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(history.push("/login"));
  }

  function handleLogin() {
    userKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }
  const isLogged = !!localStorage.getItem("BUSINESS_TOKEN");
  return (
    <div>
      <UserContext.Provider
        value={{ userData, setUserData, customerList, setCustomerList }}
      >
        <Switch>
          <Route path="/customer/:id" history={history} component={Customer} />

          <Route path="/home">
            <MainDiv>
              <MainBox>
                <UserInfo />
                <GetClients />
                <CreateCustomer />
              </MainBox>
            </MainDiv>
            {!isLogged && history.push("/login")}
          </Route>

          <Route path="/login">
            {/* Only show that account is beeing activated if uid and token exists in URL */}
            {uid && token && (
              <div>
                <H2>Activate account</H2>
                Your account is being activated
                {handleActivateAccount()}
              </div>
            )}
            {/* If uid and token doesn't exist in url, render login form */}
            {!uid && !token && (
              <MainDiv>
                <MainBox>
                  <H2>Your account is now active. Please Login</H2>
                  <UserBox>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </UserBox>
                  <UserBox>
                    <Label htmlFor="password">Password:</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </UserBox>
                  <Button onClick={handleLogin}>Login</Button>
                </MainBox>
              </MainDiv>
            )}
          </Route>
          <Route path="/">
            <CreateUser />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
