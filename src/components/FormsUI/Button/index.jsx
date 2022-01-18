/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

const ButtonWrapper = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
