const BASE_URL = 'https://api.unsplash.com';
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const searchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 30
) => {
  try {
    const url = `${BASE_URL}/search/photos?query=${query}&page=${page}&per_page=${perPage}`;
    const response = await fetch(url,
      {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Ошибка при запросе к Unsplash API');
    }

    const data = await response.json();
    return data.results.map((image: any) => ({
      id: image.id,
      imageUrl: image.urls.small,
      imageAlt: image.description || 'Unsplash Image',
    }));
  } catch (error) {
    console.error('Ошибка при поиске изображений:', error);
    return [];
  }
};
