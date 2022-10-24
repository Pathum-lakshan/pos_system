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

    //get posted resource name value
    const inputString = $('#product_name').val();
    //should be in the word\word\word format
    const pattern =/^ [0 - 9]{0,10}$/;
console.log(pattern.test(inputString))
    //If the inputString is NOT a match
    if (!pattern.test(inputString)) {
     console.log("kk")
    }
    else
    {
console.log("ss")
    }

});
