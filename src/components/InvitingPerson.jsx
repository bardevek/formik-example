import React from "react";
import styled from "styled-components";

import { TextField } from "./commonFields/TextField";
import { CheckboxField } from "./commonFields/CheckboxField";

const InvitingPerson = ({ updateName, values }) => {
  return (
    <Container>
      <TextField
        name="invitingPerson"
        label="Your name"
        isDisabled={values.isAnonymous}
      />
      <CheckboxField
        name="isAnonymous"
        label="Anonymous"
        updateName={updateName}
        values={values}
        isAnonymous={true}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export { InvitingPerson };
