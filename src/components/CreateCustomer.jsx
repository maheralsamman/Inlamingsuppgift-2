import React, { useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import GetClients from "./GetClients";
import UserKit from "../data/UserKit";
import {MainBox,Para,MainDiv,H1,H3tag,InputCustomer,LabelCustomer,UserBox,ButtonCustomer} from '../Style/AppStyled'

export default function CreateCustomer() {
  const userKit = new UserKit();
let errorMessage = false;
let errorMessage2 = false;

function error(){
    //setVatNrError("Vat number should start with 'SE' and contain only numbers like this SExxxxxxxxxx")
    //setPaymentTermError("Payment Term should contain att least a number")
    console.log("asd")
}
function goHome(){console.log(123);window.location.reload(true)}
  function handleCreateCustomer() {
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
    console.log(123)
    userKit.createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        goHome();
      })
 
  }

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const [vatNrError, setVatNrError] = useState("");
  const [paymentTermError, setPaymentTermError] = useState("");

function validate(){
    if (vatNr.split("")[0] =="S" &&
     vatNr.split("")[1] =="E"&&
     !isNaN(vatNr.split("")[2])
     &&
     !isNaN(vatNr.split("")[3])
     &&
     !isNaN(vatNr.split("")[4])
     &&
     !isNaN(vatNr.split("")[5])
     &&
     !isNaN(vatNr.split("")[6])
     &&
     !isNaN(vatNr.split("")[7])
     &&
     !isNaN(vatNr.split("")[8])
     &&
     !isNaN(vatNr.split("")[9])
     &&
     !isNaN(vatNr.split("")[10])
     &&
     !isNaN(vatNr.split("")[11]))
     { errorMessage = true;
        setVatNrError("")
     }
     else
     setVatNrError("Vat number should start with 'SE' and contain only numbers like this SExxxxxxxxxx")

    if (paymentTerm.length > 0) {
        errorMessage2 = true;
        setPaymentTermError("")
    }
    else {
        setPaymentTermError("Payment Term should contain att least a number")
    }

}


  return (
      <div>
        <br/>
        <H3tag>New customer?</H3tag>
      <div>
        <LabelCustomer htmlFor="name">Name:</LabelCustomer>
        <InputCustomer
         name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="organisationNr">OrganisationNr:</LabelCustomer>
        <InputCustomer
          value={organisationNr}
          onChange={ (e) => setOrganisationNr(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="vatNr">VatNr:</LabelCustomer>
        <InputCustomer
          value={vatNr} 
          maxLength="12"
          onChange={(e) => setVatNr(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="reference">Reference:</LabelCustomer>
        <InputCustomer
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="paymentTerm">Payment Term:</LabelCustomer>
        <InputCustomer
          id="paymentTerm"
          type="number"
          value={paymentTerm}
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="website">Website:</LabelCustomer>
        <InputCustomer
          type="email"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="customerEmail">Email:</LabelCustomer>
        <InputCustomer
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
      </div>
      <div>
        <LabelCustomer htmlFor="phoneNumber">Phone Number:</LabelCustomer>
        <InputCustomer
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
         <div style={{fontSize:12,color:"red"}}>{vatNrError}</div>
         <div style={{fontSize:12,color:"red"}}>{paymentTermError}</div>
         </div>
      <ButtonCustomer onClick={ e => {validate();{ errorMessage&&errorMessage2 ?  handleCreateCustomer() : validate()}}}>Create customer</ButtonCustomer>
    </div>
  );
}
