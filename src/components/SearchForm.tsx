import { useState, useEffect } from 'react';
import { NasaItem } from '../types/nasaTypes';

function SearchForm: React.FC = ()=> {

  const [images, setImages] = useState<NasaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const apiKey: string | undefined = import.meta.env.VITE_NASA_KEY;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImages(searchTerm);
  };

  return (
	  <form onSubmit={handleSearch} id="search" className="card">
        <fieldset role="group">
          <input name="text" type="text" placeholder="Buscar imagen..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <input type="submit" value="Buscar" className="contrast" />
        </fieldset>
    </form>
  );
}

export default SearchForm;