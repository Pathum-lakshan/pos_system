$('#submit_btn').click(function () {
  $(document).ready(function () {
    $.ajax({
      url:"http://localhost:8080/api/v1/user/login",
      type:"GET",
      data :{
        username:$('#username').val(),
        password:$('#password').val()
      },
      success:function (user){
       if (user.id===0){
         $('#toast_warning_body').text("username or password incorrect");
         new bootstrap.Toast($('#dangerToast')).show();
       }else {
         document.getElementById('login').style.display = "none";
         document.getElementById('system').style.display = "block";
       }
      },
      error:function (){
        $('#toast_warning_body').text("some error with login api from server");
        new bootstrap.Toast($('#dangerToast')).show();
      }
    })
  })
});

$('#order_btn_dashboard').click(function () {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("customer").style.display = "none";
  document.getElementById("order").style.display = "block";
});
$('#dashboard_btn_dashboard').click(function () {
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("product").style.display = "none";
  document.getElementById("customer").style.display = "none";
  document.getElementById("order").style.display = "none";
});
$('#product_btn_dashboard').click(function () {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("product").style.display = "block";
  document.getElementById("customer").style.display = "none";
  document.getElementById("order").style.display = "none";
});
$('#customer_btn_dashboard').click(function () {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("customer").style.display = "block";
  document.getElementById("order").style.display = "none";
});


