import { useState, useEffect } from 'react';

export const useUserData = () => {
    /*return {
        name: { first: 'John', last: 'Doe' },
        email: 'johndoe@gmail.com'
    };*/
    const [user, setUser] = useState({ name: {} });

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            setUser(data.results[0]);
        }
        fetchUser();
    }, []);

    return user;
}