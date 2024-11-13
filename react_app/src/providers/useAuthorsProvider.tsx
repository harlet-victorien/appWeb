import { useState, useEffect } from 'react';
import axios from 'axios';

interface AuthorModel {
    id: string;
    firstName: string;
    lastName: string;
    photo: string;
}

export const useListAuthorProvider = () => {
    const [authorList, setAuthors] = useState<AuthorModel[]>([]);

    const loadAuthors = () => {
        axios.get<AuthorModel[]>('http://localhost:3001/authors')
            .then((response) => {
                console.log('Authors loaded:', response.data); // Log the loaded authors
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error('Error loading authors:', error); // Log any errors
            });
    };

    return {
        authorList,
        loadAuthors,
    };
};