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
      error:function (err){
        $('#toast_warning_body').text("some error with login api from server");
        new bootstrap.Toast($('#dangerToast')).show();
      }
    })
  })
});



