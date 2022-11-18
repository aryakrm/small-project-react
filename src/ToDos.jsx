import React from 'react';

function ToDos({ toDos }) {
    return (
        <div>
            {toDos &&
                toDos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <p>{todo.content}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default ToDos;
