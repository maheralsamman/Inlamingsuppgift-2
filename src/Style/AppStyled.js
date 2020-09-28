import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
`;

export const MainBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 30px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const MainBox2 = styled(MainBox)``;

export const H2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;
export const H4 = styled.h4`
  margin: 0 0 0px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const H3 = styled.h3`
  margin: 0 0 10px;
  padding: 0;
  color: #f66;
`;

export const H3tag = styled(H2)`
  margin-bottom: 7px;
  color: #f66;
  text-align: left;
`;

export const Atag = styled.a`
  color: #fff;
  padding: 0;
  font-size: 16px;
`;

export const Para = styled.p`
  color: #fff;
  text-align: center;
`;

export const Label = styled.label`
  top: 0;
  left: 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;
export const LabelCustomer = styled(Label)``;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 6px 0;
  font-size: 16px;
  color: #00fff3;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  ::placeholder {
    color: #00fff3;
    font-size: 16px;
  }
`;
export const InputCustomer = styled(Input)`
  width: 10 0%;
  padding: 0px;
  margin-bottom: 10px;
`;
export const UserBox = styled.div`
  position: relative;
`;
export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background: transparent;
  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;
export const ButtonCustomer = styled(Button)`
  left: 10%;
  margin-top: 10px;
`;
