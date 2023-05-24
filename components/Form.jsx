import Link from "next/link";

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
                        Nombre del Rentador
                    </label>
                    <input
                        type="text"
                        name="nombreRentador"
                        id="nombreRentador"
                        value={post.nombreRentador}
                        onChange={(e) =>
                            setPost({ ...post, nombreRentador: e.target.value })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Apellido del Rentador
                    </label>
                    <input
                        type="text"
                        name="apellidoRentador"
                        id="apellidoRentador"
                        value={post.apellidoRentador}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                apellidoRentador: e.target.value,
                            })
                        }
                        className="form_input"
                    />

                    <label className="font-satoshi font-semibold text-base text-gray-700">
                        Direccion del Rentador
                    </label>
                    <input
                        type="text"
                        name="direccionRentador"
                        id="direccionRentador"
                        value={post.direccionRentador}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                direccionRentador: e.target.value,
                            })
                        }
                        className="form_input"
                    />

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
                        Apellido del Aval
                    </label>
                    <input
                        type="text"
                        name="apellidoAval"
                        id="apellidoAval"
                        value={post.apellidoAval}
                        onChange={(e) =>
                            setPost({ ...post, apellidoAval: e.target.value })
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

                    <label className="font-satoshi font-semibold text-base text-gray-700">
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
