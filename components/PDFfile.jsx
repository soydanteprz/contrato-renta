import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import React from "react";

const Recibo = ({
    pageNumber,
    FechaInicio,
    sexoArrendatario,
    nombreArrendatario,
    direccionArrendatario,
}) => {
    const date = new Date(FechaInicio);
    const month = date.toLocaleString("es-MX", { month: "long" });
    const year = date.getFullYear();

    return (
        <>
            <Text style={styles.number}>{pageNumber}</Text>
            <Text style={styles.recibo}>RECIBO DE ARRENDAMIENTO</Text>
            <Text style={styles.fecha}>
                {" "}
                Querétaro, Qro. {date.getDate()} de {month} del {year}
            </Text>
            <Text style={styles.reciboText}>
                Recibí de{" "}
                {sexoArrendatario === "Masculino" ? "el C. " : "la C. "}{" "}
                {nombreArrendatario} la cantidad de{" "}
                <Text style={styles.textBold}>
                    $5, 000.00 (CINCO MIL PESOS 00/100 M.N.)
                </Text>{" "}
                por concepto de renta del inmueble ubicado en{" "}
                <Text style={styles.textBold}>{direccionArrendatario}</Text>{" "}
                correspondiente al mes de{" "}
                <Text style={styles.textBold}>
                    {" "}
                    {month.toUpperCase()} del {year}
                </Text>
            </Text>
        </>
    );
};

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        lineHeight: 1.5,
        fontSize: 14,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontFamily: "Times-Roman",
    },
    title: {
        textAlign: "center",
        fontWeight: "untrabold",
        textDecoration: "underline",
        paddingBottom: 15,
    },
    subtitle: {
        textAlign: "justify",
        marginBottom: 15,
        marginLeft: 25,
        marginRight: 25,
    },

    text: {
        textAlign: "justify",
    },

    textBold: {
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
    },

    textCenter: {
        textAlign: "center",
    },
    declaracion: {
        fontWeight: "heavy",
        marginLeft: 25,
        fontFamily: "Times-Bold",
    },
    declaracionText: {
        marginLeft: 48,
        textAlign: "justify",
        lineHeight: 1.5,
    },
    declaracionTitle: {
        fontWeight: "heavy",
        marginLeft: 40,
        paddingBottom: 15,
        paddingTop: 15,
    },
    footer: {
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
        textAlign: "justify",
        marginLeft: 25,
        paddingTop: 30,
    },
    normalText: {
        paddingBottom: 15,
        textAlign: "justify",
        marginLeft: 25,
        marginRight: 25,
    },

    clausulas: {
        fontWeight: "heavy",
        textAlign: "center",
        fontFamily: "Times-Bold",
        paddingTop: 10,
        paddingBottom: 15,
    },
    listItems: {
        paddingBottom: 15,
        textAlign: "justify",
        marginLeft: 30,
    },
    signature: {
        textAlign: "center",
        paddingTop: 45,
    },
    signatureText: {
        textAlign: "center",
        paddingBottom: 15,
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
    },
    number: {
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
        textAlign: "right",
        marginRight: 25,
    },
    recibo: {
        fontWeight: "heavy",
        fontFamily: "Times-Bold",
        textAlign: "center",
        paddingBottom: 15,
        fontSize: 20,
    },
    reciboText: {
        paddingBottom: 30,
        textAlign: "justify",
        marginLeft: 25,
        marginRight: 25,
        fontSize: 18,
    },
    fecha: {
        textAlign: "right",
        paddingBottom: 15,
        marginRight: 25,
    },
});

