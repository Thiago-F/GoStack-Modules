import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [tech, setTech] = useState([]);
    const [newTech, setnewTech] = useState('');

    const handleAdd = useCallback(() => {
        setTech([...tech, newTech]);

        setnewTech('');
    }, [newTech, tech]);

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

    const techSize = useMemo(() => tech.length, [tech]);

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <strong>Você tem {techSize} tecnologias</strong>
            <br />
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
