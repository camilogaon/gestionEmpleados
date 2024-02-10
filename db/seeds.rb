# db/seeds.rb

Dependence.create(dependence_name: 'Dependencia de Recursos Humanos', dependence_description: 'Encargada de la gestión del personal y desarrollo organizacional.')
Dependence.create(dependence_name: 'Departamento de Finanzas y Contabilidad', dependence_description: 'Responsable de la gestión financiera y contable de la empresa')
Dependence.create(dependence_name: 'Unidad de Tecnología de la Información', dependence_description: 'Encargada de la infraestructura tecnológica y el desarrollo de software.')
Dependence.create(dependence_name: 'Departamento de Marketing y Publicidad', dependence_description: 'Responsable de promocionar los productos y servicios de la empresa.')
Dependence.create(dependence_name: 'Área de Producción y Operaciones:', dependence_description: ' Encargada de la producción y operaciones diarias de la empresa.')
Dependence.create(dependence_name: 'Oficina de Atención al Cliente', dependence_description: 'Responsable de brindar soporte y atención al cliente.')


# Dependencia de Recursos Humanos
Position.create(position_name: 'Gerente de Recursos Humanos', position_description: 'Encargado de dirigir las actividades del departamento de recursos humanos.', dependence_id: 1)
Position.create(position_name: 'Especialista en Desarrollo Organizacional', position_description: 'Responsable de diseñar e implementar programas de desarrollo organizacional.', dependence_id: 1)
Position.create(position_name: 'Analista de Recursos Humanos', position_description: 'Encargado de analizar y gestionar el reclutamiento y selección de personal.', dependence_id: 1)
Position.create(position_name: 'Asistente de Nómina', position_description: 'Responsable de procesar la nómina y administrar los beneficios del personal.', dependence_id: 1)
Position.create(position_name: 'Coordinador de Capacitación', position_description: 'Encargado de coordinar y ejecutar programas de capacitación y desarrollo del personal.', dependence_id: 1)

# Departamento de Finanzas y Contabilidad
Position.create(position_name: 'Contador General', position_description: 'Encargado de registrar y analizar las transacciones financieras de la empresa.', dependence_id: 2)
Position.create(position_name: 'Analista de Costos', position_description: 'Responsable de analizar y controlar los costos de producción y operación.', dependence_id: 2)
Position.create(position_name: 'Especialista en Impuestos', position_description: 'Encargado de calcular y presentar los impuestos de la empresa.', dependence_id: 2)
Position.create(position_name: 'Auditor Interno', position_description: 'Responsable de realizar auditorías internas para garantizar el cumplimiento de normas y políticas.', dependence_id: 2)
Position.create(position_name: 'Analista Financiero', position_description: 'Encargado de realizar análisis financieros y proyecciones para apoyar la toma de decisiones.', dependence_id: 2)

# Unidad de Tecnología de la Información
Position.create(position_name: 'Ingeniero de Software', position_description: 'Responsable del desarrollo y mantenimiento de aplicaciones y sistemas informáticos.', dependence_id: 3)
Position.create(position_name: 'Administrador de Redes', position_description: 'Encargado de gestionar y mantener la infraestructura de red de la empresa.', dependence_id: 3)
Position.create(position_name: 'Especialista en Seguridad Informática', position_description: 'Responsable de proteger los sistemas de información de la empresa contra amenazas cibernéticas.', dependence_id: 3)
Position.create(position_name: 'Técnico de Soporte', position_description: 'Encargado de brindar soporte técnico a los usuarios internos de la empresa.', dependence_id: 3)
Position.create(position_name: 'Analista de Sistemas', position_description: 'Responsable de analizar requisitos y diseñar soluciones de software para satisfacer las necesidades empresariales.', dependence_id: 3)

# Departamento de Marketing y Publicidad
Position.create(position_name: 'Especialista en Redes Sociales', position_description: 'Encargado de gestionar y crear contenido para las redes sociales de la empresa.', dependence_id: 4)
Position.create(position_name: 'Analista de Mercado', position_description: 'Responsable de analizar el mercado y la competencia para identificar oportunidades de negocio.', dependence_id: 4)
Position.create(position_name: 'Diseñador Gráfico', position_description: 'Encargado de diseñar materiales gráficos para campañas publicitarias y promociones.', dependence_id: 4)
Position.create(position_name: 'Coordinador de Eventos', position_description: 'Responsable de planificar y coordinar eventos promocionales y lanzamientos de productos.', dependence_id: 4)
Position.create(position_name: 'Ejecutivo de Cuentas', position_description: 'Encargado de gestionar relaciones con clientes y desarrollar estrategias de ventas.', dependence_id: 4)

