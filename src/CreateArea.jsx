import React, { useState } from 'react';

function CreateArea({ submitTodo }) {
    const [toDo, setToDo] = useState({
        title: '',
        content: '',
    });

    const [formDisplay, setFormDisplay] = useState(true);

    function changeHandler(event) {
        const { name, value } = event.target;
        setToDo((prevTodo) => {
            return {
                ...prevTodo,
                [name]: value,
            };
        });
    }

    function showForm() {
        setFormDisplay(!formDisplay);
    }

    function addTodo(e) {
        e.preventDefault();
        submitTodo(toDo);
    }

    return (
        <div>
            <button onClick={showForm}>Add Todo</button>

            <form style={{ display: `${formDisplay ? 'none' : 'block'}` }}>
                <input
                    name="title"
                    type="text"
                    value={toDo.title}
                    onChange={changeHandler}
                />
                <input
                    name="content"
                    type="text"
                    value={toDo.content}
                    onChange={changeHandler}
                />
                <button type="submit" onClick={addTodo}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
