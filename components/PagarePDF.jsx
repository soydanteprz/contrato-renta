import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import React from "react";
const convert = require("number-to-words");
const writtenNumber = require("written-number");
writtenNumber.defaults.lang = "es";
import { PagareClass } from "./PagareClass";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 20,
        margin: 10,
        lineHeight: 1.5,
        fontSize: 14,
    },
    section: {
        margin: 10,
        padding: 10,
        fontFamily: "Times-Roman",
    },
    normalText: {
        fontSize: 12,
        textAlign: "justify",
        fontWeight: "bold",
    },
    boldText: {
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
    },
    breakLine: {
        marginTop: 5,
        marginBottom: 5,
    },
    row: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        fontFamily: "Times-Roman",
    },
    left: {
        flexBasis: 300,
    },
    signature: {
        flexGrow: 2,
        flexShrink: 1,
        textAlign: "center",
        paddingTop: 50,
    },
    signatureText: {
        textAlign: "center",
        fontWeight: "bold",
    },
});

const Pagare = ({ contrato }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="1 de 6"
                FechaInicio={contrato.FechaInicio}
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="2 de 6"
                FechaInicio={
                    new Date(
                        new Date(contrato.FechaInicio).setMonth(
                            new Date(contrato.FechaInicio).getMonth() + 1
                        )
                    )
                }
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="3 de 6"
                FechaInicio={
                    new Date(
                        new Date(contrato.FechaInicio).setMonth(
                            new Date(contrato.FechaInicio).getMonth() + 2
                        )
                    )
                }
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="4 de 6"
                FechaInicio={
                    new Date(
                        new Date(contrato.FechaInicio).setMonth(
                            new Date(contrato.FechaInicio).getMonth() + 3
                        )
                    )
                }
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="5 de 6"
                FechaInicio={
                    new Date(
                        new Date(contrato.FechaInicio).setMonth(
                            new Date(contrato.FechaInicio).getMonth() + 4
                        )
                    )
                }
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
        <Page size="A4" style={styles.page}>
            <PagareClass
                pageNumber="6 de 6"
                FechaInicio={
                    new Date(
                        new Date(contrato.FechaInicio).setMonth(
                            new Date(contrato.FechaInicio).getMonth() + 5
                        )
                    )
                }
                nombreArrendador={contrato.nombreArrendador}
                nombreArrendatario={contrato.nombreArrendatario}
                direccionArrendatario={contrato.direccionArrendatario}
                nombreAval={contrato.nombreAval}
                direccionAval={contrato.direccionAval}
                precio={contrato.precio}
            />
        </Page>
    </Document>
);

export default Pagare;
