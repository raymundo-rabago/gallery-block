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
		
		<form onSubmit={handleSearch}>
			<fieldset role="group">
				<input type="text" placeholder="Buscar imágenes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<input type="submit" value="Subscribe" className='primary' />
			</fieldset>
		</form>
		<br />
		<div className="grid-gallery">
			{images.map((item) => {
				const imageUrl = item.links[0].href;
				const title = item.data[0].title;
				const description = item.data[0].description || 'Sin descripción';
				return (
				<figure key={item.data[0].nasa_id}>
					<img src={imageUrl} alt={title} />
					<figcaption>
						<strong>{title}</strong>
						<small>{description.substring(0, 100)}...</small>
					</figcaption>
				</figure>
				);
			})}
		</div>
    </div>
  );
};

export default NasaImageGrid;