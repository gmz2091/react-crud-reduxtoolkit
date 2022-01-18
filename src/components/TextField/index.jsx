/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default TextfieldWrapper;

TextfieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
};
