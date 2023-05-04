
import { getCampers, deleteCamper } from "./API.js";

//1. 
(function (){
    let lista = document.querySelector(".lista")

    document.addEventListener("DOMContentLoaded", showCampers);
    lista.addEventListener('click', confirmDelete);
    async function showCampers(){
        /* console.log("aea"); */
        let campers = await getCampers();
        console.log(campers);
  
    let tbody = document.querySelector(".tbody")
    campers.forEach((camper)=>{
        let {imagen, nombre, edad, promedio, nivelCAmpus, nivelIngles, especialidad, expertoTecnologia, detalle, direccion, celular, id} = camper
        let rows = document.createElement("tr")
        rows.innerHTML = `
        <th scope="row">${id}</th>
        <td><img class="cuenta"src="../img/${imagen}"></td>
        <td>${nombre}</td>
        <td>${promedio}</td>
        <td>${especialidad}</td>
        <td>${expertoTecnologia}</td>
        <td><button class="btn btn-warning">Detalle</button></td>
        <td><button type="button" data-camper="${id}" class="btn btn-danger delete">Fuera</button></td>
        `;
        tbody.appendChild(rows)
    })
}
function confirmDelete(e){
    if(e.target.classList.contains(`delete`)){
        let camper = e.target.dataset.camper; 
        let camperID = parseInt(e.target.dataset.camper);
        let confirmar =  confirm(`¿Desea eliminar al camper?`)
        if(confirmar){
           deleteCamper(camperID)
        }
    }
}
})();