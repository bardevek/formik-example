import React from "react";
import { Formik } from "formik";
import styled from "styled-components";

import { FormContainer } from "./FormContainer";

import { initialValues } from "../initialValues";
import { invitationSchema } from "../validationSchema";

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={invitationSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      render={props => {
        return (
          <FlexContainer>
            <Header>Invitations</Header>
            <Frame>
              <FormContainer
                values={props.values}
                setFieldValue={props.setFieldValue}
              />
            </Frame>
          </FlexContainer>
        );
      }}
    />
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: darkgray;
  overflow: scroll;
  margin-bottom: 50px;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  color: azure;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Frame = styled.div`
  width: 70%;
  max-width: 500px;
  min-width: 300px;
  background-color: white;
  height: 600px;
  border: black 2px solid;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  overflow: scroll;
`;

export { FormikContainer };
