
export interface NasaImage {
	href: string;
}
  
export interface NasaItemData {
	nasa_id: string;
	title: string;
	description: string;
}
  
export interface NasaItem {
	data: NasaItemData[];
	links: NasaImage[];
}
  
export interface NasaApiResponse {
	collection: {
	  items: NasaItem[];
	};
}