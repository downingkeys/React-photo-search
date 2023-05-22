import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID c0T65SMWD8gMOqN7R6mLrXzwzjXW0H4kgBAQIeyIt2A'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    
    return response;
};

export default searchImages;