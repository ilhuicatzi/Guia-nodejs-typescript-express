import { ArrowNext } from "@/assets/icons/ArrowNext";
import { useNavigate } from "react-router-dom";

function ButtonNavegacion() {
    const navigate = useNavigate();
  return (
    <article className="my-24 w-11/12 flex justify-end">
    <button
      className="transition duration-300 group hover:ring-primary md:w-52 md:py-5 md:pr-10 pl-5 p-2 rounded-xl ring-1 ring-muted flex flex-col gap-y-3"
      onClick={() => navigate("/inicializacion")}
    >
      <span className="hidden md:flex text-xs uppercase font-extralight text-muted group-hover:text-muted-foreground">
        Proximo
      </span>
      <p className="group-hover:text-blue-600 text-muted-foreground font-medium text-sm md:text-base lg:text-lg flex items-center gap-3">
        <span>Inicialización</span>
        <ArrowNext className="w-7 h-7" />
      </p>
    </button>
  </article>
  )
}

export default ButtonNavegacion