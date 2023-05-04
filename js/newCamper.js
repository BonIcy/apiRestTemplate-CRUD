import { newCamper } from "./API.js";
let formulario = document.querySelector("#formulario")
formulario.addEventListener(`submit`, validateCamper)
function validateCamper(e){
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let promedio = document.querySelector("#promedio").value;
    let edad = document.querySelector("#edad").value;
    let nivelIngles = document.querySelector("#nivelIngles").value;
    let especialidad = document.querySelector("#especialidad").value;
    let nivelCampus = document.querySelector("#nivelCampus").value;
    let expertoTecnologia = document.querySelector("#expertoTecnologia").value;

    //literal objects enhancement
    let camper = {
            nombre,
            promedio,//no son necesarios los 2 puntos ya que tienen el mismo nombre 
            edad,
            nivelIngles,
            especialidad,
            nivelCampus,
            expertoTecnologia
        }
       if (validate(camper)){
        alert("Todos los campos deben ser llenados")
        return;
       }
      newCamper(camper);
      
}
function validate(obj){
    return !Object.values(obj).every(element => element!=="")
}