# Área de Producción y Operaciones
Position.create(position_name: 'Supervisor de Calidad', position_description: 'Encargado de garantizar la calidad de los productos y procesos de producción.', dependence_id: 5)
Position.create(position_name: 'Ingeniero de Procesos', position_description: 'Responsable de diseñar y mejorar los procesos de producción para aumentar la eficiencia.', dependence_id: 5)
Position.create(position_name: 'Operador de Maquinaria', position_description: 'Encargado de operar maquinaria y equipos en la línea de producción.', dependence_id: 5)
Position.create(position_name: 'Almacenero', position_description: 'Responsable de gestionar el inventario y almacenamiento de materiales y productos.', dependence_id: 5)
Position.create(position_name: 'Coordinador de Producción', position_description: 'Encargado de coordinar las actividades de producción para cumplir con los objetivos establecidos.', dependence_id: 5)

# Oficina de Atención al Cliente
Position.create(position_name: 'Ejecutivo de Ventas', position_description: 'Encargado de atender las consultas y pedidos de los clientes y cerrar ventas.', dependence_id: 6)
Position.create(position_name: 'Representante de Atención al Cliente', position_description: 'Responsable de resolver consultas y reclamos de los clientes de manera eficiente.', dependence_id: 6)
Position.create(position_name: 'Coordinador de Soporte Técnico', position_description: 'Encargado de coordinar y asignar tareas al equipo de soporte técnico.', dependence_id: 6)
Position.create(position_name: 'Asesor de Ventas', position_description: 'Responsable de asesorar a los clientes sobre productos y servicios de la empresa.', dependence_id: 6)
Position.create(position_name: 'Gerente de Servicio al Cliente', position_description: 'Responsable de liderar y coordinar el equipo de atención al cliente.', dependence_id: 6)


#Empleados 

