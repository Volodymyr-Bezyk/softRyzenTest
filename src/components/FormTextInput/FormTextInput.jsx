import { IoIosClose } from 'react-icons/io';

import {
  FormLabel,
  FormLabelText,
  FormLabelInput,
  ClearFormInputButton,
  ValidationErrorText,
} from './FormTextInput.styled';

const FormTextInput = ({ children, text, fieldName, register }) => {
  return (
    <FormLabel>
      <FormLabelText>{text}</FormLabelText>
      <FormLabelInput
        type="text"
        {...register({ fieldName }, { required: true })}
      />
      <ClearFormInputButton type="button">
        <IoIosClose size={24} />
      </ClearFormInputButton>
      <ValidationErrorText>invalid input </ValidationErrorText>
      {children}
    </FormLabel>
  );
};

export default FormTextInput;