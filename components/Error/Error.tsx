import { ErrorContainer } from "./styles";

export interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message, ...rest }) => {
  return <ErrorContainer {...rest}>{message}</ErrorContainer>;
};
