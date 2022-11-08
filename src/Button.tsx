import React, { FC, HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import './tailwind.css';

const ButtonStyles = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className: `px-6 py-2.5 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl text-dark text-sm`,
  })
)<{ variant: ButtonVariants }>`
  background: ${({ variant }) =>
    variant === 'secondary'
      ? '#82868B'
      : variant === 'success'
      ? '#28C76F'
      : variant === 'warning'
      ? '#EB7E17'
      : variant === 'danger'
      ? '#EA5455'
      : variant === 'info'
      ? '#00CFE8'
      : '#FFC952'};
`;

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Button text here */
  children: ReactNode;

  /** there are 6 types of buttons */
  variant?: ButtonVariants;
}

/** Main button component */
export const Button: FC<ButtonProps> = ({
  children,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyles {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
};
