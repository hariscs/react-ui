import React, { HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import './tailwind.css';

const PrimaryButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className:
      'px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400',
  })
)<{ variant: ButtonVariants }>``;

type ButtonVariants = 'default' | 'warning';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Button text here */
  children: ReactNode;

  /** there are two types of buttons */
  variant?: ButtonVariants;
}

/** Main button component */
export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <PrimaryButton {...props} variant={variant}>
      {children}
    </PrimaryButton>
  );
};
