import userEvent from '@testing-library/user-event';
import React from 'react';

const User = () => {
    return (
        <div className="user" key="index">
     <h1>Name:{user.name}</h1>
     <p>Email:{user.email}</p>
     <p>Gen;{user.gen}</p>
        </div>
    );
}

export default User;
