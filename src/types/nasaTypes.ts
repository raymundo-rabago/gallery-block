
export interface NasaImage {
	href: string;
}
  
export interface NasaItemData {
	nasa_id: string;
	title: string;
	description: string;
	keywords: string[];
	media_type: string;
}
  
export interface NasaItem {
	data: NasaItemData[];
	links: NasaImage[];
	media_type: string;
}
  
export interface NasaApiResponse {
	collection: {
	  items: NasaItem[];
	  metadata: {
	    total_hits: number;
	  };
	  href: string;
	};
}