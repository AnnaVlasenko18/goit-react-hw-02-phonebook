import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  FormLabel,
  ErrMsg,
  InputForm,
  FormContact,
  AddContact,
} from './ContactForm.styled';

const phoneRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz.'
    )
    .min(2, 'Too Short!')
    .required('Required!'),
  tel: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain dashes, parentheses and can start with +'
    )
    .min(16, 'Too short!')
    .max(19, 'Too long!')
    .required('Required!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          firstName: '',
          tel: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAddContact(values);
          actions.resetForm();
        }}
      >
        <FormContact>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <InputForm id="firstName" name="firstName" placeholder="" />
          <ErrMsg name="firstName" component="div" />

          <FormLabel htmlFor="tel">Number</FormLabel>
          <InputForm
            id="tel"
            name="tel"
            placeholder="+XX (XXX) XXX-XX-XX"
            type="tel"
          />
          <ErrMsg name="tel" component="div" />

          <AddContact type="submit">Add contact</AddContact>
        </FormContact>
      </Formik>
    </Wrapper>
  );
};
