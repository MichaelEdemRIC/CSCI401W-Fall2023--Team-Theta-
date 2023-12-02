import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export function SearchBar() {
  return (
    <form className='me-auto'>
      <InputGroup>
        <FormControl
          placeholder="Search..."
          name="search"
        />
        <NavLink to="/search">
            <Button type="submit" variant="outline-secondary">Search</Button>
        </NavLink>
      </InputGroup>
    </form>
  );
};
