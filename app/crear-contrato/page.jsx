"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Form from "@components/Form";

import React from "react";


const CrearContrato = () => {

    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        nombreArrendador: "",
        direccionArrendador: "",
        sexoArrendador: "",
        nombreArrendatario: "",
        direccionArrendatario: "",
        nombreAval: "",
        direccionAval: "",
        FechaInicio: "",
        FechaFin: "", // must be 6 months after FechaInicio
        sexoArrendatario: "",
        sexoAval: "",
        precio: "",
    });

    const crearContrato = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch("/api/contratos/new", {
                method: "POST",
                body: JSON.stringify({
                    nombreArrendador: post.nombreArrendador,
                    direccionArrendador: post.direccionArrendador,
                    sexoArrendador: post.sexoArrendador,
                    nombreArrendatario: post.nombreArrendatario,
                    direccionArrendatario: post.direccionArrendatario,
                    nombreAval: post.nombreAval,
                    direccionAval: post.direccionAval,
                    FechaInicio: post.FechaInicio,
                    FechaFin: post.FechaFin,
                    sexoArrendatario: post.sexoArrendatario,
                    sexoAval: post.sexoAval,
                    precio: post.precio,
                    userId: session?.user.id,
                }),
            });
            if (res.ok) {
                router.push("/ver-contrato");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form
            type="Crear Contrato"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={crearContrato}
        />
    );
};

export default CrearContrato;
