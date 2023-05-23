import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID c0T65SMWD8gMOqN7R6mLrXzwzjXW0H4kgBAQIeyIt2A'
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
};

export default searchImages;