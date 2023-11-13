
function backgroundChange(){
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const page3 = document.getElementById("page3");

img1.addEventListener("mousemove", function () {
    page3.style.backgroundColor = "palevioletred";
    img1.style.transform = `scale(1.05)`;
});

img1.addEventListener("mouseleave", function () {
    page3.style.backgroundColor = "white"; 
    img1.style.transform = `scale(1)`;
});
img2.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "darkslategray";
  img2.style.transform = `scale(1.05)`;
});

img2.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img2.style.transform = `scale(1)`;
});
img3.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "rebeccapurple";
  img3.style.transform = `scale(1.05)`;
});

img3.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img3.style.transform = `scale(1)`;
});
img4.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "mediumpurple";
  img4.style.transform = `scale(1.05)`;
});

img4.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img4.style.transform = `scale(1)`;
});
img5.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "lightsalmon";
  img5.style.transform = `scale(1.05)`;
});

img5.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img5.style.transform = `scale(1)`;
});
img6.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "mediumaquamarine";
  img6.style.transform = `scale(1.05)`;
});

img6.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img6.style.transform = `scale(1)`;
});
img7.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "teal";
  img7.style.transform = `scale(1.05)`;
});

img7.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img7.style.transform = `scale(1)`;
});
img8.addEventListener("mousemove", function () {
  page3.style.backgroundColor = "mistyrose";
  img8.style.transform = `scale(1.05)`;
});

img8.addEventListener("mouseleave", function () {
  page3.style.backgroundColor = "white"; 
  img8.style.transform = `scale(1)`;
});
}

function valueSetters(){
  gsap.set("#nav", {y: "-100%"});
}

function Reveal(){
document.querySelectorAll(".reveal")
.forEach(function(elem){
  var parent = document.createElement("span");
  var child = document.createElement("span");
  parent.classList.add("parent");
  child.classList.add("child");
  child.innerHTML = elem.innerHTML;
  parent.appendChild(child);
  elem.innerHTML = "";
  elem.appendChild(parent);
});
}

function loaderAnimation(){
  var tl = gsap.timeline();

tl
.from("#loader .child span",{
    x: 200,
    duration: 1.5,
    stagger: .2,
    ease: Power3
})
.to("#loader .parent .child",{
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green",{
    top: 0,
    height: "100%",
    delay: -.8,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green",{
    height: "0%",
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
    onComplete: function(){
      animateHomepage(); 
    }
})
}

function animateHomepage(){
  var tl = gsap.timeline();
  tl.to("#nav", {
    y: 0, 
  });
}

function loco(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function page2Textup(){
  var clutter = "";
  
      document.querySelector(".page2text>h1").textContent.split("").forEach(function(dets){
          clutter += `<span>${dets}</span>`
      
          document.querySelector(".page2text>h1").innerHTML = clutter;
      })
      
      gsap.to(".page2text>h1>span",{
          scrollTrigger:{
              trigger:`.page2text>h1>span`,
              start:`top bottom`,
              end:`bottom center`,
              scroller:`#main`,
              scrub:1,
          },
          stagger:.5,
          color: `#fff`,   
      })
}
Shery.hoverWithMediaCircle(".hometext", {videos: ["./Vid placeholder.mp4"] });
Shery.mouseFollower({
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.imageMasker(".thumb", {
  mouseFollower: true,
  text: "View Project",
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  style: {
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
  },
});


  var mybutton = document.getElementById("backToTopBtn");


  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", function () {
    topFunction();
  });

  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }





var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
    var att = elem.style.backgroundColor = "#e94d3b"})
   elem.addEventListener("mouseleave", function(){
    var att = elem.style.backgroundColor = "transparent";
    
   })
})

Reveal();
valueSetters();
loaderAnimation();
loco();
backgroundChange();
page2Textup();




