import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function PositionPage() {
    const [positions, setPositions] = useState([]);
    const [dependences, setDependences] = useState([]);

    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [editingPosition, setEditingPosition] = useState(false);

    const [positionData, setPositionData] = useState({
        position_name: '',
        position_description: '',
        dependence_id: '',
    });


    useEffect(() => {
        async function fetchPositions() {
            try {
                const response = await axios.get('http://localhost:3000/api/positions');
                setPositions(response.data);
            } catch (error) {
                console.error('Error fetching Positions:', error);
            }
        }
        fetchPositions();
    }, []);

    useEffect(() => {
        async function fetchDependences() {
            try {
                const response = await axios.get('http://localhost:3000/api/dependences');
                setDependences(response.data);
            } catch (error) {
                console.error('Error fetching dependences:', error);
            }
        }
        fetchDependences();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPositionData({
            ...positionData,
            [name]: value
        });
    };

    const handleEditPosition = (position) => {
        setEditingPosition(position); 
        setPositionData({
            position_name: position.position_name,
            position_description: position.position_description,
            dependence_id: position.dependence_id,
        });
    };

    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/positions/${editingPosition.position_id}`, positionData);
            const updatedPositions = positions.map((pos) => {
                if (pos.position_id === editingPosition.position_id) {
                    return { ...pos, ...positionData }; 
                }
                return pos;
            });
            setPositions(updatedPositions);
            setEditingPosition(false);
            Swal.fire({
                icon: 'success',
                title: 'Cargo actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating position:', error);
            alert('Failed to update position. Please try again.');
        }
        setPositionData({
            position_name: '',
            position_description: '',
            dependence_id: '',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/positions', positionData);
    
            Swal.fire({
                icon: 'success',
                title: 'Cargo creado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
    
            setPositionData({
                position_name: '',
                position_description: '',
                dependence_id: '',
            });
    
            setShowModal(false);
    
            const response = await axios.get('http://localhost:3000/api/positions');
            const updatedPositions = response.data; 
    
            setPositions(updatedPositions);
        } catch (error) {
            console.error('Error creating position:', error);
            alert('Failed to create position. Please try again.');
        }
    };

    useEffect(() => {
        async function fetchEmployees(positionId) {
            try {
                const MySwal = withReactContent(Swal);
                const response = await axios.get('http://localhost:3000/api/employees');
                const employeesData = response.data;
                
                const hasRelatedEmployees = employeesData.some(employee => employee.position_id === positionId);
    
                if (hasRelatedEmployees) {
                    MySwal.fire({
                        icon: 'error',
                        title: 'No se puede eliminar',
                        text: 'Este cargo tiene empleados asociadas en la tabla de empleados',
                        confirmButtonText: 'Aceptar'
                    });
                    return;
                }

            } catch (error) {
                console.error('Error fetching Positions:', error);
            }
        }
        fetchEmployees();
    }, []);
    

    const handleDeletePosition = async (position_id) => {
        const MySwal = withReactContent(Swal);

        try {
            const response = await axios.get(`http://localhost:3000/api/employees`);
            const employeesData = response.data;

            const hasRelatedEmployees = employeesData.some(employee => employee.position_id === position_id);

            if (hasRelatedEmployees) {
                MySwal.fire({
                    icon: 'error',
                    title: 'No se puede eliminar',
                    text: 'Esta posición tiene empleados asociados en la tabla de empleados',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }

            await axios.delete(`http://localhost:3000/api/positions/${position_id}`);

            Swal.fire({
                icon: 'success',
                title: 'Posición eliminada correctamente',
                showConfirmButton: false,
                timer: 1500
            });

            setPositions(positions.filter(pos => pos.position_id !== position_id));
        } catch (error) {
            console.error('Error al eliminar la posición:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al intentar eliminar la posición',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    const handleCloseModal = () => {
        setEditingPosition(false);
        setShowModal(false);
        setPositionData({
            position_name: '',
            position_description: '',
            dependence_id: '',
        });
    };
    
    

    return(
        <section>
            <div className='flex items-center justify-between mt-10'>
                <h1 className="text-3xl font-bold mb-10 ml-16"> Cargos</h1>
                <button className="bg-[#FEAF00] hover:bg-[#FE9C00] text-white font-bold py-2 px-2 rounded mr-16"  onClick={() => setShowModal(true)}>
                    Añadir un nuevo cargo
                </button>
            </div>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {positions.map(position => (
                        <div key={position.position_id} className="w-full md:w-50 px-6 py-4 mx-auto bg-white shadow-xl rounded-xl">
                            <h4 className="mb-4 text-2xl font-semibold text-neutral-600">{position.position_name}</h4>
                            <p className="text-base text-gray-500">{position.position_description}</p>
                            <div className="flex justify-end mt-4">
                                <button  className="px-4 py-2 mr-2 rounded-lg" onClick={() => handleEditPosition(position)}>
                                    <div className="w-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" fill="#FEAF00"/></svg></div> {/* Espacio para el SVG */}
                                </button>

                                <button className="px-4 py-2 rounded-lg" onClick={() => handleDeletePosition(position.position_id)}>
                                    <div className="w-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="#FEAF00"/></svg>
                                    </div>
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white p-8 rounded shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Nuevo Empleado</h2>
                        <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label htmlFor="position_name" className="block text-sm font-medium text-gray-700">Nombre del cargo:</label>
                        <input
                            type="text"
                            id="position_name"
                            name="position_name"
                            value={positionData.position_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Nombre"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="position_description" className="block text-sm font-medium text-gray-700">Descripcion cargo:</label>
                        <input
                            id="position_description"
                            name="position_description"
                            value={positionData.position_description}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Apellido"
                        />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dependence_id" className="block text-sm font-medium text-gray-700">Dependencia:</label>
                            <select
                                id="dependence_id"
                                name="dependence_id"
                                value={positionData.dependence_id}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Seleccionar dependencia</option>
                                {dependences.map(dependence => (
                                    <option key={dependence.id} value={dependence.dependence_id}>{dependence.dependence_name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="text-right">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Agregar
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            )}


            {/* Modal de edición */}
            {editingPosition && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Editar Cargo</h2>
                                <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form onSubmit={handleSubmitEdit}>
                                <div className="mb-4">
                                    <label htmlFor="position_name" className="block text-sm font-medium text-gray-700">Nombre del cargo:</label>
                                    <input
                                        type="text"
                                        id="position_name"
                                        name="position_name"
                                        value={positionData.position_name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="position_description" className="block text-sm font-medium text-gray-700">Descripcion cargo:</label>
                                    <input
                                        id="position_description"
                                        name="position_description"
                                        value={positionData.position_description}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Apellido"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="dependence_id" className="block text-sm font-medium text-gray-700">Dependencia:</label>
                                    <select
                                        id="dependence_id"
                                        name="dependence_id"
                                        value={positionData.dependence_id}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Seleccionar dependencia</option>
                                        {dependences.map(dependence => (
                                            <option key={dependence.id} value={dependence.dependence_id}>{dependence.dependence_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Guardar cambios
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        
        </section>
    );
}

export default PositionPage;