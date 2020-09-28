import React, { useState } from "react";
import UserKit from "../data/UserKit";
import {
  MainBox,
  MainDiv,
  H2,
  Label,
  Input,
  UserBox,
  Button,
} from "../Style/CreateUserStyled";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const userKit = new UserKit();

  function handleCreateUser() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  return (
    <MainDiv>
      <MainBox>
        <H2>Register a new user</H2>
        <UserBox>
          <Label htmlFor="firstName">First Name :</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </UserBox>
        <UserBox>
          <Label htmlFor="lastName">Last Name :</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </UserBox>
        <UserBox>
          <Label htmlFor="email">Email :</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </UserBox>
        <UserBox>
          <Label htmlFor="Password">Password :</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </UserBox>
        <UserBox>
          <Label htmlFor="organisationName">Organisation Name :</Label>
          <Input
            value={organisationName}
            onChange={(e) => setOrganisationName(e.target.value)}
          />
        </UserBox>
        <UserBox>
          <Label htmlFor="organisationKind">Organisation Kind :</Label>
          <Input
            value={organisationKind}
            onChange={(e) => setOrganisationKind(e.target.value)}
          />
        </UserBox>
        <Button onClick={handleCreateUser}>Create User</Button>
      </MainBox>
    </MainDiv>
  );
}
