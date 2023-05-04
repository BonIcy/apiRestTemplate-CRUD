document.addEventListener("DOMContentLoaded", getCampers);
async function getCampers(){
    let url="../DB/db.json"
    try{
        let result = await fetch(url)
        let data = await result.json()
        showCamper(data.campers)
       
    }catch(error){
        console.log(error);
    }
}
function showCamper(campers){
    let conta = document.querySelector(".table-group-divider")
    let plantilla = ""
    campers.forEach(camper=>{
     
        let {id, imagen, nombre, promedio, especialidad, detalle, direccion, celular, nivelIngles, nivelCAmpus} = camper

        plantilla +=`
        <tr>
        <th>${id}</th>
        <th><img src="img/${imagen}" class="cuenta"></th>
        <th>${nombre}</th>
        <th>${promedio}</th>
        <th>${especialidad}</th>
        <th>${detalle}</th>
        <th> 
        <button class="btn btn-primary btnDetail" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" dire="${direccion}" cel="${celular}" ingl="${nivelIngles}" camp="${nivelCAmpus}" nombre="${nombre} img="${imagen}"">Detalles</button>
        </th>
        </tr>`
    })
    conta.innerHTML = plantilla
}
