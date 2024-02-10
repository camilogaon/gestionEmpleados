import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function EmployeeView() {
    const [employees, setEmployees] = useState([]);

    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
    const [showModalDos, setShowModalDos] = useState(false);
    const [showModalCapacitaciones, setShowModalCapacitaciones] = useState(false);
    const [showModalJobs, setShowModalJobs] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [positions, setPositions] = useState([]);
    const [selectedPositionName, setSelectedPositionName] = useState('');
    const [selectedDependenceName, setSelectedDependenceName] = useState('');
    const [trainings, setTrainings] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(false);

    const [employeeData, setEmployeeData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        address: '',
        phone_number: '',
        email: '',
        hire_date: '',
        position_id : '',
    });

    const [trainingData, setTrainingData] = useState({
        training_name: '',
        training_description: '',
    });

    const [jobData, setJobData] = useState({
        position: '',
        date_start: '',
        date_end: '',
    });


    useEffect(() => {
        async function fetchEmployees() {
            try {
                const response = await axios.get('http://localhost:3000/api/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        }
        fetchEmployees();
    }, []);

    useEffect(() => {
        async function fetchPositions() {
            try {
                const response = await axios.get('http://localhost:3000/api/positions');
                setPositions(response.data);
            } catch (error) {
                console.error('Error fetching positions:', error);
            }
        }
        fetchPositions();
    }, []);


    useEffect(() => {
        async function fetchTrainings() {
            try {
                const response = await axios.get('http://localhost:3000/api/trainings');
                setTrainings(response.data);
            } catch (error) {
                console.error('Error fetching trainings:', error);
            }
        }
        fetchTrainings();
    }, []);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await axios.get('http://localhost:3000/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching Jobs:', error);
            }
        }
        fetchJobs();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleChangeCapacitacion = (event) => {
        const { name, value } = event.target;
        setTrainingData({
            ...trainingData,
            [name]: value
        });
    };

    const handleChangeJob = (event) => {
        const { name, value } = event.target;
        setJobData({
            ...jobData,
            [name]: value
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/employees', employeeData);
    
            Swal.fire({
                icon: 'success',
                title: 'Empleado agregado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
    
            setEmployeeData({
                first_name: '',
                last_name: '',
                date_of_birth: '',
                address: '',
                phone_number: '',
                email: '',
                hire_date: '',
                position_id: '',
            });
    

            setShowModal(false);
    
            const response = await axios.get('http://localhost:3000/api/employees');
            const updatedEmployees = response.data; 

            setEmployees(updatedEmployees);
        } catch (error) {
            console.error('Error creating employee:', error);
            alert('Failed to create employee. Please try again.');
        }
    };
    

    const handleSubmitCapacitacion = async (event) => {
        event.preventDefault();
        try {
            const trainingDataWithEmployeeId = {
                ...trainingData,
                employee_id: selectedEmployee.employee_id
            };

            await axios.post('http://localhost:3000/api/trainings', trainingDataWithEmployeeId);
    
            Swal.fire({
                icon: 'success',
                title: 'Capacitacion agregada correctamente',
                showConfirmButton: false,
                timer: 1500
            });

            setTrainingData({
                training_name: '',
                training_description: '',
            });

            setShowModalCapacitaciones(false);

            const response = await axios.get('http://localhost:3000/api/trainings');
            const updatedTrainings = response.data; 
    

            setTrainings(updatedTrainings);
        } catch (error) {
            console.error('Error creating training:', error);
            alert('Failed to create training. Please try again.');
        }
    };
    

    const handleSubmitJob = async (event) => {
        event.preventDefault();
        try {
            const jobDataWithEmployeeId = {
                ...jobData,
                employee_id: selectedEmployee.employee_id
            };

            await axios.post('http://localhost:3000/api/jobs', jobDataWithEmployeeId);

            Swal.fire({
                icon: 'success',
                title: 'Trabajo agregado correctamente',
                showConfirmButton: false,
                timer: 1500
            });

            setJobData({
                position: '',
                date_start: '',
                date_end: '',
            });

            setShowModalJobs(false);
    
            const response = await axios.get('http://localhost:3000/api/jobs');
            const updatedJobs = response.data; 

            setJobs(updatedJobs);
        } catch (error) {
            console.error('Error creating job:', error);
            alert('Failed to create job. Please try again.');
        }
    };
    

    const handleEditPosition = (employee) => {
        setEditingEmployee(employee); 
        setEmployeeData({
            first_name: employee.first_name,
            last_name: employee.last_name,
            date_of_birth: employee.date_of_birth,
            address: employee.address,
            phone_number: employee.phone_number,
            email: employee.email,
            hire_date: employee.hire_date,
            position_id: employee.position_id,
        });
    };

    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/employees/${editingEmployee.employee_id}`, employeeData);
            const updatedEmployees = employees.map((pos) => {
                if (pos.employee_id === editingEmployee.employee_id) {
                    return { ...pos, ...employeeData }; 
                }
                return pos;
            });
            setEmployees(updatedEmployees);
            setEditingEmployee(false);
            Swal.fire({
                icon: 'success',
                title: 'Informacion actualizada correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating employee:', error);
            alert('Failed to update employee. Please try again.');
        }
        setEmployeeData({
            first_name: '',
            last_name: '',
            date_of_birth: '',
            address: '',
            phone_number: '',
            email: '',
            hire_date: '',
            position_id: '',
        });
    };
    


    useEffect(() => {
        if (selectedEmployee) {
            const selectedPosition = positions.find(position => position.position_id === selectedEmployee.position_id);
            if (selectedPosition) {
                setSelectedPositionName(selectedPosition.position_name);
            }
        }
    }, [selectedEmployee, positions]);



    

    const handleDeleteEmployee = async (employeeId) => {

        const MySwal = withReactContent(Swal);
        
        const employeeToDelete = employees.find(employee => employee.employee_id === employeeId);

        MySwal.fire({
            title: `¿Estás seguro de eliminar el empleado ${employeeToDelete.first_name} ?`,
            icon: 'question',
            text: 'Se eliminará definitivamente junto a sus capacitaciones e historial laboral',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/api/employees/${employeeId}`);
                Swal.fire({
                    icon: 'success',
                    title: 'Cargo eliminado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setShowModalDos(false);
            setEmployees(prevEmployees => prevEmployees.filter(employee => employee.employee_id !== employeeId));

            } else {

            }
        });
    };

    const handleCloseModal = () => {
        setShowModalDos(false);
        setEmployeeData({
            first_name: '',
            last_name: '',
            date_of_birth: '',
            address: '',
            phone_number: '',
            email: '',
            hire_date: '',
            position_id: '',
        });
    };
    


    return (
        <div className='mt-14 relative'>
            <div className='flex items-center justify-between'>
                <h1 className="text-3xl font-bold mb-10 ml-12">Lista de Empleados</h1>
                <button className="bg-[#FEAF00] hover:bg-[#FE9C00] text-white font-bold py-2 px-2 rounded mr-12" onClick={() => setShowModal(true)}>
                    Añadir nuevo empleado
                </button>
            </div>
            
            <div className="overflow-x-auto flex justify-center mt-7 items-center relative ml-40px mr-40px">
                <table className="table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-7 py-2 text-left">Nombre</th>
                            <th className="px-7 py-2 text-left">Apellido</th>
                            <th className="px-7 py-2 text-left">Fecha de Nacimiento</th>
                            <th className="px-7 py-2 text-left">Dirección</th>
                            <th className="px-7 py-2 text-left">Número de Teléfono</th>
                            <th className="px-7 py-2 text-left">Correo Electrónico</th>
                            <th className="px-7 py-2 text-left">Fecha de Contratación</th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={employee.id} className={`bg-white rounded-lg mb-9 justify-start ${index !== 0 ? 'mt-15' : ''}`}>
                                <td className="px-7 py-4">{employee.first_name}</td>
                                <td className="px-7 py-4">{employee.last_name}</td>
                                <td className="px-7 py-4">{employee.date_of_birth}</td>
                                <td className="px-7 py-4">{employee.address}</td>
                                <td className="px-7 py-4">{employee.phone_number}</td>
                                <td className="px-7 py-4">{employee.email}</td>
                                <td className="px-7 py-4">{employee.hire_date}</td>
                                <td className="px-7 py-4">
                                <button
                                    className="text-blue-500 hover:text-blue-700 mr-4 focus:outline-none"
                                    onClick={() => {
                                        setSelectedEmployee(employee);
                                        setShowModalDos(true);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6 w-6">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" fill="#FEAF00" />
                                    </svg>
                                </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto ">
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="bg-white p-8 rounded shadow-md w-[450px]">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Nuevo Empleado</h2>
                        <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowModal(false)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={employeeData.first_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Nombre"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido:</label>
                        <input
                            id="last_name"
                            name="last_name"
                            value={employeeData.last_name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Apellido"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento:</label>
                        <input
                            id="date_of_birth"
                            name="date_of_birth"
                            type="date"
                            value={employeeData.date_of_birth}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="AAAA-MM-DD"
                        />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Direccion:</label>
                        <input
                            id="address"
                            name="address"
                            value={employeeData.address}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Direccion"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Telefono:</label>
                        <input
                            id="phone_number"
                            name="phone_number"
                            value={employeeData.phone_number}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Telefono"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electronico:</label>
                        <input
                            id="email"
                            name="email"
                            type='email'
                            value={employeeData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Correo electronico"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="hire_date" className="block text-sm font-medium text-gray-700">Fecha de Contratacion:</label>
                        <input
                            id="hire_date"
                            name="hire_date"
                            type="date"
                            value={employeeData.hire_date}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="AAAA-MM-DD"
                        />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="position_id" className="block text-sm font-medium text-gray-700">Cargo:</label>
                            <select
                                id="position_id"
                                name="position_id"
                                value={employeeData.position_id}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Seleccionar cargo</option>
                                {positions.map(position => (
                                    <option key={position.id} value={position.position_id}>{position.position_name}</option>
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


            {showModalDos && (
                <div className="fixed inset-0 z-10 ">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded shadow-md w-[800px] h-[700px] relative overflow-y-scroll overflow-x-hidden">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold"></h2>
                                <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {selectedEmployee && (
                                <div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-bold text-4xl">{selectedEmployee.first_name}</p>
                                            <p className="font-semibold text-2xl">{selectedEmployee.last_name}</p>
                                            <p>Empleado desde: {selectedEmployee.hire_date}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-2xl">{selectedPositionName}</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <div>
                                            <p>Correo electronico: {selectedEmployee.email}</p>
                                            <p>Telefono: {selectedEmployee.phone_number} </p>
                                            <p>Direccion: {selectedEmployee.address} </p>
                                        </div>
                                    </div>

                                </div>
                            )}
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <div className="flex flex-col justify-between h-400px w-16 border-e bg-white">
                                    <div >
                                        <div className="px-2">
                                            <ul className="space-y-1 border-t border-gray-100 pt-4">
                                                <li>
                                                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700" onClick={() => setShowModalJobs(true)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" fill="#FE9C00"/></svg>
                                                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Agregar Un Empleo</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700" onClick={() => setShowModalCapacitaciones(true)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-5"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3.9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" fill="#FE9C00"/></svg>
                                                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Agregar una capacitaciones</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700" onClick={() => handleEditPosition(selectedEmployee)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" fill="#FE9C00"/></svg>
                                                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Editar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                <a href="#" className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700" onClick={() => handleDeleteEmployee(selectedEmployee.employee_id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="#FE9C00"/></svg>
                                                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">Eliminar Empleado</span>
                                                </a>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-5">
                                <div className="rounded-lg bg-gray-200">
                                    <h2 className='font-semibold text-2xl text-center mt-2'>Capacitaciones</h2>
                                    {trainings
                                        .filter((training) => training.employee_id === selectedEmployee.employee_id)
                                        .map((training) => (
                                            <div key={training.id} className="bg-white rounded-lg p-3 mx-4 mt-3 mb-4">
                                                <h3 className="font-semibold">Capacitacion: {training.training_name}</h3>
                                                <p>Descripcion: {training.training_description}</p>
                                            </div>
                                        ))}
                                </div>
                                <div className="rounded-lg bg-gray-200 h-auto">
                                    <h2 className='font-semibold text-2xl text-center mt-2'>Historial Laboral</h2>
                                    {jobs
                                        .filter((job) => job.employee_id === selectedEmployee.employee_id)
                                        .map((job) => (
                                            <div key={job.id} className="bg-white rounded-lg p-3 mx-4 mt-3 mb-4">
                                                <h3 className="font-semibold">Cargo: {job.position}</h3>
                                                <p>Desde: {job.date_start}</p>
                                                <p>Hasta: {job.date_end}</p>
                                            </div>
                                        ))}
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            )}

            {showModalCapacitaciones && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded shadow-md w-[300px] h-auto relative">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Añadir una capacitacion al empleado</h2>
                                <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowModalCapacitaciones(false)}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmitCapacitacion}>
                                <div className="mb-4">
                                <label htmlFor="training_name" className="block text-sm font-medium text-gray-700">Nombre capacitacion:</label>
                                <input
                                    type="text"
                                    id="training_name"
                                    name="training_name"
                                    value={trainingData.training_name}
                                    onChange={handleChangeCapacitacion}
                                    placeholder='Nombre capacitacion'
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                </div>

                                <div className="mb-4">
                                <label htmlFor="training_description" className="block text-sm font-medium text-gray-700">Descripcion capacitacion:</label>
                                <input
                                    type="text"
                                    id="training_description"
                                    name="training_description"
                                    value={trainingData.training_description}
                                    onChange={handleChangeCapacitacion}
                                    placeholder='Descripcion capacitacion'
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
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

            {showModalJobs && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded shadow-md w-[300px] h-auto relative">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Añadir un cargo al empleado</h2>
                                <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowModalJobs(false)}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmitJob}>
                                <div className="mb-4">
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Nombre del Cargo:</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={jobData.position}
                                    onChange={handleChangeJob}
                                    placeholder='Nombre cargo'
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                </div>
                                <div className="mb-4">
                                <label htmlFor="date_start" className="block text-sm font-medium text-gray-700">Desde:</label>
                                <input
                                    type="date"
                                    id="date_start"
                                    name="date_start"
                                    value={jobData.date_start}
                                    onChange={handleChangeJob}
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                </div>
                                <div className="mb-4">
                                <label htmlFor="date_end" className="block text-sm font-medium text-gray-700">Hasta:</label>
                                <input
                                    type="date"
                                    id="date_end"
                                    name="date_end"
                                    value={jobData.date_end}
                                    onChange={handleChangeJob}
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
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
            {editingEmployee && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-8 rounded shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Editar Empleado</h2>
                                <button className="text-gray-500 hover:text-gray-700" onClick={() => setEditingEmployee(false)}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form onSubmit={handleSubmitEdit}>
                                <div className="mb-4">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre del Empleado:</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={employeeData.first_name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido del empleado:</label>
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        value={employeeData.last_name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Apellido"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento:</label>
                                    <input
                                        id="date_of_birth"
                                        name="date_of_birth"
                                        type='date'
                                        value={employeeData.date_of_birth}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Direccion:</label>
                                    <input
                                        id="address"
                                        name="address"
                                        value={employeeData.address}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Telefono:</label>
                                    <input
                                        id="phone_number"
                                        name="phone_number"
                                        value={employeeData.phone_number}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electronico:</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type='email'
                                        value={employeeData.email}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="hire_date" className="block text-sm font-medium text-gray-700">Fecha de Contratacion:</label>
                                    <input
                                        id="hire_date"
                                        name="hire_date"
                                        type='date'
                                        value={employeeData.hire_date}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="position_id" className="block text-sm font-medium text-gray-700">Cargo:</label>
                                    <select
                                        id="position_id"
                                        name="position_id"
                                        value={employeeData.position_id}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Seleccionar dependencia</option>
                                        {positions.map(position => (
                                            <option key={position.id} value={position.position_id}>{position.position_name}</option>
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


        </div>
    );
}

export default EmployeeView;
