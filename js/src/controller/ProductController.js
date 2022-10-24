/**
 ALE IS TER
 10/22/2022
 6:17 PM
 pos_system

 ProductController
 */
$("#add_product_btn").click(function (event) {
//  productSave($('#next_product_id').text(), $('#product_name').val(), $('#product_category').val(), $('#product_qty').val(), $('#product_price').val());

  console.log(validateFunction( /^[A-z ]{5,20}$/,$('#product_name').val()));

  function validateResourceName() {
    //get posted resource name value
    var inputString = document.getElementById("resourceName").value;
    //should be in the word\word\word format
    var pattern=/[a-Z|/\\/|a-Z|/\\/|a-Z\s]/;

    //If the inputString is NOT a match
    if (!pattern.test(inputString)) {
      alert("not a match");
    }
    else
    {
      alert("match");
    }
  }
});
