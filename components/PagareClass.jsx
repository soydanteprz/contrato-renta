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

export const PagareClass = ({
    pageNumber,
    FechaInicio,
    nombreArrendador,
    nombreArrendatario,
    direccionArrendatario,
    nombreAval,
    direccionAval,
    precio,
}) => {
    const date = new Date(FechaInicio);
    const month = date.toLocaleString("es-MX", { month: "long" });
    const year = date.getFullYear();

    return (
        <>
            <View style={styles.section}>
                <Text style={[styles.boldText, { textAlign: "center" }]}>
                    {pageNumber}
                </Text>
                <Text style={styles.boldText}>PAGARÉ</Text>
                <Text style={[styles.boldText, { textAlign: "right" }]}>
                    {new Intl.NumberFormat("es-MX", {
                        style: "currency",
                        currency: "MXN",
                    }).format(precio)}{" "}
                    {writtenNumber(precio).toUpperCase()} PESOS 00/100
                </Text>
                <Text style={[styles.normalText, { textAlign: "right" }]}>
                    QUERÉTARO, QUERÉTARO A {date.getDate()} DE{" "}
                    {month.toUpperCase()} DEL {year}
                </Text>
                <Text style={styles.normalText}>
                    YO{" "}
                    <Text style={styles.boldText}>
                        {nombreArrendatario} {""}
                    </Text>
                    debo y pagaré incondicionalmente a la orden de{" "}
                    <Text style={styles.boldText}>{nombreArrendador}</Text> o a
                    quien sus derechos representen en el domicilio ubicado:{" "}
                    <Text style={styles.boldText}>
                        {direccionArrendatario} {""}
                    </Text>
                    la cantidad de{" "}
                    <Text style={styles.boldText}>
                        {new Intl.NumberFormat("es-MX", {
                            style: "currency",
                            currency: "MXN",
                        }).format(precio)}{" "}
                        {"("}
                        {writtenNumber(precio).toUpperCase()} PESOS 00/100 M.N.{" "}
                        {") "}
                    </Text>
                    La suma garantizada por este pagaré causará intereses
                    moratorios a razón del 5% mensual, mismo que se aplicará
                    desde la fecha de vencimiento establecida en el presente
                    título hasta el día de pago total y efectivo de lo adeudado.
                </Text>
                <Text style={styles.breakLine}>
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                    - - - -
                </Text>
                <Text style={styles.normalText}>
                    La deuda será considerada exigible y de plazo vencido a
                    partir del incumplimiento a la fecha establecida, el pago se
                    deberá realizar en pesos mexicanos. Para los efectos
                    legales, judiciales y del protesto, derivados del presente
                    pagaré,
                </Text>
            </View>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Text style={styles.boldText}>
                        NOMBRE Y DATOS DEL DEUDOR
                    </Text>
                    <Text style={styles.normalText}>
                        NOMBRE:
                        <Text style={styles.boldText}>
                            {" "}
                            {nombreArrendatario}
                        </Text>
                    </Text>
                    <Text style={styles.normalText}>
                        DOMICILIO:
                        <Text style={styles.boldText}>
                            {" "}
                            {direccionArrendatario}
                        </Text>
                    </Text>
                    <Text style={styles.normalText}>
                        Por medio del presente, me obligo solidariamente a
                        garantizar el pago de la cantidad amparada en el
                        presente título, así como los intereses que, en su caso,
                        se generen.
                    </Text>
                </View>
                <View style={styles.left}>
                    <Text
                        style={[
                            styles.signature,
                            { alignContent: "center" },
                            { textAlign: "center" },
                        ]}
                    >
                        <Text style={styles.signature}>
                            _____________________{"\n"}
                        </Text>
                        <Text style={styles.signatureText}>
                            FIRMA DEL ARRENDATARIO
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Text style={styles.boldText}>NOMBRE Y DATOS DEL AVAL</Text>
                    <Text style={styles.normalText}>
                        NOMBRE:
                        <Text style={styles.boldText}> {nombreAval}</Text>
                    </Text>
                    <Text style={styles.normalText}>
                        DOMICILIO:
                        <Text style={styles.boldText}> {direccionAval}</Text>
                    </Text>
                </View>
                <View style={styles.left}>
                    <Text
                        style={[
                            styles.signature,
                            { alignContent: "center" },
                            { textAlign: "center" },
                        ]}
                    >
                        <Text style={styles.signature}>
                            _____________________{"\n"}
                        </Text>
                        <Text style={styles.signatureText}>FIRMA DEL AVAL</Text>
                    </Text>
                </View>
            </View>
        </>
    );
};

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
