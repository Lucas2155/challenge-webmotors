$("button").click(function(){
    $.get("http://localhost:3030/getNumber", function(data, status){
      console.log(data)
    });
  });