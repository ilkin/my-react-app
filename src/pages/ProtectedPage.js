import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const ProtectedPage = () => {
    const history = useHistory();
    const isAuthed = false;

    useEffect(()=>{
        if (!isAuthed) {
            history.push('/');
        }
    });

    return (
        <h1>Only authenticated users should be able to see this</h1>
    );
}