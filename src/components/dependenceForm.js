import React, { useState } from 'react';
import axios from 'axios';

function DependenceForm() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [dependenceData, setDependenceData] = useState({
    dependence_name: '',
    dependence_description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDependenceData({
      ...dependenceData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/dependences', dependenceData);
      alert('Dependence created successfully!');
      // Reset form after submission
      setDependenceData({
        dependence_name: '',
        dependence_description: ''
      });
      // Cerrar el modal después de enviar el formulario
      setShowModal(false);
    } catch (error) {
      console.error('Error creating dependence:', error);
      alert('Failed to create dependence. Please try again.');
    }
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Dependence Form</h2>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowModal(false)}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="dependence_name" className="block text-sm font-medium text-gray-700">Dependence Name:</label>
                  <input
                    type="text"
                    id="dependence_name"
                    name="dependence_name"
                    value={dependenceData.dependence_name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="dependence_description" className="block text-sm font-medium text-gray-700">Dependence Description:</label>
                  <textarea
                    id="dependence_description"
                    name="dependence_description"
                    value={dependenceData.dependence_description}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Dependence description"
                  />
                </div>
                <div className="text-right">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
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

export default DependenceForm;
