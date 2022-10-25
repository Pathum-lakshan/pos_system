/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */

// product inputs validate

    // product name

let productNameIsValidate=true;

$('#product_name').keyup(function () {
  const validRegex = /^[a-zA-Z0-9 ]*$/;
  let productName = $('#product_name').val();
  if (productName.match(validRegex)) {
    document.getElementById("product_name_label").style.color = "#00CB39";
    productNameIsValidate=true;
  } else {
    document.getElementById("product_name_label").style.color = "red";
    productNameIsValidate=false;
  }
  if (productName===""){
    $("#product_name_label").removeAttr("style");
  }
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
  if (productName===""){
    $("#product_name_label").removeAttr("style");
  }


});

function validator(regex,value,element) {
  if (value.match(regex)){}
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

