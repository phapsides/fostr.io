import React from 'react';
import './Header.scss';


export default function Header() {
    return (
        <header className="vcenter">
            <img 
                className="icon" 
                src="https://image.flaticon.com/icons/png/512/857/857755.png" 
                alt="please forget about this" 
            />
            <h3>Recipie</h3>
        </header>
    );
}