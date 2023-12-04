import { useState, ChangeEvent, FormEvent } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  //user input
  const [query, setQuery] = useState<string>('');

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search-results/', { state: query });
  };

  return (
    <form className='me-auto' onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          placeholder="Search..."
          name="search"
          value={query}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="warning">
          Search
        </Button>
      </InputGroup>
    </form>
  );
}
