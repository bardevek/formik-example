import React from "react";
import { FieldArray } from "formik";
import styled from "styled-components";

import { TextField } from "./commonFields/TextField";
import { CheckboxField } from "./commonFields/CheckboxField";
import { HelpersButtons } from "./commonFields/HelpersButtons";

const InvitingList = ({ values, updateName }) => {
  return (
    <>
      <Title>Who would you like to invite?</Title>
      <FieldArray
        name="invitations"
        render={arrayHelpers => (
          <FieldsContainer>
            {values.invitations.map((invitation, index) => (
              <Row key={index}>
                <TextField name={`invitations[${index}].email`} label="Email" />
                <CheckboxField
                  name={`invitations[${index}].isPremium`}
                  label="Premium"
                  updateName={updateName}
                  values={values}
                />
                <HelpersButtons
                  index={index}
                  arrayLength={values.invitations.length}
                  insertHandler={arrayHelpers.insert}
                  removeHandler={arrayHelpers.remove}
                />
              </Row>
            ))}
          </FieldsContainer>
        )}
      />
    </>
  );
};

const FieldsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 60px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export { InvitingList };
