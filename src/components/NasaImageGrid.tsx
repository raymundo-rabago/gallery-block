// src/components/NasaImageGrid.tsx
import { useState, useEffect } from 'react';
import { NasaItem, NasaApiResponse } from '../types/nasaTypes';

const NasaImageGrid: React.FC = () => {
  const [images, setImages] = useState<NasaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const apiKey: string | undefined = import.meta.env.VITE_NASA_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error('La clave de la API de la NASA no está configurada.');
      return;
    }
    fetchImages();
  }, []);

  const fetchImages = async (query: string = '') => {
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data: NasaApiResponse = await response.json();
      setImages(data.collection.items);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImages(searchTerm);
  };

  return (
	  <div className="container">
		  
      <form onSubmit={handleSearch} className="grid mb-4">
        <input
          type="text"
          placeholder="Buscar imágenes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Buscar
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {images.map((item) => {
          const imageUrl = item.links[0].href;
          const title = item.data[0].title;
          const description = item.data[0].description || 'Sin descripción';
          return (
            <div key={item.data[0].nasa_id} className="card">
              <img src={imageUrl} alt={title} className="img-fluid" />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description.substring(0, 100)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NasaImageGrid;