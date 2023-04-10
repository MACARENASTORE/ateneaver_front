// 1.Conectarnos a la Ruta
// 2.Recorrer el json 
// 2.1 Agregar una fila en la tabla por cada objeto retornado en el JSON


import EspecieAPI from "./EspecieAPI.js";

const miEspecie=new EspecieAPI();

miEspecie.listarEspecies();