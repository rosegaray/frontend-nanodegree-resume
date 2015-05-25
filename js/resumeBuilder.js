var name = "Rose Garay";

    $("#main").append(name);
    var formattedName = HTMLheaderName.replace(%data%, name);
var formattedRole = HTMLheaderRole.replace(%data%, "Software Developper");


$("#header").append(formattedName);
$("#header").prepend(formattedRole);