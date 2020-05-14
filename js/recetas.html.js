$(function(){
    M.AutoInit();
    


    abrirReceta = function(id){
        window.location.href = "receta.html?id=" + id
    }
    
    cargarListado = async function(){
        $("#main_list").empty()
        
        //var dataRecetas = sample_data /// Cambiar para produccion
        let dataRecetas = await $.get("https://pruebarest-4f5c3.firebaseio.com/Recetas.json")
        
        
        $.get('templates/listItem_receta.html', function(original_html){
            for(itemData of dataRecetas){
                var html = original_html
                for (var property in itemData){
                    var sVal = new RegExp("{{" + property + "}}", "g")
                    html = html.replace(sVal, itemData[property]);
                }

                $("#main_list").append(html)
            }
        })
    }
    
    cargarListado();  
})