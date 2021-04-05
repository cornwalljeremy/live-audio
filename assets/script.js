const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};


function bgChanger(){
  if(this.scrollY > this.innerHeight / 0.5){
    document.body.classList.add('bg-active');
  } else {
    document.body.classList.remove('bg-active');
  }

}

window.addEventListener("scroll", bgChanger);

navSlide();
