"use client";

import React from "react";
import { useState, useEffect } from "react";

const VerContrato = () => {
    //fetch data from api
    const [allContratos, setAllContratos] = useState([]);

    const getContratos = async () => {
        const res = await fetch("/api/contratos");
        const data = await res.json();
        setAllContratos(data);
    };

    useEffect(() => {
        getContratos();
    }, []);

    return (
        <div>
            <h1 className="head_text text-center p-10">
                <span className="green_gradient">Ver Contrato</span>
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {allContratos?.map((contrato) => (
                    <div
                        key={contrato.id}
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreRentador}
                        </h3>
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.apellidoRentador}
                        </h3>
                        <h3 className="mb-2">{contrato.direccionRentador}</h3>
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreAval}
                        </h3>
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.apellidoAval}
                        </h3>
                        <h3 className="mb-2">{contrato.direccionAval}</h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Start Date: {contrato.FechaInicio}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            End Date: {contrato.FechaFin}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerContrato;

//     const getCharacters = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch("https://rickandmortyapi.com/api/character");
//             const data = await res.json();
//             setData(data.results);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getCharacters();
//     }
//         , []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error!</p>;

//     return (
//         <div>
//             <h1>Ver Contrato</h1>
//             <div className="grid grid-cols-3 gap-4">
//                 {data?.map((character) => (
//                     <div key={character.id}>
//                         <h3>{character.name}</h3>
//                         <img src={character.image} alt={character.name} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VerContrato;
