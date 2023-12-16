import PDFfile from "./PDFfile";
import Pagare from "./PagarePDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PDFrender = ({ contrato, selectecId }) => {
    // Keep track of the active tab
    const [activeTab, setActiveTab] = useState("contrato");
    const router = useRouter();

    const selectedContrato = contrato.find((c) => c._id.toString() === selectecId);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 pb-10">
                    <ul className="flex flex-wrap -mb-px justify-center">
                        <li className="flex-1">
                            <a
                                className={`${
                                    activeTab === "contrato"
                                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-700"
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
                                onClick={() => setActiveTab("contrato")}
                            >
                                Contrato
                            </a>
                        </li>
                        <li className="flex-1">
                            <a
                                className={`${
                                    activeTab === "pagare"
                                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-700"
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer`}
                                onClick={() => setActiveTab("pagare")}
                            >
                                Pagaré
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-end w-auto h-4/5">
                    <div className="flex flex-col w-full">
                        {activeTab === "contrato" ? (
                            <PDFViewer width="100%" height="100%">
                                <PDFfile contrato={{ selectedContrato }} />
                            </PDFViewer>
                        ) : (
                            <PDFViewer width="100%" height="100%">
                                <Pagare contrato={{ selectedContrato }} />
                            </PDFViewer>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PDFrender;
