import React, { useState } from 'react';

function App() {
    const [tech, setTech] = useState(['ReactJS', 'React Native']);
    const [newTech, setnewTech] = useState('');

    function handleAdd() {
        setTech([...tech, newTech]);

        setnewTech('');
    }

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTech}
                onChange={e => setnewTech(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>
                Adicionar
            </button>
        </>
    );
}

export default App;
