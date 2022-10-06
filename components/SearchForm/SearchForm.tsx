import { SearchFormContainer } from "./styles";
import { Input, InputProps } from "../Input";
import { FormProps } from "../Form";
import { Error, ErrorProps } from "../Error";

export interface SearchFormProps {
  error?: ErrorProps["message"] | null;
  name?: FormProps["name"];
  onChange?: InputProps["onChange"];
  onKeyUp?: InputProps["onKeyUp"];
  onSubmit?: FormProps["onSubmit"];
  query: string;
  title: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  error,
  onChange,
  onKeyUp,
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
      <div>
        <Input
          aria-label="Search using GitHub's advanced search syntax. Only user and stars qualifiers are supported."
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder="Try user or stars qualifiers. e.g., user:atom stars:10..50"
          value={query}
        />
        {error && <Error message={error} />}
      </div>
    </SearchFormContainer>
  );
};
