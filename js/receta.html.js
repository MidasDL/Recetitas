$(async function(){
    M.AutoInit();

    //localizeDatePickers("dteFecha")
    
    let dataRecetas = await $.get("https://pruebarest-4f5c3.firebaseio.com/Recetas.json")
    console.log(dataRecetas)

    obtenerReceta = function(RecetaID){

        itemData = dataRecetas.find((r)=>r.id==RecetaID)

        return itemData
        //Si no encuentra el servicio redirecciona a la pagina de listado
        //window.location.replace('listado.html')
    }
    
    cargarDatos = function(){
        var RecetaID = urlParams.id || 0
        itemData = obtenerReceta(RecetaID)
        var html = $("#content").html()
        
        itemData.Ingredientes = itemData.Ingredientes.join("<br/>")
        for (var property in itemData){
            var sVal = new RegExp("{{" + property + "}}", "g")
            html = html.replace(sVal, itemData[property]);
        }
        
        $("#content").html(html)
        
        
        
    }
    
    cargarDatos();  
})