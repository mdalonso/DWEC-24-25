import {config} from 'dotenv';
config(); //leer las variables de entorno

//para leer las variables de entorno,
//se utiliza el objeto process de node.js
//utilizar la propiedad env, donde se almacena todas las variables del dipositivo
// console.log(process.env.PORT);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PORT);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_DATABASE);

/**
 * Lo correcto sería:
 * Esto permite asignar a cada variable el valor contenido en process.env y en caso
 * de que no exista, un valor por defecto.
 */
//En lugar de utilizar directamente los valores almacenados en process.env, utilizaremos los valores
//de estas constantes para evitar problemas en el caso de que haya alguna variable de entorno sin definir
export const PORT=process.env.PORT || 3000
export const DB_PORT=process.env.DB_PORT || 3306
export const DB_HOST=process.env.DB_HOST || 'localhost'
export const DB_USER=process.env.DB_USER || 'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || ''
export const DB_DATABASE=process.env.DB_DATABASE || 'empresadb'