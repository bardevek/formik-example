import React from "react";
import styled from "styled-components";
import { Field } from "formik";

const CheckboxField = ({
  name,
  label,
  updateName,
  values,
  isAnonymous = false
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledFieldCheckbox
        name={name}
        type="checkbox"
        onChange={() => {
          if (isAnonymous) {
            updateName("invitingPerson", "");
          }
          updateName(name, !values[name]);
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const StyledFieldCheckbox = styled(Field)`
  height: 20px;
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
`;

export { CheckboxField };
