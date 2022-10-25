/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */


// product inputs validate

let productNameStatus=true;
let productCategoryStatus=true;
let productQtyStatus=true;
let productPriceStatus=true;

    // product name

$('#product_name').keyup(function () {
 productNameStatus= textValidator(/^[a-zA-Z0-9 ]*$/,$('#product_name').val(),document.getElementById("product_name_label"),$('#product_name_label'));
});

    // product category

$('#product_category').keyup(function () {
  productCategoryStatus=textValidator(/^[a-zA-Z0-9 ]{0,20}$/,$('#product_category').val(),document.getElementById("product_category_label"),$('#product_category_label'));
});

    // product qty

$('#product_qty').keyup(function () {
  productQtyStatus=textValidator(/^[0-9]{0,4}$/,$('#product_qty').val(),document.getElementById("product_qty_label"),$('#product_qty_label'));
});

    // product price

$('#product_price').keyup(function () {
  productPriceStatus=textValidator(/^[0-9]{0,4}.[0-9]{2}$/,$('#product_price').val(),document.getElementById("product_price_label"),$('#product_price_label'));
});

$("#add_product_btn").click(function (event) {
//  productSave($('#next_product_id').text(), $('#product_name').val(), $('#product_category').val(), $('#product_qty').val(), $('#product_price').val());
  if (productNameStatus){

  }else {

  }
});


