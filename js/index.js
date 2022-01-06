

window.onload=function(){
  var content = document.getElementById("content");
  setTimeout(function(){
    var wrapper = document.getElementById("wrapper");
    wrapper.classList.add("d-none"); 
    content.style.display = "block";
    AOS.init(); 
   }, 1500);
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
 
});



// $("#memberOne").click(function(){
//   $("#team").text("A well-known Indian Film and TV personality.Radha has produced more than 15 films and 10,000 hours of episodic TV content,in addition to his association with more than 50 feature films in multiple domains as Co-writer, Producer,VFX Supervisor, Actor, Casting Director, Tech & Business consultant.");
//   $("#name").text("B.S.Radhakrishnan");
//   $("#popOne").toggleClass("popImg");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });


// $("#memberTwo").click(function(){
//   $("#team").text("Contemporary music composer from the UK. Associate conductor of the groups, Samyo and Tarang, as well as with Great Britain's National Orchestra for South Asian music. Latest release is the 'Netrikann'.");
//   $("#name").text("Girishh Gopalakrishnan");
//   $("#popTwo").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });

// $("#memberThree").click(function(){
//   $("#name").text("Yezhil");
//   $("#team").text("Holds a masters degree in Media and Communication from the Manipal Academy of Higher Education, Dubai, UAE. Yezhil's passion lies in screen-writing and having found an opportunity to be a part of the Production Unit at Studio Shakthi she manages her time between work and writing.");
//   $("#popThree").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });
// $("#memberFour").click(function(){
//   $("#name").text("Varsha");
//   $("#team").text("Having completed her Graduation majoring in Tourism and Travel Management she opted to get into Sound Design and worked under Sachin Sudhakaran & Mixing Engineer M.R. Rajakrishnan for two years. Her works are credited in the following films; Kirik Party, Adhae Kangal, Maragadha Nanayam, Duruvangal Padhinaaru, Kurangu Bommai.");
//   $("#popFour").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });
// $("#memberFive").click(function(){
//   $("#name").text("Kiran Konda");
//   $("#team").text("An MBA from Rai Business School. Kiran started his acting career as a television talent and has appeared in many Tamil and Telugu Films. Kiran worked as an AD under Alphonse Puthiren for two of his films; 'Neram' and 'Premam'. Kiran is a fully trained drone pilot and an avid racer. Kiran's claim to fame was 'Kana Kanum Kaalangal' on Vijay TV wherein he played the lead. Kiran is now part of the Production Team at Studio Shakthi. Kiran is a professional dancer and has won many titles.");
//   $("#popFive").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });
// $("#memberSix").click(function(){
//   $("#name").text("Bhairav");
//   $("#team").text("Our living relative and pet and we don't know about his pure bred ancestors. Born in Chennai, our beloved Bhairav gets our attention and love constantly. He gets to visit his vet often like any of his pure bred fellow beings.");
//   $("#popSix").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSeven").toggleClass("blur");
// });
// $("#memberSeven").click(function(){
//   $("#name").text("Santosh Kumar");
//   $("#team").text("Santosh started his career as a makeup artist and then moved to Production.Santosh was part of Radaan Mediaworks for more than two decades, later he became the Senior Production Controller for MAHUAA TV before joining Kavi Puvi Viamedia Pvt Ltd., Since 2019 he is an integral part of Studio Shakthi and heads the production unit as its Senior Manager.");
//   $("#popSeven").toggleClass("popImg");
//   $("#memberOne").toggleClass("blur");
//   $("#memberTwo").toggleClass("blur");
//   $("#memberThree").toggleClass("blur");
//   $("#memberFour").toggleClass("blur");
//   $("#memberFive").toggleClass("blur");
//   $("#memberSix").toggleClass("blur");
// });



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreText.style.display = "inline";
  }
}