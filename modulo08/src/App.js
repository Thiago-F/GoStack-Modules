import React, { useState, useEffect } from 'react';

function App() {
    const [tech, setTech] = useState([]);
    const [newTech, setnewTech] = useState('');

    function handleAdd() {
        setTech([...tech, newTech]);

        setnewTech('');
    }

    useEffect(() => {
        // component did amount
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
            setTech(JSON.parse(storageTech));
        }

        return () => {};
    }, []);

    useEffect(() => {
        // component did update
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    useEffect(() => {});

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