Employee.create(first_name: 'Juan', last_name: 'Pérez', date_of_birth: '1990-05-15', address: 'Calle 123, Ciudad', phone_number: '123456789', email: 'juan@example.com', hire_date: '2020-01-15', position_id: 1 )
Employee.create(first_name: 'María', last_name: 'González', date_of_birth: '1992-07-20', address: 'Av. Principal 456, Ciudad', phone_number: '987654321', email: 'maria@example.com', hire_date: '2019-11-20', position_id: 2 )
Employee.create( first_name: 'Carlos', last_name: 'López', date_of_birth: '1985-03-10', address: 'Calle Secundaria 789, Ciudad', phone_number: '555444333', email: 'carlos@example.com', hire_date: '2021-03-05', position_id: 3)
Employee.create(first_name: 'Ana', last_name: 'Martínez', date_of_birth: '1988-11-25', address: 'Av. Central 789, Ciudad', phone_number: '111222333', email: 'ana@example.com', hire_date: '2020-05-10', position_id: 4 )
Employee.create(first_name: 'Pedro', last_name: 'Ruiz', date_of_birth: '1995-02-28', address: 'Calle Principal 456, Ciudad', phone_number: '777888999', email: 'pedro@example.com', hire_date: '2022-02-15', position_id: 5 )
Employee.create(first_name: 'Laura', last_name: 'Sánchez', date_of_birth: '1993-09-18', address: 'Calle Principal 789, Ciudad', phone_number: '999888777', email: 'laura@example.com', hire_date: '2021-10-20', position_id: 6 )
Employee.create(first_name: 'Diego', last_name: 'Hernández', date_of_birth: '1991-04-05', address: 'Av. Central 789, Ciudad', phone_number: '333222111', email: 'diego@example.com', hire_date: '2020-09-10', position_id: 7)
Employee.create(first_name: 'Sofía', last_name: 'Díaz', date_of_birth: '1994-12-12', address: 'Calle Secundaria 456, Ciudad', phone_number: '444555666', email: 'sofia@example.com', hire_date: '2022-01-25', position_id: 8 )
Employee.create(first_name: 'Martín', last_name: 'Gómez', date_of_birth: '1989-08-30', address: 'Av. Principal 123, Ciudad', phone_number: '666777888', email: 'martin@example.com', hire_date: '2021-05-15', position_id: 9)
Employee.create(first_name: 'Lucía', last_name: 'Muñoz', date_of_birth: '1990-11-08', address: 'Calle Secundaria 789, Ciudad', phone_number: '888999000', email: 'lucia@example.com', hire_date: '2020-12-20', position_id: 10)
Employee.create(first_name: 'Javier', last_name: 'Romero', date_of_birth: '1993-06-25', address: 'Av. Central 456, Ciudad', phone_number: '999000111', email: 'javier@example.com', hire_date: '2022-03-05', position_id: 11)
Employee.create(first_name: 'Valentina', last_name: 'Suárez', date_of_birth: '1987-02-14', address: 'Calle Principal 789, Ciudad', phone_number: '222333444', email: 'valentina@example.com', hire_date: '2021-11-10', position_id: 12)
Employee.create(first_name: 'Mateo', last_name: 'Torres', date_of_birth: '1994-10-20', address: 'Av. Principal 123, Ciudad', phone_number: '777666555', email: 'mateo@example.com', hire_date: '2020-08-15', position_id: 13)
Employee.create(first_name: 'Camila', last_name: 'López', date_of_birth: '1988-07-07', address: 'Calle Secundaria 789, Ciudad', phone_number: '888777666', email: 'camila@example.com', hire_date: '2022-05-20', position_id: 14)
Employee.create(first_name: 'Nicolás', last_name: 'García', date_of_birth: '1992-01-30', address: 'Av. Central 456, Ciudad', phone_number: '333444555', email: 'nicolas@example.com', hire_date: '2021-12-25', position_id: 15)
Employee.create( first_name: 'Isabella', last_name: 'Pérez', date_of_birth: '1989-05-12', address: 'Calle Principal 789, Ciudad', phone_number: '555444333', email: 'isabella@example.com', hire_date: '2020-10-10', position_id: 16)
Employee.create(first_name: 'Daniel', last_name: 'Martínez', date_of_birth: '1993-09-18', address: 'Av. Principal 123, Ciudad', phone_number: '111222333', email: 'daniel@example.com', hire_date: '2022-07-15', position_id: 17)
Employee.create(first_name: 'Victoria', last_name: 'Sánchez', date_of_birth: '1995-03-05', address: 'Calle Secundaria 789, Ciudad', phone_number: '666777888', email: 'victoria@example.com', hire_date: '2021-04-20', position_id: 18)
Employee.create(first_name: 'Alejandro', last_name: 'Hernández', date_of_birth: '1991-08-10', address: 'Av. Central 456, Ciudad', phone_number: '999888777', email: 'alejandro@example.com', hire_date: '2020-11-25', position_id: 19)
Employee.create(first_name: 'Emma', last_name: 'Gómez', date_of_birth: '1986-12-28', address: 'Calle Principal 789, Ciudad', phone_number: '333222111', email: 'emma@example.com', hire_date: '2022-08-15', position_id: 20)
Employee.create(first_name: 'David', last_name: 'Díaz', date_of_birth: '1990-06-15', address: 'Av. Principal 123, Ciudad', phone_number: '222333444', email: 'david@example.com', hire_date: '2021-01-20', position_id: 21)
Employee.create(first_name: 'Sara', last_name: 'Torres', date_of_birth: '1994-02-28', address: 'Calle Secundaria 789, Ciudad', phone_number: '777888999', email: 'sara@example.com', hire_date: '2020-12-05', position_id: 22)
Employee.create(first_name: 'Samuel', last_name: 'López', date_of_birth: '1988-09-18', address: 'Av. Central 456, Ciudad', phone_number: '111222333', email: 'samuel@example.com', hire_date: '2022-09-10', position_id: 23)
Employee.create(first_name: 'Julia', last_name: 'García', date_of_birth: '1992-04-20', address: 'Calle Principal 789, Ciudad', phone_number: '555444333', email: 'julia@example.com', hire_date: '2021-02-15', position_id: 24)
Employee.create(first_name: 'Matías', last_name: 'Martínez', date_of_birth: '1987-10-18', address: 'Av. Principal 123, Ciudad', phone_number: '999888777', email: 'matias@example.com', hire_date: '2020-12-20', position_id: 25 )
Employee.create(first_name: 'Valeria', last_name: 'Sánchez', date_of_birth: '1991-06-25', address: 'Calle Secundaria 789, Ciudad', phone_number: '333222111', email: 'valeria@example.com', hire_date: '2022-10-05', position_id: 26)
Employee.create(first_name: 'Diego', last_name: 'Hernández', date_of_birth: '1996-01-30', address: 'Av. Central 456, Ciudad', phone_number: '777888999', email: 'diego@example.com', hire_date: '2021-03-10', position_id: 27)
Employee.create(first_name: 'Lucía', last_name: 'Gómez', date_of_birth: '1993-08-12', address: 'Calle Principal 789, Ciudad', phone_number: '111222333', email: 'lucia@example.com', hire_date: '2020-07-15', position_id: 28)
Employee.create(first_name: 'Javier', last_name: 'Díaz', date_of_birth: '1988-04-05', address: 'Av. Central 123, Ciudad', phone_number: '555666777', email: 'javier@example.com', hire_date: '2022-11-20', position_id: 29)
Employee.create(first_name: 'Valentina', last_name: 'Torres', date_of_birth: '1990-12-20', address: 'Calle Secundaria 789, Ciudad', phone_number: '999000111', email: 'valentina@example.com', hire_date: '2021-08-25', position_id: 30)


