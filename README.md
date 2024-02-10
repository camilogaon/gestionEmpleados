
*****************************
Gestion de Empleados
*****************************


## Repositorio

La aplicacion esta dividida en 2 ramas el backend el cual fue desarrollado en ruby on rails y el frontend que fue desarrollado en react

## Instalación

Asegurarse que el backend este ejecutandose en el puerto 3000
y que es frontend se este ejecutando en el puerto 3001

Asi mismo en el archivo database.yml modificar la configuracion de la base de datos mas exactamente estos datos

  username: postgres
  host: localhost
  password: 1302
  port: 5432

luego ejecutar los siguientes comandos en la parte del backend

Para crear la base de datos
rails db:create

Para ejecutar las migraciones de la base de datos
rails db:migrate

Para poblar las bases de datos
rails db:seed


De esta manera se colocara en funcionamiento la aplicacion, la cual cuenta con opciones de visualizar, agregar editar y eliminar diferentes atrubutos de la base de datos

