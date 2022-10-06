import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";
import { ComponentProps } from "../types";

export interface InputProps extends ComponentProps {
  disabled?: boolean;
  name?: string;
  isInvalid?: boolean;
  onBlur?(event: React.FormEvent<HTMLInputElement>): void;
  onChange?(event: React.FormEvent<HTMLInputElement>): void;
  onKeyUp?(event: React.KeyboardEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text", ...rest }) => {
  return (
    <StyledInput
      autoCapitalize="off"
      spellCheck="false"
      type={type}
      {...rest}
    />
  );
};
