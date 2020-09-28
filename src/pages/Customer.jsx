import React, { useState, useEffect } from "react";
import {
  MainBox,
  MainDiv,
  H4,
  ButtonCustomer,
  Textarea,
  Para,
  Label,
  Button,
} from "../Style/AppStyled";
import UserKit from "../data/UserKit";

const ROOT_URL = "https://frebi.willandskill.eu/";
const API_URL = `${ROOT_URL}api/v1/`;
const url = `${API_URL}customers/`;
const currentCustomer = `${url}`;

export default function Customer(props) {
  const [customer, setCustomer] = useState({});
  const customerId = props.match.params.id;
  const history = props.history;
  const userKit = new UserKit();

  useEffect(() => {
    fetchCustomer();
  }, []);

  function fetchCustomer() {
    fetch(currentCustomer, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("BUSINESS_TOKEN")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data.results.find((x) => x.id == customerId));
        //console.log(customer)
      });
  }

  function deleteCustomer() {
    const deleteCurrentCustomer = `${url}${customerId}/`;
    fetch(deleteCurrentCustomer, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("BUSINESS_TOKEN")}`,
      },
    }).then(() => {
      history.push("/home");
    });
  }

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function updateCustomer() {
    const payload = {
      name: name,
      organisationNr: organisationNr,
      vatNr: vatNr,
      reference: reference,
      paymentTerm: paymentTerm,
      website: website,
      email: customerEmail,
      phoneNumber: phoneNumber,
    };
    userKit
      .updateCustomer(payload, customerId)
      .then((res) => res.json())
      .then((data) => {
        history.push("/home");
      });
  }
  return (
    <MainDiv>
      <MainBox>
        {customer && (
          <div key={customer.id}>
            <Label>Name :</Label>
            <Textarea
              onChange={(e) => setName(e.target.value)}
              placeholder={customer.name}
              rows="1"
            >
              {name}
            </Textarea>
            <Label>OrganisationNr: </Label>
            <Textarea
              onChange={(e) => setOrganisationNr(e.target.value)}
              placeholder={customer.organisationNr}
              rows="1"
            >
              {organisationNr}
            </Textarea>
            <Label>Vat Nr: </Label>
            <Textarea
              onChange={(e) => setVatNr(e.target.value)}
              placeholder={customer.vatNr}
              rows="1"
            >
              {vatNr}
            </Textarea>
            <Label>Reference: </Label>
            <Textarea
              onChange={(e) => setReference(e.target.value)}
              placeholder={customer.reference}
              rows="1"
            >
              {reference}
            </Textarea>
            <Label>Payment Term: </Label>
            <Textarea
              onChange={(e) => setPaymentTerm(e.target.value)}
              placeholder={customer.paymentTerm}
              rows="1"
            >
              {paymentTerm}
            </Textarea>
            <Label>Website: </Label>
            <Textarea
              onChange={(e) => setWebsite(e.target.value)}
              placeholder={customer.website}
              rows="1"
            >
              {website}
            </Textarea>
            <Label>Email: </Label>
            <Textarea
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder={customer.email}
              rows="1"
            >
              {customerEmail}
            </Textarea>
            <Label>Phone Number: </Label>
            <Textarea
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={customer.phoneNumber}
              rows="1"
            >
              {phoneNumber}
            </Textarea>
            <Para>all fields must be refilled when you update</Para>
            <Button onClick={deleteCustomer}>Delete</Button>
            <ButtonCustomer onClick={updateCustomer}>Update</ButtonCustomer>
          </div>
        )}
      </MainBox>
    </MainDiv>
  );
}
