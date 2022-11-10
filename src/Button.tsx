import React, { HTMLAttributes, ReactNode } from 'react';

import './tailwind.css';

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
export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`${
      variant === 'secondary'
        ? 'bg-secondary'
        : variant === 'success'
        ? 'bg-success'
        : variant === 'warning'
        ? 'bg-warning'
        : variant === 'danger'
        ? 'bg-danger'
        : variant === 'info'
        ? 'bg-info'
        : 'bg-primary'
    } px-6 py-2.5 font-semibold transition duration-500 ease-in-out transform shadow-xl text-sm text-white rounded-lg`}
  >
    {children}
  </button>
);
