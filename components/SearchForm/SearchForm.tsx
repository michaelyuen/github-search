import { SearchFormContainer } from "./styles";
import { Input, InputProps } from "../Input";
import { FormProps } from "../Form";

export interface SearchFormProps {
  name?: FormProps["name"];
  noValidate?: FormProps["noValidate"];
  onChange?: InputProps["onChange"];
  onSubmit?: FormProps["onSubmit"];
  query: string;
  title: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onChange,
  onSubmit,
  query,
  title,
  ...rest
}) => {
  return (
    <SearchFormContainer
      aria-label="GitHub Search Form"
      name="GitHub Search Form"
      onSubmit={onSubmit}
      {...rest}
    >
      <h2>{title}</h2>
      <Input
        aria-label="Search using GitHub's advanced search syntax"
        onChange={onChange}
        value={query}
      />
    </SearchFormContainer>
  );
};
