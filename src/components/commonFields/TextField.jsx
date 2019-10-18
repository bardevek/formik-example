import React from "react";

import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

const TextField = ({ name, label, isDisabled = false }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <StyledField name={name} disabled={isDisabled} />
      <ErrorMessageContainer>
        <ErrorMessage name={name} />
      </ErrorMessageContainer>
    </div>
  );
};

const StyledField = styled(Field)`
  width: 200px;
  height: 20px;
  margin-top: 10px;
  font-size: 15px;
  background-color: ${({ disabled }) => disabled && "lightslategray"};
`;

const Label = styled.label`
  display: block;
`;

const ErrorMessageContainer = styled.span`
  position: absolute;
  font-size: 0.7em;
  margin-top: 3px;
  display: block;
  color: red;
`;

export { TextField };
