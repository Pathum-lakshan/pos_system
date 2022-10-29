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


function product() {
  return  {
    product_id: $('#next_product_id').text(),
    name: $('#product_name').val(),
    category: $('#product_category').val(),
    qty: $('#product_qty').val(),
    price: $('#product_price').val()
  }

}
function saveProduct() {
  console.log(product())
  $(document).ready(function () {
    $.ajax({
      url:"http://localhost:8080/api/v1/product/save",
      type:"GET",
      data : product(),
      success:function (status){
        if (status){
          $('#toast_success_body').text("Successfully save product");
          new bootstrap.Toast($('#successToast')).show();
        }else {
          $('#toast_warning_body').text("UnSuccessfully save product");
          new bootstrap.Toast($('#dangerToast')).show();
        }
      },
      error:function (){
        $('#toast_warning_body').text("some error with product save api from server");
        new bootstrap.Toast($('#dangerToast')).show();
      }
    })
  });
}
$("#add_product_btn").click(function (event) {
//  productSave($('#next_product_id').text(), $('#product_name').val(), $('#product_category').val(), $('#product_qty').val(), $('#product_price').val());
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


