/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */

// product inputs validate

    // product name

let productNameStatus=true;
let productCategoryStatus=true;
let productQtyStatus=true;
let productPriceStatus=true;

$('#product_name').keyup(function () {
 productNameStatus= validator(/^[a-zA-Z0-9 ]*$/,$('#product_name').val(),document.getElementById("product_name_label"),$('#product_name_label'));
});

    // product category


let productCategoryIsValidate=true;

$('#product_category').keyup(function () {
  const validRegex = /^[a-zA-Z]{0,20}$/;
  let productCategory = $('#product_category').val();
  if (productCategory.match(validRegex)) {
    document.getElementById("product_name_label").style.color = "#00CB39";
    productNameIsValidate=true;
  } else {
    document.getElementById("product_name_label").style.color = "red";
    productNameIsValidate=false;
  }
  if (productCategory===""){
    $("#product_name_label").removeAttr("style");
  }

});

function validator(regex,value,element,normalize) {
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


$("#add_product_btn").click(function (event) {
//  productSave($('#next_product_id').text(), $('#product_name').val(), $('#product_category').val(), $('#product_qty').val(), $('#product_price').val());

  //console.log(validateFunction( /^[A-z ]{5,20}$/,));

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ($('#product_name').val().match(validRegex)) {
    console.log("Valid email address!");
  } else {
   console.log("Invalid email address!");
  }

});

