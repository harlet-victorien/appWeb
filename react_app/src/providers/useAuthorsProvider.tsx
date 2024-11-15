import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthorModel, CreateAuthorModel  } from "../models/AuthorModel";

export const useListAuthorProvider = () => {
    const [authorList, setAuthors] = useState<AuthorModel[]>([]);
    const [author, setAuthor] = useState<AuthorModel | null>(null);

    const loadAuthors = () => {
        axios.get<AuthorModel[]>('http://localhost:3001/authors')
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const loadAuthorById = (id: string) => {
        return axios.get<AuthorModel>(`http://localhost:3001/authors/${id}`)
            .then((response) => {
                setAuthor(response.data);
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    };

    return {
        authorList,
        author,
        loadAuthors,
        loadAuthorById,
    };
};