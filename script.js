
var content = ["Software Developer", "Engineering Student"];
var index = 0;
var isDeleting = false;
var txt = '';

function typeWriter() {
  var speed = isDeleting ? 100 : 200; // Speed for deleting and typing
  var id = "typing-animation";
  var target = document.getElementById(id);

  if (!isDeleting && txt.length == content[index].length) {
    isDeleting = true;
    setTimeout(typeWriter, 2000); // Wait for 2 seconds before start deleting
  } else if (isDeleting && txt.length == 0) {
    isDeleting = false;
    index = index ^ 1; // Toggle between 0 and 1
    setTimeout(typeWriter, 500); // Wait for 0.5 seconds before start typing
  } else {
    txt = isDeleting
      ? content[index].substring(0, txt.length - 1)
      : content[index].substring(0, txt.length + 1);
    target.textContent = txt;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter();
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
