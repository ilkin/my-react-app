import React, { useState } from 'react'
import { SuccessButton } from '../Button';

export const ControlledFomPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Favorite color" value={favoriteColor} onChange={e => setFavoriteColor(e.target.value)}/>
            </div>
            <SuccessButton onClick={e=>{
                alert(`
                    Your name is ${name},
                    your email is ${email}
                    and your favorite color is ${favoriteColor}!
                `);
                e.preventDefault();
            }}>Submit</SuccessButton>
        </form>
    );
}