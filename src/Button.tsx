import React, { HTMLAttributes, ReactNode } from 'react';

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
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? '#ffc952' : '#82868b',
        color: '#4b4b4b',
        paddingTop: 10,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 10,
        border: 0,
        borderRadius: 5,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
