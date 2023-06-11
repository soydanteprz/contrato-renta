import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import React from "react";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: "Times-Roman",
        fontWeight: "bold",
        textDecoration: "underline",
        paddingBottom: 15,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },

    subtitle: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: "Times-Roman",
    },

    text: {
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },

    textBold: {
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        fontWeight: "bold",
    },

    textCenter: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: "Times-Roman",
    },
    // personalInfo: {
    //     // bold
    //     fontWeight: "bold",
    //     color: "red",
    // },

});

// Create Document Component
const PDFfile = ({ contrato }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>CONTRATO DE ARRENDAMIENTO</Text>
                <Text style={styles.subtitle}>
                    CONTRATO DE ARRENDAMIENTO QUE CELEBRAN POR UNA PARTE LA C.
                    ZOILA REFUGIO VASQUEZ RAMIREZ QUIEN SE LE DENOMINARA EN ADELANTE{" "}
                    <Text style={styles.textBold}>EL ARRENDADOR</Text> Y DE OTRA
                    PARTE LA C. {contrato.nombreRentador.toUpperCase()}{" "}
                    {contrato.apellidoRentador.toUpperCase()}{" "}
                    {" ,"}
                    EN SU CARÁCTER DE <strong>ARRENDATARIO</strong>, RESPECTO AL
                    USO DEL INMUEBLE QUE SE MENCIONA MAS ADELANTE Y DE ACUERDO A
                    LO QUE SE CONTIENE EN LAS SIGUIENTES DECLARACIONES Y
                    CLÁUSULAS.
                </Text>
                <Text style={styles.text}>DECLARACIONES</Text>
                <Text style={styles.text}>I.- Declara EL ARRENDADOR</Text>
                {/* BULLET POINTS */}
                <Text style={styles.text}>
                    a)Ser Propietario del inmueble ubicado en{" "}
                    {contrato.direccionRentador}.
                </Text>
                <Text style={styles.text}>
                    b) Que dicho inmueble se encuentra al corriente del pago de
                    todas sus contribuciones y que no reporta a la fecha ninguno
                    adeudo por concepto de gastos de administración.
                </Text>
                <Text style={styles.text}>
                    c)Que es su deseo celebrar el presente contrato de
                    arrendamiento por un plazo que se considera forzoso señalado
                    en las cláusulas del presente contrato.
                </Text>
                <Text style={styles.text}>DECLARACIONES</Text>
                <Text style={styles.text}>I.- Declara “EL ARRENDADOR”:</Text>
                <Text style={styles.text}>
                    a) Que es propietario del inmueble ubicado en{" "}
                    {contrato.direccionRentador}.
                </Text>
                <Text style={styles.text}>
                    b) Que tiene interés en dar en arrendamiento el inmueble
                    antes descrito.
                </Text>
                <Text style={styles.text}>
                    c) Que tiene capacidad legal para celebrar el presente
                    contrato.
                </Text>
                <Text style={styles.text}>II.- Declara “EL ARRENDATARIO”:</Text>
                <Text style={styles.text}>
                    a) Que tiene interés en arrendar el inmueble antes descrito.
                </Text>
                <Text style={styles.text}>
                    b) Que tiene capacidad legal para celebrar el presente
                    contrato.
                </Text>
                <Text style={styles.text}>
                    c) Que conoce el inmueble y está de acuerdo en las
                    condiciones en que se encuentra.
                </Text>
                <Text style={styles.text}>
                    d) Que se compromete a pagar la renta que se establece en el
                    presente contrato.
                </Text>
                <Text style={styles.text}>
                    e) Que se compromete a pagar los servicios de agua, luz,
                    teléfono, gas, etc.
                </Text>
                <Text style={styles.text}>CLÁUSULAS</Text>
                <Text style={styles.text}>
                    PRIMERA.- “EL ARRENDADOR” da en arrendamiento al “EL
                    ARRENDATARIO” el inmueble antes descrito, el cual se
                    encuentra en buen estado y se compromete a entregarlo en las
                    mismas condiciones al término del presente contrato.
                </Text>
                <Text style={styles.text}>
                    TERCERA.- “EL ARRENDATARIO” se compromete a pagar los
                    servicios de agua, luz, teléfono, gas, etc.
                </Text>
            </View>
        </Page>
    </Document>
);

export default PDFfile;
