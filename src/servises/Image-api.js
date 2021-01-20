export default function fetchImage(imageTitle, page) {
  const API_KEY = '19126072-909a19c03a0eedac828ee6eb3';
  return fetch(
    `https://pixabay.com/api/?q=${imageTitle}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Error!'));
  });
}
