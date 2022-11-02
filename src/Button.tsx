import React, { HTMLAttributes, ReactNode } from 'react';

import './tailwind.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Button text here */
  children: ReactNode;

  /** there are two types of buttons */
  variant: 'primary' | 'secondary';
}

/** Main button component */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={`${
        variant === 'primary' ? 'bg-yellow-300' : 'bg-gray-300'
      } text-white px-4 py-2  rounded-lg`}
      {...props}
    >
      {children}
    </button>
  );
};
