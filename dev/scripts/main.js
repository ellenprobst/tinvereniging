// var button= document.querySelector('button');
// var side= document.getElementById('content-side');
// button.addEventListener('click', function(){
// 	side.style.transform= 'translateX(0)';
// 	side.style.display= 'block';
// }
// 	)


window.addEventListener("scroll", function(e) {
	var scroll = this.scrollY;
	var navigation = document.getElementById("navigation");
  if (scroll > 147) {
    navigation.classList.add("slide");

  } else {
    navigation.classList.remove("slide");
  }
  
});
// fix visibilty hidden