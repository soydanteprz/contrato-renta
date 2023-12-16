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
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid";
import CardContrato from "@components/CardContrato";
import PDFrender from "@components/PDFrender";

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
    const [selectecId, setSelectedId] = useState(null);

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

    const handleContratoById = async (id) => {
        try {
            const res = await fetch(`/api/contratos/${id._id.toString()}`);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div>
                <h1 className="head_text text-center p-10">
                    <span className="blue_gradient">Ver Contrato</span>
                </h1>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="grid-rows-none gap-4 overflow-scroll overflow-x-hidden overflow-y-scroll h-screen">
                {allContratos?.map((contrato) => (
                    <CardContrato
                        contrato={contrato}
                        handleDelete={handleDelete}
                        handleClick = {(id) => {
                            setSelectedId(id);

                        }}
                    />
                ))}
            </div>
            <PDFrender
                contrato={allContratos}
                selectecId={selectecId}
            />
            </div>
        </div>
    );
};

export default VerContrato;
