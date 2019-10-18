import { object, array, string, boolean } from "yup";

const requiredMessage = "This field is required";
const emailMessage = "Please insert a valid email adress";

const invitationSchema = object().shape({
  invitingPerson: string().when("isAnonymous", {
    is: false,
    then: string().required(requiredMessage),
    otherwise: string()
  }),
  isAnonymous: boolean(),
  invitations: array().of(
    object()
      .shape({
        email: string()
          .email(emailMessage)
          .required(requiredMessage),
        isPremium: boolean()
      })
      .nullable()
  )
});

export { invitationSchema };
