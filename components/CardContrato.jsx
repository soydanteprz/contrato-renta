import PDFfile from "./PDFfile";
import Pagare from "./PagarePDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CardContrato = ({ contrato, handleDelete }) => {
    const [pdf, setPdf] = useState(false);
    const [pagare, setPagare] = useState(false);
    const [pdfFile, setPdfFile] = useState(null);
    const [pagareFile, setPagareFile] = useState(null);

    const handlePdf = () => {
        setPdf(true);
        setPagare(false);
        setPdfFile(
            <PDFViewer width="100%" height="100%">
                <PDFfile contrato={contrato} />
            </PDFViewer>
        );
    };

    const handlePagare = () => {
        setPagare(true);
        setPdf(false);
        setPagareFile(
            <PDFViewer width="100%" height="100%">
                <Pagare contrato={contrato} />
            </PDFViewer>
        );
    };

    return (
        <>
            <div className="max-w-sm p-6 bg-white rounded-xl shadow-md flex flex-col m-5">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {contrato.nombreArrendador}
                    </div>
                    <p className="text-gray-700 text-base">
                        {contrato.nombreArrendatario}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {new Date(contrato.FechaInicio).toLocaleDateString()}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {new Intl.NumberFormat("es-MX", {
                            style: "currency",
                            currency: "MXN",
                        }).format(contrato.precio)}
                    </span>
                </div>
                <div className="px-6 py-4">
                    <button
                        onClick={handlePdf}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Contrato
                    </button>
                    <button
                        onClick={handlePagare}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                    >
                        Pagare
                    </button>
                    <button
                        onClick={() => handleDelete(contrato)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            {pdf ? pdfFile : null}
            {pagare ? pagareFile : null}
        </>
    );
};

export default CardContrato;
