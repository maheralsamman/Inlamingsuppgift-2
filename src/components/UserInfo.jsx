import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {
  MainBox,
  Para,
  MainDiv,
  H2,
  Label,
  Input,
  UserBox,
  Button,
} from "../Style/AppStyled";

const ROOT_URL = "https://frebi.willandskill.eu/";
const API_URL = `${ROOT_URL}api/v1/`;
const url = `${API_URL}me/`;

export default function UserInfo() {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    GetClients();
  }, []);

  function GetClients() {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("BUSINESS_TOKEN")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }

  return (
    <div>
      <Para>Welcome {userData.firstName + " " + userData.lastName}</Para>
      <Para>Your email is: {userData.email}</Para>
    </div>
  );
}
