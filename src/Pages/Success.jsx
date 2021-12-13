import React from "react";
import styled from "styled-components";

import { useLocation } from "react-router";

const Body = styled.div`
  background-image: url("https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxlYXZlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
  object-fit: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;
const Container = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 55rem;
  margin-left: 25%;
  margin-top: 30px;
  height: 30rem;
  border-radius: 10px;
`;
const Header = styled.h1`
  font-size: 5rem;
  margin-left: 7px;
  font-family: "Cinzel", serif;
  text-align: center;
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  font-family: "Recursive", sans-serif;
`;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  margin: 20px;
`;
const Footer = styled.h5`
  font-weight: 400;
  font-size: 25px;
  margin-top: 45px;
  text-align: center;
  padding: 20px;
`;
const dt = new Date();
const newDt = dt.getDate() + 3;
const newMt = dt.getMonth();
const newYr = dt.getFullYear();

const Success = () => {
  const location = useLocation();

  const data = location.state.data;
  // console.log(data);
  // console.log(location);
  return (
    <div>
      <Container>
        <Header>Thank You!</Header>
        <MidSection>
          <Ul>
            <Li>
              {" "}
              Name:
              {data.billing_details.name},
            </Li>
            <Li>Ref : {data.id},</Li>
            <Li>
              {" "}
              Estimated Delivery : {newDt} - {newMt} - {newYr},
            </Li>
            <Li> Total : £{data.amount / 100}</Li>
            <Li>
              Address : {data.billing_details.address.line1}{" "}
              {data.billing_details.address.city}{" "}
              {data.billing_details.address.country}{" "}
              {data.billing_details.address.postal_code}
            </Li>
          </Ul>
        </MidSection>
        <Footer>
          Thank you for supporting our small business, we hope you enjoy your
          purchase and can't wait to see you again.
        </Footer>
      </Container>
    </div>
  );
};

export default Success;
