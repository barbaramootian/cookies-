// const myNumbers = [1, 2, 12, 3, 14];
// // for loop 
// for (i =0; i < myNumbers.length; i++ ){
//     console.log(myNumbers[i]);
// }

// // for Each
// myNumbers.forEach((myNumbers, index, array) =>{
//     console.log(array);
// });
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", function(){
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})