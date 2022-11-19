import React from 'react';

function ToDos({ title, content }) {
    return (
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
        </div>
    );
}

export default ToDos;
