import PDFfile from "./PDFfile";
import Pagare from "./PagarePDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CardContrato = ({ contrato }) => {
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
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {contrato.nombreArrendatario}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {contrato.nombreArrendador}
                    </h6>
                    <p className="card-text">
                        {contrato.direccionArrendatario}
                    </p>
                    <p className="card-text">
                        {contrato.direccionArrendador}
                    </p>
                    <p className="card-text">
                        {contrato.fechaInicio} - {contrato.fechaFin}
                    </p>
                    <p className="card-text">
                        {contrato.precio}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={handlePdf}
                    >
                        Contrato
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={handlePagare}
                    >
                        Pagare
                    </button>
                </div>
            </div>
            {pdf && pdfFile}
            {pagare && pagareFile}
        </>
    );
}

export default CardContrato;