"use client";

import PDFfile from "@components/PDFfile";
import Pagare from "@components/PagarePDF";
import { PDFDownloadLink, PDFRenderer, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { useState, useEffect } from "react";

const VerContrato = () => {
    //fetch data from api
    const [allContratos, setAllContratos] = useState([]);
    const [showPDF, setShowPDF] = useState(false);
    const [showPagare, setShowPagare] = useState(false);

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
                <span className="blue_gradient">Ver Contrato</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allContratos?.map((contrato) => (
                    <div
                        key={contrato.id}
                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreArrendador}
                        </h3>
                        <h3 className="mb-2">{contrato.direccionArrendador}</h3>
                        <h4 className="text-lg font-semibold mb-2">
                            {contrato.sexoArrendador}
                        </h4>

                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreArrendatario}
                        </h3>
                        <h3 className="mb-2">
                            {contrato.direccionArrendatario}
                        </h3>
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreAval}
                        </h3>
                        <h3 className="mb-2">{contrato.direccionAval}</h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Fecha de inicio:{" "}
                            {new Date(contrato.FechaInicio).getDate()} de {""}
                            {new Date(contrato.FechaInicio).toLocaleString(
                                "es-MX",
                                { month: "long" }
                            )}{" "}
                            del {""}
                            {new Date(contrato.FechaInicio).getFullYear()}

                        </h3>

                        <h3 className="text-lg font-semibold">
                            Fecha de termino: 6 meses despues de la fecha de inicio

                            
                        </h3>
                        <h3 className="text-lg font-semibold">
                            Arrendatario: {contrato.sexoArrendatario}
                        </h3>
                        <h3 className="text-lg font-semibold">
                            Aval: {contrato.sexoAval}
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Precio: {new Intl.NumberFormat("es-MX", {
                                style: "currency",
                                currency: "MXN",
                            }).format(contrato.precio)}

                        </h3>

                        <PDFDownloadLink
                            document={<PDFfile contrato={contrato} />}
                            fileName="contrato.pdf"
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4"
                            type="button"
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? (
                                    <button>Loading document...</button>
                                ) : (
                                    <button>Download now!</button>
                                )
                            }
                        </PDFDownloadLink>

                        {/* button than displays the pdf viewer */}

                        <button
                            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                            onClick={() => setShowPDF(!showPDF)}
                        >
                            View PDF
                        </button>

                        {showPDF && (
                            <PDFViewer
                                width="100%"
                                height="600px"
                                className="p-4"
                            >
                                <PDFfile contrato={contrato} />
                            </PDFViewer>
                        )}

                        <PDFDownloadLink
                            document={<Pagare contrato={contrato} />}
                            fileName="pagare.pdf"
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
                            type="button"
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? (
                                    <button>Loading document...</button>
                                ) : (
                                    <button>Descargar pagaré</button>
                                )
                            }
                        </PDFDownloadLink>

                        {/* button than displays the pdf viewer */}
                        <button
                            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                            onClick={() => setShowPagare(!showPagare)}
                        >
                            Ver pagaré
                        </button>

                        {showPagare && (
                            <PDFViewer
                                width="100%"
                                height="600px"
                                className="p-4"
                            >
                                <Pagare contrato={contrato} />
                            </PDFViewer>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerContrato;
