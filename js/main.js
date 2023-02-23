// 패널돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 / len;
const names = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];

for(let i = 0; i<len; i++){
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  //사진 일괄수정
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url(../img/${names[i]}.jpg)`;
  //음악 제목 일괄수정
  const title = articleArr[i].querySelector(".text>h2");
  title.innerHTML = `${names[i]}`;
  //음악태그, 파일 일괄 적용
  const audio = document.createElement("audio");
  audio.setAttribute("src", `../music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");
  articleArr[i].append(audio);
}

// prev next
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;
let active = 0;

prev.addEventListener("click", function(){
  frame.style.transform = `rotate(${deg * ++num}deg)`;
  if(active === 0){
    active = len - 1;
  }else{
    active--;
  }
  for(let el of articleArr){
    el.classList.remove("on");
    el.querySelector(".pic").classList.remove("on");
    el.querySelector("audio").pause();
  }
  articleArr[active].classList.add("on");
})
next.addEventListener("click", function(){
  frame.style.transform = `rotate(${deg * --num}deg)`;
  if(active === len - 1){
    active = 0;
  }else{
    active++;
  }
  for(let el of articleArr){
    el.classList.remove("on");
    el.querySelector(".pic").classList.remove("on");
    el.querySelector("audio").pause();
  }
  articleArr[active].classList.add("on");
})

//cd모양사진 회전
//음악재생
// let before = 0;
for(let el of articleArr){
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const reload = el.querySelector(".reload");

  play.addEventListener("click", function(e){
    /*
    if(before === 0){
      before = e.target;
    }else if(before !== e.target){
      before.closet("article").querySelector(".pic").classList.remove("on");
      before.closet("article").querySelector("audio").pause();
      before = e.target;
    }
    */
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").play();
  })
  
  pause.addEventListener("click", function(){
    el.querySelector(".pic").classList.remove("on");
    el.querySelector("audio").pause();
  })

  reload.addEventListener("click", function(e){
    /*
    if(before === 0){
      before = e.target;
    }else if(before !== e.target){
      before.closet("article").querySelector(".pic").classList.remove("on");
      before.closet("article").querySelector("audio").pause();
      before = e.target;
    }
    */
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
  })
}

