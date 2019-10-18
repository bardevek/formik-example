import React from "react";
import { Form } from "formik";

import { SubmitButton } from "./SubmitButton";
import { InvitingPerson } from "./InvitingPerson";
import { InvitingList } from "./InvitingList";

const FormContainer = ({ values, setFieldValue }) => {
  return (
    <Form>
      <InvitingPerson
        isDisabled={values.isAnonymous}
        values={values}
        updateName={setFieldValue}
      />
      <InvitingList
        values={values}
        updateName={setFieldValue}
      />
      <SubmitButton />
    </Form>
  );
};

export { FormContainer };