# Datos de capacitaciones
trainings_data = [
    { training_name: 'Curso de Liderazgo', training_description: 'Capacitación en habilidades de liderazgo y gestión de equipos.' },
    { training_name: 'Taller de Comunicación Efectiva', training_description: 'Capacitación en técnicas de comunicación para mejorar la efectividad en el trabajo.' },
    { training_name: 'Curso de Desarrollo Profesional', training_description: 'Capacitación en desarrollo profesional y crecimiento personal.' },
    { training_name: 'Seminario de Ventas', training_description: 'Capacitación en técnicas de ventas y estrategias de negociación.' },
    { training_name: 'Taller de Resolución de Problemas', training_description: 'Capacitación en técnicas para identificar y resolver problemas de manera efectiva.' },
    { training_name: 'Curso de Programación Avanzada', training_description: 'Capacitación en programación orientada a objetos y desarrollo de aplicaciones avanzadas.' },
    { training_name: 'Seminario de Marketing Digital', training_description: 'Capacitación en estrategias de marketing en línea y publicidad digital.' },
    { training_name: 'Taller de Gestión del Tiempo', training_description: 'Capacitación en técnicas de gestión del tiempo y productividad personal.' },
    { training_name: 'Curso de Gestión de Proyectos', training_description: 'Capacitación en metodologías y herramientas para la gestión efectiva de proyectos.' },
    { training_name: 'Seminario de Finanzas Personales', training_description: 'Capacitación en planificación financiera personal y gestión de inversiones.' }
]

# Datos de empleos (historial laboral)
jobs_data = [
    { position: 'Analista de Ventas', date_start: '2018-03-15', date_end: '2019-06-20' },
    { position: 'Coordinador de Marketing', date_start: '2019-08-01', date_end: '2020-12-31' },
    { position: 'Gerente de Operaciones', date_start: '2021-02-10', date_end: '2022-04-30' },
    { position: 'Especialista en Recursos Humanos', date_start: '2022-06-15', date_end: '2023-09-20' },
    { position: 'Ingeniero de Proyectos', date_start: '2023-11-01', date_end: '2023-03-31' },
    { position: 'Analista de Datos', date_start: '2017-09-10', date_end: '2018-12-31' },
    { position: 'Especialista en Marketing Digital', date_start: '2019-02-15', date_end: '2020-06-30' },
    { position: 'Desarrollador Web', date_start: '2020-08-10', date_end: '2021-10-15' },
    { position: 'Consultor Financiero', date_start: '2021-11-20', date_end: '2023-03-31' },
    { position: 'Analista de Calidad', date_start: '2023-05-01', date_end: '2023-03-31' }
    ]

    Employee.all.each_with_index do |employee, index|
        # Asignar capacitación
        training_data = trainings_data[index % trainings_data.length]
        employee.trainings.create(training_data)

        # Asignar empleo (historial laboral)
        job_data = jobs_data[index % jobs_data.length]
        employee.jobs.create(job_data)
    end


# Mensaje de confirmación
puts "Datos de muestra creados exitosamente."
