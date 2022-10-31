import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();


    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`)

        if (agree) {

            console.log('delete', user._id)
        }
    }
    return (
        <div>
            <h2>user: {users.length}</h2>
            {
                users.map(user => <p
                    key={user._id}
                >  {user.name} {user.email} <button onClick={() => handleDelete(user)}>x</button></p>)
            }

        </div>
    );
};

export default Home;