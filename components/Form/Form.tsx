import { ReactNode } from "react";
import { FormContainer } from "./styles";

export interface FormProps {
  children: ReactNode;
  name: string;
  noValidate?: boolean;
  onSubmit?(event: React.FormEvent<HTMLFormElement>): void;
}

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return (
    <FormContainer noValidate {...rest}>
      {children}
    </FormContainer>
  );
};
