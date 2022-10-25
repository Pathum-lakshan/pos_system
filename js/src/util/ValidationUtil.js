/**
 ALE IS TER
 10/22/2022
 8:14 PM
 pos_system

 ValidationUtil
 */


function textValidator(regex, value, element, normalize) {
  let status;
  if (value.match(regex)){
    element.style.color = "#00CB39";
    status=true;
  }else {
    element.style.color = "red";
    status=false;
  }
  if (value===""){
    normalize.removeAttr("style");
    status=false;
  }
  return status;
}

function warningToast(bodyText) {
  $('#toast_warning_body').text(bodyText);
  new bootstrap.Toast($('#dangerToast')).show();
}
