import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255255,0.5)
    ),
    url("https://www.google.com/search?q=background+images+for+website&rlz=1C1BNSD_enNP977NP977&sxsrf=ALiCzsbH3LjKD94wUezvFTRBjXUVcWNr6w:1658561505066&tbm=isch&source=iu&ictx=1&vet=1&fir=o3Q8mgmYqGs_HM%252C-_4Z8mgLA2CIZM%252C_%253BgY39y5wCNRDUVM%252C-_4Z8mgLA2CIZM%252C_%253BwcXsZgBNPJAQfM%252C-_4Z8mgLA2CIZM%252C_%253BnQJISrAmdCQQSM%252CtzY6_74UCxc5yM%252C_%253BjQGJHPP4vbNLVM%252C-_4Z8mgLA2CIZM%252C_%253BdBHl3jy4ZJDI5M%252Cf8p2cHVF2omndM%252C_%253BDsjD3TKI4PceaM%252Cf8p2cHVF2omndM%252C_%253BuL6D2YvISnf72M%252CUxC-oEQjvuMWcM%252C_%253BfPzAcXTbNnf_IM%252CcNhkXjN1TTRrxM%252C_%253B0th6tAeHZrrIUM%252CcNhkXjN1TTRrxM%252C_%253BakutLXDJQzT1mM%252CtzY6_74UCxc5yM%252C_%253BH0KxvwO8WhT2VM%252C_z0Jbf9F4EDoVM%252C_&usg=AI4_-kSNiKYGZp0EMyGwyV7wLJn68wpqTA&sa=X&ved=2ahUKEwiZz-OKv475AhWzSWwGHZpTDnkQ9QF6BAgNEAE#imgrc=nQJISrAmdCQQSM")
     center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({width :"75%"})}

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
       <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement> 
                By creating an account, I consent to the processing of my personal ata in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
       </Wrapper>

    </Container>
  )
}

export default Register