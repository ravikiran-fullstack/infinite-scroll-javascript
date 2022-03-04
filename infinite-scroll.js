console.log("infinite-scroll");
window.onscroll = function (ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    // alert("you're at the bottom of the page");
    createAndAppendImages();
  }
};

window.addEventListener("scroll", () => {
  console.log("scrollY", window.screenY);
  console.log("innerHeight", window.innerHeight);
});

function createAndAppendImages() {
  const container = document.querySelector(".container");

  const div = document.createElement("div");
  div.setAttribute("id", "testing");
  div.setAttribute("class", "imageDiv");
  const image = document.createElement("img");

  image.setAttribute(
    "src",
    `https://picsum.photos/id/${randomNumberGenerator()}/200/300`
  );
  image.setAttribute("width", `100%`);
  div.append(image);
  container.append(div);
}

// function createElement() {}

function randomNumberGenerator() {
  return Math.ceil(100 + Math.random() * 899);
}

createAndAppendImages();
