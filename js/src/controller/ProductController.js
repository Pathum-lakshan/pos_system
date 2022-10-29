/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */


// product inputs validate

let productNameStatus=false;
let productCategoryStatus=false;
let productQtyStatus=false;
let productPriceStatus=false;

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



function saveProduct() {
  axios.post('http://localhost:8080/api/v1/product/save', {
    name: $('#product_name').val(),
    category: $('#product_category').val(),
    qty: $('#product_qty').val(),
    price: $('#product_price').val()
  })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
}
$("#add_product_btn").click(function (event) {
  if (productNameStatus){
      if (productCategoryStatus){
          if (productQtyStatus){
              if (productPriceStatus){
                saveProduct();
              }else {
                warningToast("please check product price again ...");
              }
          }else {
            warningToast("please check product qty again ...");
          }
      }else {
        warningToast("please check product category again ...");
      }
  }else {
    warningToast("please check product name again ...");
  }
});


