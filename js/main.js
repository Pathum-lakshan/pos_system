$('#submit_btn').click(function () {
  $(document).ready(function () {
    $.ajax({
      url:"http://localhost:8080/api/v1/user/login",
      type:"GET",
      data :{
        username:$('#username').val(),
        password:$('#password').val()
      },
      success:function (result){
        console.log(result)
      },
      error:function (err){
        console.log(err)
      }
    })
  })
});



