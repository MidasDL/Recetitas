function localizeDatePickers(elem){
    var dateInstance = M.Datepicker.getInstance($("#"+elem));
        dateInstance.i18n.months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre"
        ]
}

function getDateValue(d){
    var regex = /\/Date\(([0-9]+)\)\//g
    var rgxResult = regex.exec(d)
    if (rgxResult){
        d = new Date(Number(rgxResult[1]))
        
        var monthNames = ['Ene','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
        
        return (d.getDate() + '/' + monthNames[d.getMonth() - 1] + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
    }
    return d
}

var urlParams;
$(function() { 
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})