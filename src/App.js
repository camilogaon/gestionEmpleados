import React, { useState } from "react";
import "./App.css";

import EmployeeView from "./components/employessPage";
import DependencesViews from "./components/dependencesPage";
import PositionPage from "./components/positionsPage";

function App() {
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  const handleClick = (id) => {
    setBotonSeleccionado(id);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        {/* Columna izquierda (25%) */}
        <div className="w-1/6 bg-[#F5E3CF]">
          <nav className="grid place-items-center mt-8 ">
            <div className="flex items-center mb-1">
              {/* Contenido del encabezado */}
              <svg
                className="w-12 h-12 mr-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M144 0a80 80 0 1 1 0   160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6     9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7     0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6     21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352     512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>
              <p className="text-lg font-bold">GESTION DE EMPLEADOS</p>
            </div>

            <div className="flex flex-col mt-24 ">
              

              <button
                className={`flex items-center mt-10 ${
                  botonSeleccionado === "empleados" ? "bg-[#FEAF00] p-2 rounded-md" : ""
                }`}
                onClick={() => handleClick("empleados")}
              >
                {/* Contenido del botón Empleados */}
                <div className="mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-7 h-7"
                  >
                    <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
                  </svg>
                </div>
                <p className="font-semibold">Empleados</p>
              </button>

              <button
                className={`flex items-center mt-10 ${
                  botonSeleccionado === "cargos" ? "bg-[#FEAF00] p-2 rounded-md" : ""
                }`}
                onClick={() => handleClick("cargos")}
              >
                {/* Contenido del botón Cargos */}
                <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7">
                    <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                  </svg>
                </div>
                <p className="font-semibold">Cargos</p>
              </button>

              <button
                className={`flex items-center mt-10 ${
                  botonSeleccionado === "dependencias"
                    ? "bg-[#FEAF00] p-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleClick("dependencias")}
              >
                {/* Contenido del botón Dependencias */}
                <div className="mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-7 h-7"
                  >
                    <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                  </svg>
                </div>
                <p className="font-semibold">Dependencias</p>
              </button>
            </div>
          </nav>
        </div>

        {/* Columna derecha (restante) */}
        <div className="flex-1 bg-[#E5E5E5]">
          {botonSeleccionado === "empleados" && <EmployeeView />}
          {botonSeleccionado === "dependencias" && <DependencesViews />}
          {botonSeleccionado === "cargos" && <PositionPage/>}

        </div>
      </div>
    </div>
  );
}

export default App;
