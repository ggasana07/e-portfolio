export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'landscape' | 'portrait' | 'architecture' | 'street' | 'event';
  description?: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  title: string;
  coverUrl: string;
  category: string;
  description: string;
  images: GalleryImage[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
}
