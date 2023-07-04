import Link from "next/link";


// function six months later from the date received
function sixMonthsLater(date) {
    const FechaInicio = new Date(date);
    const FechaFin = new Date(
        FechaInicio.getFullYear(),
        FechaInicio.getMonth() + 6,
        FechaInicio.getDate()
    );
    const year = FechaFin.getFullYear();
    const month = FechaFin.getMonth() + 1;
    const day = FechaFin.getDate();
    const FechaFinString = `${year}-${month < 10 ? `0${month}` : month}-${
        day < 10 ? `0${day}` : day
    }`;
    return FechaFinString;
}

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="flex flex-col items-center justify-center gap-10">
            <h1 className="head_text text-center">
                <span className="blue_gradient">{type}</span>
            </h1>
            <p className="desc text-center mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quae voluptates voluptatem
                voluptatibus quod quos doloribus quidem voluptate. Quisquam
                voluptatum, quibusdam, quia, quae voluptates voluptatem
                voluptatibus quod quos doloribus quidem voluptate.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-full max-w-2xl"
            >
                <div className="flex flex-col gap-3">
                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Nombre del Arrendador
                    </label>
                    <input
                        type="text"
                        name="nombreArrendador"
                        id="nombreArrendador"
                        value={post.nombreArrendador}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                nombreArrendador: e.target.value,
                            })
                        }
                        className="form_input"
                    />
                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Direccion del Arrendador
                    </label>
                    <input
                        type="text"
                        name="direccionArrendador"
                        id="direccionArrendador"
                        value={post.direccionArrendador}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                direccionArrendador: e.target.value,
                            })
                        }
                        className="form_input"
                    />
                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Sexo del Arrendador
                    </label>
                    <select
                        name="sexoArrendador"
                        id="sexoArrendador"
                        value={post.sexoArrendador}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                sexoArrendador: e.target.value,
                            })
                        }
                        className="form_input"
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    
                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Nombre del Arrendatario
                    </label>
                    <input
                        type="text"
                        name="nombreArrendatario"
                        id="nombreArrendatario"
                        value={post.nombreArrendatario}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                nombreArrendatario: e.target.value,
                            })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Direccion del Arrendatario
                    </label>
                    <input
                        type="text"
                        name="direccionArrendatario"
                        id="direccionArrendatario"
                        value={post.direccionArrendatario}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                direccionArrendatario: e.target.value,
                            })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Sexo del Arrendatario
                    </label>
                    <select
                        name="sexoArrendatario"
                        id="sexoArrendatario"
                        value={post.sexoArrendatario}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                sexoArrendatario: e.target.value,
                            })
                        }
                        className="form_input"
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Nombre del Aval
                    </label>
                    <input
                        type="text"
                        name="nombreAval"
                        id="nombreAval"
                        value={post.nombreAval}
                        onChange={(e) =>
                            setPost({ ...post, nombreAval: e.target.value })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Direccion del Aval
                    </label>
                    <input
                        type="text"
                        name="direccionAval"
                        id="direccionAval"
                        value={post.direccionAval}
                        onChange={(e) =>
                            setPost({ ...post, direccionAval: e.target.value })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Fecha de Inicio
                    </label>
                    <input
                        type="date"
                        name="FechaInicio"
                        id="FechaInicio"
                        value={post.FechaInicio}
                        onChange={(e) =>
                            setPost({ ...post, FechaInicio: e.target.value })
                        }
                        className="form_input"
                    />

                    {/* six months after FechaInicio */}
                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Fecha de Fin
                    </label>
                    <input
                        type="date"
                        name="FechaFin"
                        id="FechaFin"
                        value={post.FechaFin}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                FechaFin: sixMonthsLater(e.target.value),
                            })
                        }
                        className="form_input"
                    />
                    


                    {/* <label className="font-satoshi font-semibold text-base text-gray-700">
                        Fecha de Fin
                    </label>
                    <input
                        type="date"
                        name="FechaFin"
                        id="FechaFin"
                        value={post.FechaFin}
                        onChange={(e) =>
                            setPost({ ...post, FechaFin: e.target.value })
                        }
                        className="form_input"
                    /> */}

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Sexo del Aval
                    </label>
                    <select
                        name="sexoAval"
                        id="sexoAval"
                        value={post.sexoAval}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                sexoAval: e.target.value,
                            })
                        }
                        className="form_input"
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Precio
                    </label>
                    <input
                        type="number"
                        name="precio"
                        id="precio"
                        value={post.precio}
                        onChange={(e) =>
                            setPost({ ...post, precio: e.target.value })
                        }
                        className="form_input"
                    />

                    <div className="flex-end mx-3 mb-5 gap-3">
                        <Link
                            href="/"
                            className="px-5 py-2 rounded-md bg-gray-500 text-white font-semibold hover:bg-gray-600 transition duration-200"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-5 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200"
                        >
                            {submitting ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Form;
