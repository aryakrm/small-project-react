import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import CreateArea from './CreateArea';
import ToDos from './ToDos';

// const toDos = [
//     {
//         id: 1,
//         title: 'wake up',
//         content: 'wake up early',
//     },
//     {
//         id: 2,
//         title: 'eat',
//         content: 'eat breakfast',
//     },
//     {
//         id: 3,
//         title: 'work',
//         content: 'work harder',
//     },
//     {
//         id: 4,
//         title: 'sleep',
//         content: 'sleep early',
//     },
// ];

function App() {
    const { toDos, setToDos } = useState([]);
    return (
        <div>
            <Nav />
            <CreateArea setToDos={setToDos} toDos={toDos} />
            <ToDos toDos={toDos} />
        </div>
    );
}

export default App;