// Create Document Component
const PDFfile = ({ contrato }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>CONTRATO DE ARRENDAMIENTO</Text>
                <Text style={styles.subtitle}>
                    CONTRATO DE ARRENDAMIENTO QUE CELEBRAN POR UNA PARTE{" "}
                    <Text style={styles.textBold}>
                        LA C. ZOILA REFUGIO VASQUEZ RAMIREZ
                    </Text>{" "}
                    QUIEN SE LE DENOMINARA EN ADELANTE{" "}
                    <Text style={styles.textBold}>EL ARRENDADOR</Text> Y DE OTRA
                    PARTE {/* IF SEX IS MALE */}
                    {contrato.sexoArrendatario === "Masculino" ? (
                        <Text style={styles.textBold}>
                            EL C. {contrato.nombreArrendatario}
                        </Text>
                    ) : (
                        <Text style={styles.textBold}>
                            LA C. {contrato.nombreArrendatario}
                        </Text>
                    )}{" "}
                    EN SU CARÁCTER DE{" "}
                    <Text style={styles.textBold}>ARRENDATARIO</Text> RESPECTO
                    AL USO DEL INMUEBLE QUE SE MENCIONA MAS ADELANTE Y DE
                    ACUERDO A LO QUE SE CONTIENE EN LAS SIGUIENTES DECLARACIONES
                    Y CLÁUSULAS.
                </Text>
                <Text style={styles.declaracion}>DECLARACIONES:</Text>
                <Text style={styles.declaracionTitle}>
                    I.- DECLARA EL ARRENDADOR
                </Text>
                {/* BULLET POINTS */}
                <Text style={styles.declaracionText}>
                    a) Ser Propietario del inmueble ubicado en{" "}
                    <Text style={styles.textBold}>
                        {contrato.direccionArrendatario}{" "}
                    </Text>
                </Text>
                <Text style={styles.declaracionText}>
                    b) Que dicho inmueble se encuentra al corriente del pago de
                    todas sus contribuciones y que no reporta a la fecha ninguno
                    adeudo por concepto de gastos de administración.
                </Text>
                <Text style={styles.declaracionText}>
                    c) Que es su deseo celebrar el presente contrato de
                    arrendamiento por un plazo que se considera forzoso señalado
                    en las cláusulas del presente contrato.
                </Text>
                <Text style={styles.declaracionTitle}>
                    II.- DECLARA EL ARRENDATARIO
                </Text>
                <Text style={styles.declaracionText}>
                    a) Ser mayor de edad y encontrarse debidamente capacitada
                    para obligarse en los términos del presente contrato.
                </Text>
                <Text style={styles.declaracionText}>
                    b) Conocer el estado físico y jurídico del inmueble y que se
                    le ha hecho mención de las cantidades que mensualmente debe
                    cubrir por concepto de RENTA del objeto del presente
                    contrato.
                </Text>
                <Text style={styles.footer}>
                    EXPUESTO LO ANTERIOR LOS COMPARECIENTES OTORGAN LO QUE SE
                    CONTIENE EN LAS SIGUIENTES CLAUSULAS.
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.clausulas}>CLÁUSULAS</Text>
                <Text style={styles.normalText}>
                    PRIMERA.- El Arrendador da en arrendamiento el inmueble
                    ubicado en{" "}
                    <Text style={styles.textBold}>
                        {" "}
                        {contrato.direccionArrendatario}{" "}
                    </Text>
                </Text>
                <Text style={styles.normalText}>
                    SEGUNDA.- El arrendatario pagara por concepto de renta la
                    cantidad de{" "}
                    <Text style={styles.textBold}>
                        $5, 000.00 (CINCO MIL PESOS 00/100 M.N.){" "}
                    </Text>
                    mensuales, la cual será pagada por mes cumplido,{" "}
                    <Text style={styles.textBold}>
                        el día 1 (PRIMERO) de cada mes;
                    </Text>{" "}
                    debiendo llevar a cabo el{" "}
                    <Text style={styles.textBold}>PAGO EN EFECTIVO</Text> de
                    dicha RENTA, en el domicilio particular de la ARRENDADORA,{" "}
                    <Text style={styles.textBold}>
                        ubicado en CALLE HACIENDA DE LOS REYES NÚMERO 143 CIENTO
                        CUARENTA Y TRES, EN EL FRACCIONAMIENTO LAS TERESAS DE
                        ESTA CIUDAD.
                    </Text>
                </Text>
                <Text style={styles.normalText}>
                    TERCERA.- El presente contrato de arrendamiento tendrá una
                    duración de 6 (SEIS) meses forzosos para ambas partes,
                    contando a partir de la fecha de firma del presente y el
                    cual NO tendrá prorrogara, ya que cumpliéndose el plazo
                    señalado, el ARRENDATARIO se compromete a desocupar el
                    inmueble objeto del presente instrumento.
                </Text>
                <Text style={styles.normalText}>
                    CUARTA.- El Arrendatario destinara el objeto materia del
                    presente contrato, únicamente para uso de CASA HABITACIÓN,
                    quedándole estrictamente prohibido destinarlo para cualquier
                    otro fin, estando{" "}
                    <Text style={styles.textBold}>ESTRICTAMENTE PROHIBIDO</Text>{" "}
                    el ingreso de cualquier MASCOTA o ANIMAL a dicho inmueble,
                    siendo esta causa especial de rescisión del presente
                    contrato.
                </Text>
                <Text style={styles.normalText}>
                    QUINTA.- En caso de que el Arrendatario quisiera seguir
                    arrendando dicho inmueble por un plazo mayor a seis meses
                    deberá notificarlo al arrendador con 30 treinta días de
                    anticipación a la fecha de que termine el presente contrato,
                    para que el Arrendador otorgue su consentimiento con dicha
                    petición, en ambos casos, deberá notificarse en forma
                    fehaciente, es decir por escrito.
                </Text>
                <Text style={styles.normalText}>
                    SEXTA.-. Queda expresamente prohibido al Arrendatario
                    subarrendar, o trasmitir bajo cualquier título el uso del
                    inmueble, dada en arrendamiento, siendo esta una causa
                    especial en la rescisión del presente contrato.
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.normalText}>
                    SEPTIMA.- En caso de que dicho inmueble requiera de alguna
                    reparación cuya omisión impida el uso normal al que está
                    destinado el mismo; el arrendatario se obliga a informar de
                    esta situación al arrendador, y/o a su representante; a fin
                    de que éste proporcione su autorización por escrito para
                    llevar a cabo las reparaciones respectivas.
                </Text>
                <Text style={styles.normalText}>
                    OCTAVA.- El Arrendatario no podrá realizar actos que vayan
                    en contra de lo establecido por el reglamento del régimen de
                    propiedad a que se encuentra sujeto el inmueble.
                </Text>
                <Text style={styles.normalText}>
                    NOVENA.- El Arrendatario no podrá almacenar substancias
                    peligrosas, siendo el incumplimiento de lo preceptuado en
                    esta cláusula, causa de rescisión del presente contrato, con
                    independencia de cubrir al Arrendador y a los vecinos de los
                    daños y perjuicios que ocasionen dichas substancias.
                </Text>
                <Text style={styles.normalText}>
                    DECIMA.- El Arrendatario recibe el inmueble en condiciones
                    adecuadas, y óptimas para su uso; obligándose a devolverlo
                    en el mismo estado en que lo recibe al momento en que se
                    termine, rescinda o convengan las partes a entregar el
                    mismo, aceptando las modificaciones que sufra por el
                    deterioro natural de uso, obligándose a cubrir los gastos de
                    reparación de aquellos desperfectos que en forma intencional
                    o accidental se ocasionen a la fracción antes mencionada. Se
                    anexan al presente documento --fotografías útiles, respecto
                    al estado que guarda el inmueble materia del presente
                    contrato al momento de la entrega del mismo al arrendatario
                    a la firma del presente contrato y que inicia en vigor el
                    arrendamiento referido.
                </Text>
                <Text style={styles.normalText}>
                    DECIMA PRIMERA. - Cualquier modificación que quisiere
                    realizar el Arrendatario, sobre el inmueble correrán a cargo
                    de éste, y deberá ser autorizado por el Arrendador, para lo
                    cual deberá notificársele por escrito de los cambios que se
                    quisieran realizar, debiendo existir un documento por parte
                    del arrendador que autorice dichas modificaciones.
                </Text>
                <Text style={styles.normalText}>
                    DECIMA SEGUNDA.- El Arrendatario se obliga a pagar el
                    importe de los recibos por derecho del servicio de luz,
                    agua, siendo que el Arrendador Autoriza para que realice los
                    respectivos contrato de dichos servicio, así el derecho de
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.normalText}>
                    realice los respectivos contrato de dichos servicio, así el
                    derecho de Televisión por Cable si este se llegara a
                    contratar por el Arrendatario, y aquellos otros servicios
                    que fuesen contratados por el Arrendatario, comprometiéndose
                    a entregar los recibos del pago respectivo de cada servicio,
                    respecto del mes inmediato anterior al mes vencido; al
                    arrendador.
                </Text>
                <Text style={styles.normalText}>
                    DÉCIMA TERCERA.- El Arrendador no se responsabiliza por la
                    seguridad de los bienes muebles y contenidos que el
                    Arrendatario introduzca al inmueble arrendado.
                </Text>
                <Text style={styles.normalText}>
                    DÉCIMA CUARTA.- El Arrendatario está consciente por si
                    habérsele explicado, que no existe duda alguna en que su
                    responsabilidad no termina sino hasta el momento en que el
                    Arrendador se dé por recibido en su entera satisfacción el
                    inmueble arrendado.
                </Text>
                <Text style={styles.normalText}>
                    DECIMA QUINTA.- De igual manera, a fin de garantizar el
                    legal cumplimiento del presente Contrato de Arrendamiento y
                    obligarse como obligada solidaria y subsidiaria de las
                    obligaciones que contrae la arrendataria y las reconoce como
                    propias,{" "}
                    <Text style={styles.textBold}>
                        {contrato.sexoAval === "Masculino"
                            ? "a el C. "
                            : "a la C. "}{" "}
                        {contrato.nombreAval}
                    </Text>{" "}
                    se constituye ante está obligación como FIADOR de la
                    ARRENDATARIO. Ésta última señala como su domicilio para oír
                    y recibir todo tipo de notificaciones y documentos el
                    ubicado en{" "}
                    <Text style={styles.textBold}>
                        {contrato.direccionAval}
                    </Text>
                </Text>
                <Text style={styles.normalText}>
                    DÉCIMA SEXTA.- De igual manera a fin de garantizar el pago
                    de cualquier daño que pudiere causarse en el inmueble
                    materia del presente contrato; la arrendataria entrega por
                    concepto de depósito a la Arrendadora; la cantidad de{" "}
                    <Text style={styles.textBold}>
                        $ 5, 000.00 (CINCO MIL PESOS 00/100 M.N.),
                    </Text>{" "}
                    cantidad equivalente a UN MES DE RENTA; a fin de garantizar
                    la entrega del multicitado inmueble en las mismas
                    condiciones en que fue recibido y sin adeudo de servicio
                    contratado alguno, respecto del predio aludido; cantidad que
                    le será devuelta a la terminación del presente instrumento y
                    en caso de que se cumpla con lo establecido en el presente
                    documento.
                </Text>
                <Text style={styles.normalText}>
                    DÉCIMA SÉPTIMA: Las partes que intervienen en el presente
                    contrato se someten a la Jurisdicción y Tribunales de la
                    Ciudad de Querétaro, Querétaro; en todo lo relacionado al
                    cumplimiento del mismo.
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.normalText}>
                    DECIMO OCTAVA.- Las partes señalan como sus domicilios para
                    oír y recibir cualquier tipo de notificaciones,
                    emplazamientos, o recibir documentos los siguientes:
                </Text>
                <Text style={styles.normalText}>
                    EL ARRENDADOR:{" "}
                    <Text style={styles.textBold}>
                        CALLE HACIENDA DE LOS REYES NÚMERO 143 CIENTO CUARENTA Y
                        TRES, EN EL FRACCIONAMIENTO LAS TERESAS DE ESTA CIUDAD.
                    </Text>
                </Text>
                <Text style={styles.normalText}>
                    EL ARRENDATARIO:{" "}
                    <Text style={styles.textBold}>
                        {contrato.direccionArrendatario}
                    </Text>
                </Text>
                <Text style={styles.normalText}>
                    DÉCIMA NOVENA- Leído por ambas partes el presente contrato
                    lo firman de conformidad, al{" "}
                    <Text style={styles.textBold}>
                        {" "} {new Date(contrato.FechaInicio).getDate()} de{" "} {new Date(contrato.FechaInicio).toLocaleString("es-MX", { month: "long" })} del{" "} {new Date(contrato.FechaInicio).getFullYear()}
                    </Text>{" "}
                    en la ciudad de Querétaro Qro., manifestando que no existió
                    dolo, violencia, lesión, o algún otro tipo de vicio en el
                    consentimiento en la realización del mismo.
                </Text>
                <Text style={styles.normalText}>
                    VIGÉSIMA.- En caso de incumplimiento de alguna de las
                    CLÁUSULAS del presente CONTRATO, el arrendador podrá
                    rescindirlo, siendo esta una causa especial de terminar la
                    relación contractual.
                </Text>
                {/* field to sign */}
                <Text style={styles.signature}>
                    _____________________________________
                </Text>
                <Text style={styles.signatureText}>
                    C. Zoila Refugio Vasquez Ramirez
                </Text>
                <Text style={styles.signature}>
                    _____________________________________{" "}
                </Text>
                <Text style={styles.signatureText}>
                    C. {contrato.nombreArrendatario}
                </Text>
                <Text style={styles.signature}>
                    _____________________________________{" "}
                </Text>
                <Text style={styles.signatureText}>
                    C. {contrato.nombreAval}
                </Text>
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Recibo
                    pageNumber="1-6"
                    FechaInicio={contrato.FechaInicio}
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
                <Recibo
                    pageNumber="2-6"
                    FechaInicio={
                        new Date(
                            new Date(contrato.FechaInicio).setMonth(
                                new Date(contrato.FechaInicio).getMonth() + 1
                            )
                        )
                    }
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Recibo
                    pageNumber="3-6"
                    FechaInicio={
                        new Date(
                            new Date(contrato.FechaInicio).setMonth(
                                new Date(contrato.FechaInicio).getMonth() + 2
                            )
                        )
                    }
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
                <Recibo
                    pageNumber="4-6"
                    FechaInicio={
                        new Date(
                            new Date(contrato.FechaInicio).setMonth(
                                new Date(contrato.FechaInicio).getMonth() + 3
                            )
                        )
                    }
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Recibo
                    pageNumber="5-6"
                    FechaInicio={
                        new Date(
                            new Date(contrato.FechaInicio).setMonth(
                                new Date(contrato.FechaInicio).getMonth() + 4
                            )
                        )
                    }
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
                <Recibo
                    pageNumber="6-6"
                    FechaInicio={
                        new Date(
                            new Date(contrato.FechaInicio).setMonth(
                                new Date(contrato.FechaInicio).getMonth() + 5
                            )
                        )
                    }
                    sexoArrendatario={contrato.sexoArrendatario}
                    nombreArrendatario={contrato.nombreArrendatario}
                    direccionArrendatario={contrato.direccionArrendatario}
                />
            </View>
        </Page>
    </Document>
);

export default PDFfile;
