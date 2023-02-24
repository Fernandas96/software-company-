//Login page start//

document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});

//Login page end//

//password visual start//
function myFunction() {
  var myInput = document.getElementById("myInput");
    if (myInput.type === "password") {
      myInput.type = "text";
    } else {
      myInput.type = "password";
    }
  }
  function myFunction2() {
    var myInput2 = document.getElementById("myInput2");
    if (myInput2.type === "password") {
      myInput2.type = "text";
    } else {
      myInput2.type = "password";
    }
  }
 //password visual end// 
 
 //clipboard start//

 let textInput = document.getElementById("textInput");
 let copyButton = document.getElementById("copyButton");

 copyButton.addEventListener('click', function(){
       textInput.select();
       navigator.clipboard.writeText(textInput.value);
       swal("Success!","Data have been copied");
 });

 //clipboard end//
