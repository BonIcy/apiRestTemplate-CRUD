let url = "http://localhost:4001/campers"
export let getCampers = async () =>{
    try{
        let result = await fetch(url);
        let campers = await result.json()
        return campers
    }catch(error){
        console.log(error);
    }
}

 //insertar nuevo camper en REST API (HTTP methods: GET, POST)
 export let newCamper = async (camper) =>{
     try{
         await fetch(url, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(camper)
         });
         window.location.href = "index.html"
     }catch(error){
         console.log(error);
     }
 }

 //delete campers 
 export let deleteCamper = async (id) =>{
     try{
         await fetch(url + "/" + id, { //con backtips: '${url}/${id}',
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json'
             }
         });
         window.location.href = "index.html"
     }catch(error){
         console.log(error);
     }
 }