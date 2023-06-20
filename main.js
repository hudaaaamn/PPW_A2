const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

function playVideo() {
  var videoLink = 'https://drive.google.com/file/d/1Ab80TZ4I7jHrYkFi0QXuIL6G6jLdUCXw/view?usp=sharing';

  // Membuka halaman baru dan menampilkan video di dalamnya
  var videoWindow = window.open('', '_blank');
  videoWindow.document.write(`
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe src="${videoLink}" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>
  `);
}

const imageIMG = document.querySelector(".imageShowIMG");
const imageHolder = document.querySelector(".imageShow");
const imageClick = document.querySelectorAll(".imgPortfoClick");
const imagePortfo = document.querySelectorAll(".imgPortfo");
const Ndas = document.querySelector("header");
const sections = document.querySelectorAll("section");
const closeImage = document.querySelector(".xIcon")

imageClick.forEach(click=> {
  click.addEventListener("click",() => {
    imageHolder.style.display = "block";
    clickData = click.getAttribute("data-value")
    imageIMG.setAttribute("src","img/img"+clickData+".png")
    sections.forEach(section => {
      section.style.filter = "brightness(25%)"
    })
    Ndas.style.filter = "brightness(25%)"
  })
})

closeImage.addEventListener("click",() => {
  imageHolder.style.display = "none";
  Ndas.style.filter = "brightness(100%)"
  sections.forEach(section => {
    section.style.filter = "brightness(100%)"
  })
})