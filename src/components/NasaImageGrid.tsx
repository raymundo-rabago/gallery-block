// src/components/NasaImageGrid.tsx
import { useState, useEffect } from 'react';
import { NasaItem, NasaApiResponse } from '../types/nasaTypes';

const NasaImageGrid: React.FC = () => {
  const [images, setImages] = useState<NasaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); 
  const apiKey: string | undefined = import.meta.env.VITE_NASA_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error('La clave de la API de la NASA no está configurada.');
      return;
    }
    fetchImages();
  }, [currentPage]);

  const fetchImages = async (query: string = '') => {
    const url = `https://images-api.nasa.gov/search?q=${query}&media_type=image&page=${currentPage}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data: NasaApiResponse = await response.json();
      setImages(data.collection.items);

      // Extraer el total de páginas desde los metadatos
      const totalPagesFromApi = Math.ceil(data.collection.metadata.total_hits / 48);
      setTotalPages(totalPagesFromApi);
      setImages(data.collection.items);

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchImages(searchTerm);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
	  <div className="container">
		
		<form onSubmit={handleSearch}>
			<fieldset role="group">
				<input type="text" placeholder="Buscar imágenes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<input type="submit" value="Buscar" className='contrast' />
			</fieldset>
		</form>
		<br />
		<div className="grid-gallery">
			{images.map((item) => {
				const imageUrl = item.links[0].href;
				const title = item.data[0].title;
        const description = item.data[0].description || 'Sin descripción';
        const keywords = item.data[0].keywords || 'Sin descripción';
				return (
				<figure key={item.data[0].nasa_id}>
					<img src={imageUrl} alt={title} />
					<figcaption>
						<strong className="primary">{title}</strong>
						<small>{description.substring(0, 100)}...</small>
						<p>Palabras clave: {keywords || 'Sin palabras clave'}</p>
					</figcaption>
				</figure>
				);
			})}
      </div>
      <br />
      <div className="pagination mt-4">
        <button className="outline contrast" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <span className="mx-4">Página {currentPage} de {totalPages}</span>
        <button className="outline contrast" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Siguiente</button>
      </div>

    </div>
  );
};

export default NasaImageGrid;