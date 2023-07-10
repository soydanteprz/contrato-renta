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
        <div className="container mx-auto">
            <div>
                <h1 className="head_text text-center p-10">
                    <span className="blue_gradient">Ver Contrato</span>
                </h1>
            </div>
            <div className="grid-rows-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {allContratos?.map((contrato) => (
                    <CardContrato
                        contrato={contrato}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default VerContrato;
