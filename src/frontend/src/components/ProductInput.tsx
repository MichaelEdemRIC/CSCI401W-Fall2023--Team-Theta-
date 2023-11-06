import React, { useState, useEffect, ChangeEvent } from 'react';
import { Entry } from '../App';
import axios from 'axios';

interface Props {
  newEntry: Entry[] | null;
  className?: string;
  message: string;
}

function ProductInput() {
    const [pk, setID] = useState<number>();
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [dateAdded, setDateAdded] = useState<string>('');
    const [message, setMessage] = useState<string>('');
  
    useEffect(() => {
        // Get the current date and time and format it as needed
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString(); // Format as ISO string or use other formatting as needed
        setDateAdded(formattedDate);
      }, []);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  
    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPrice(e.target.value);
    };
  
    const handleDateAddedChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDateAdded(e.target.value);
    };
    const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDateAdded(e.target.value);
      };
  
    const handleSubmit = () => {
      axios
        .post('http://127.0.0.1:8000/api/get_data', { pk, name, price, dateAdded })
        .then((response) => {
          setMessage(response.data.message);
          setName('');
          setPrice('');
          setDateAdded('');
        })
        .catch((error) => {
          setMessage('Error: ' + error.message);
        });
    };
  return (
    <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" 
                    value={pk}
                    onChange={handleIDChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" 
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">$</span>
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" 
                    placeholder="0.00"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
            >Submit</button>
        {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default ProductInput