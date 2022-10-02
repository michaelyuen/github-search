import { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";

export interface InputProps {
  ariaLabel?: string;
  disabled?: boolean;
  name?: string;
  isInvalid?: boolean;
  onBlur?(event: React.FormEvent<HTMLInputElement>): void;
  onChange?(event: React.FormEvent<HTMLInputElement>): void;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text", ...rest }) => {
  return <StyledInput type={type} {...rest} />;
};
