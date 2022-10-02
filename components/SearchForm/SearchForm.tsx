import { SearchFormContainer } from "./styles";
import { Input } from "../Input";

export interface SearchFormProps {
  title: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({ title }) => {
  return (
    <SearchFormContainer>
      <h3>{title}</h3>
      <Input />
    </SearchFormContainer>
  );
};
