import styled from 'styled-components';

export const MainDiv = styled.div`
margin:0;
padding:0;
height: 100vh;
font-family: sans-serif;
background: linear-gradient(#141e30, #243b55);`

export const MainBox =styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;`

  export const H2 = styled.h2`margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;`
  export const H1 = styled.h1`margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;`
  export const Label = styled.label`

  top:0;
  left: 0;
  
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;`
  export const Input = styled.input`
width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;`
  export const UserBox =styled.div`position: relative;`
  export const Button =styled.button`
position: relative;
display: inline-block;
padding: 10px 20px;
color: #03e9f4;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
transition: .5s;
margin-top: 40px;
letter-spacing: 4px;
background: transparent;
&:hover{background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;}`