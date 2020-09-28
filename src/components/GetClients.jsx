import React, { useState, useEffect, useContext } from "react";
import UserKit from "../data/UserKit";
import { Route, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  MainBox,
  MainDiv,
  H2,
  H3,
  Atag,
  Label,
  Input,
  UserBox,
  Button,
} from "../Style/AppStyled";

export default function GetClients() {
  const userKit = new UserKit();
  const { customerList, setCustomerList } = useContext(UserContext);

  useEffect(() => {
    fetchClients();
  }, []);

  function fetchClients() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  return (
    <div>
      <H3>Your customers :</H3>
      {customerList &&
        customerList.map((customerItem) => {
          return (
            <div key={customerItem.id}>
              <Atag href={`customer/${customerItem.id}`}>
                {customerItem.name}
              </Atag>
            </div>
          );
        })}
    </div>
  );
}
