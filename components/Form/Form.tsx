import { ReactNode } from "react";
import { FormContainer } from "./styles";
import { ComponentProps } from "../types";

export interface FormProps extends ComponentProps {
  children: ReactNode;
  name: string;
  onSubmit?(event: React.FormEvent<HTMLFormElement>): void;
}

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return <FormContainer {...rest}>{children}</FormContainer>;
};
