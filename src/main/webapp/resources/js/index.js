jQuery(document).ready(function(){
	var option = GetURLParameter('select');
	if (!option) {
		option = "All types";
	}
	jQuery("#oppselect").val(option);
});

function GetURLParameter(sParam) {
	var sreturnParam = "";
	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
        	sreturnParam = sParameterName[1];
        	return sreturnParam;
        }
    }
    return sreturnParam;
}


function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function validateLogIn(){
	var valid = true;
	if (jQuery("#username").val() == ""){
		jQuery("#username_req").addClass("displayerror");
			valid = false;
	} else {
		jQuery("#username_req").removeClass("displayerror")
	}
	if (jQuery("#password").val()== ""){
		jQuery("#password_req").addClass("displayerror");
			valid = false;
	}else {
		jQuery("#password_req").removeClass("displayerror")
	}
	return valid;
}
function addOpportunityTypeToURL(link,list) {
	jQuery(link).attr('href', function() {
        return this.href + '?select=' + jQuery("#" + list).val();
    });
}