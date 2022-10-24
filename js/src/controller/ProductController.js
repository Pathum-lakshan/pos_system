/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */
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
