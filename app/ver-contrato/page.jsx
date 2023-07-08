"use client";

import PDFfile from "@components/PDFfile";
import Pagare from "@components/PagarePDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathName } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
    EllipsisHorizontalCircleIcon,
} from "@heroicons/react/20/solid";
import CardContrato from "@components/CardContrato";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const VerContrato = () => {
    //fetch data from api
    const [allContratos, setAllContratos] = useState([]);
    const [showPDF, setShowPDF] = useState(false);
    const [showPagare, setShowPagare] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        const getContratos = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/contratos`);
            const data = await res.json();
            setAllContratos(data);
        };

        if (session?.user.id) {
            getContratos();
        }
    }, [session?.user.id]);

    const handleDelete = async (id) => {
        const hasDeleted = confirm("¿Estás seguro de eliminar este contrato?");
        if (hasDeleted) {
            try {
                await fetch(`/api/contratos/${id._id.toString()}`, {
                    method: "DELETE",
                });

                router.push("/ver-contrato");
            } catch (error) {
                console.log(error);
            }
        }
    };

    // const getContratos = async () => {

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

                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreArrendatario}
                        </h3>
                        <h3 className="mb-2">
                            {contrato.direccionArrendatario}
                        </h3>
                        <h3 className="text-xl font-bold mb-2">
                            {contrato.nombreAval}
                        </h3>
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
                            Fecha de termino: 6 meses despues de la fecha de
                            inicio
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Precio:{" "}
                            {new Intl.NumberFormat("es-MX", {
                                style: "currency",
                                currency: "MXN",
                            }).format(contrato.precio)}
                        </h3>
                        {/* button than displays the pdf viewer */}

                        <button
                            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
                            onClick={() => setShowPDF(!showPDF)}
                        >
                            Ver contrato
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

                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-4 ml-4 p-2">
                                    <EllipsisHorizontalCircleIcon
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <PDFDownloadLink
                                                    document={
                                                        <PDFfile
                                                            contrato={contrato}
                                                        />
                                                    }
                                                    fileName={`${contrato.nombreArrendatario[0]}${contrato.nombreArrendatario[1]}${contrato.nombreArrendatario[2]}${contrato.nombreArrendatario[3]}${contrato.nombreArrendatario[4]}${contrato.nombreArrendatario[5]}${contrato.nombreArrendatario[6]}${contrato.nombreArrendatario[7]}${contrato.nombreArrendatario[8]}${contrato.nombreArrendatario[9]}${contrato.nombreArrendatario[10]} Contrato.pdf`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    type="button"
                                                >
                                                    {({
                                                        blob,
                                                        url,
                                                        loading,
                                                        error,
                                                    }) =>
                                                        loading ? (
                                                            <button>
                                                                Loading
                                                                document...
                                                            </button>
                                                        ) : (
                                                            <button>
                                                                {" "}
                                                                Descargar
                                                                contrato
                                                            </button>
                                                        )
                                                    }
                                                </PDFDownloadLink>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <PDFDownloadLink
                                                    document={
                                                        <Pagare
                                                            contrato={contrato}
                                                        />
                                                    }
                                                    fileName="pagare.pdf"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    type="button"
                                                >
                                                    {({
                                                        blob,
                                                        url,
                                                        loading,
                                                        error,
                                                    }) =>
                                                        loading ? (
                                                            <button>
                                                                Loading
                                                                document...
                                                            </button>
                                                        ) : (
                                                            <button>
                                                                Descargar pagaré
                                                            </button>
                                                        )
                                                    }
                                                </PDFDownloadLink>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    onClick={() =>
                                                        handleDelete(contrato)
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <CardContrato contrato={contrato} />

                    </div>
                ))}
            </div>

        </div>
    );
};

export default VerContrato;
