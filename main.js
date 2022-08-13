const btn_1 = document.querySelector(".btn-1")
const btn_2 = document.querySelector(".btn-2")
const btn_3 = document.querySelector(".btn-3")
const btn_4 = document.querySelector(".btn-4")
const btn_5 = document.querySelector(".btn-5")
const btn_6 = document.querySelector(".btn-6")

const select1 = document.querySelector(".select1")
const select2 = document.querySelector(".select2")

const ok = document.querySelector(".ok")
const kush = document.querySelector(".kush")
const skip = document.querySelector(".skip")

const logs_1 = document.querySelector(".logs-1 ul")
const logs_2 = document.querySelector(".logs-2 ul")

const empty = "| |"

let score1 = 0
let score2 = 0

let newFlag

let o=0
let l=1

let a;
let b;
let c=0;

let flag = false

const logs = [[]]

function select1_ok(){
  document.querySelector(".choose-player1").innerHTML = `<h2>${select1.value}</h2>`
}
function select2_ok(){
  document.querySelector(".choose-player2").innerHTML = `<h2>${select2.value}</h2>`
}

function leftPlayer(){
  document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select1.value}</h2>`
  a = `| <li> Начал </li> |`
  logs_1.insertAdjacentHTML("beforeend", a)
  newFlag=true
  document.querySelector(".total").style.display = "flex"
  document.querySelector(".work-scope").style.display = "flex"
}

function rightPlayer(){
  document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select2.value}</h2>`
  b = `| <li> Начал </li> |`
  logs_2.insertAdjacentHTML("beforeend", b)
  newFlag=true
  l=0
  o=1
  document.querySelector(".total").style.display = "flex"
  document.querySelector(".work-scope").style.display = "flex"
  
}

kush.addEventListener("click", ()=>{
  kush.classList.toggle("active-btn")
  flag = true
})

skip.addEventListener("click", ()=>{
  score1=0;
  draw(score1)
  console.log(logs)
})

ok.addEventListener("click", ()=>{

  if (a && logs.length%2===0){
    console.log("white")
    document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select2.value}</h2>`
    
  } else if ((a && logs.length%2===1)){
    console.log("black")
    document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select1.value}</h2>`
  }

  if (b &&  logs.length%2===0){
    
    document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select1.value}</h2>`
    
  } else{
    
    document.querySelector(".ddd").innerHTML = `<h2>Ходит ${select2.value}</h2>`
  }



  for(let item of document.querySelectorAll(".btn-container button")) {
    item.classList.remove("active-btn")
  }

  
  

  if (logs.length%2===o){
    logs_1.insertAdjacentHTML("beforeend", `| <li> ${logs[logs.length-1]} </li> |`)
    let q = 0
    logs.map((el,i)=>{
        if (i%2===l && i!==0) {              /////////////
          if (el[0]===el[1]) {
            q+=(el[0]+el[1])
          }
          q+=(el[0]+el[1])
        }
    })
    draw1(q)
  } else{
    logs_2.insertAdjacentHTML("beforeend", `| <li> ${logs[logs.length-1]} </li> |`)
    let p = 0
    logs.map((el,i)=>{
        if (i%2===o && i!==0) {      /////////////
          if (el[0]===el[1]) {
            p+=(el[0]+el[1])
          }
          p+=(el[0]+el[1])
        }
        

    })
    draw2(p)
  }

/*   if (logs.length%2===0 && newFlag){
    console.log("left")
  } else if (logs.length%2===1 && !newFlag )console.log("right") */



  flag=false

})

////////////////////////////////////////////////////////

btn_1.addEventListener("click",()=>{
  if (flag){
    //draw(score1+=4)
    btn_1.classList.toggle("active-btn")
    logs.push([1,1])
  } else{

      //score1+=1
      //draw(score1) 
      btn_1.classList.toggle("active-btn")
      
      
      
      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(1)
      } else{
        logs.push([1])
      }

  }
})


btn_2.addEventListener("click",()=>{
  if (flag){
    btn_2.classList.toggle("active-btn")
    logs.push([2,2])

  } else{

      //score1+=2
      
      //draw(score1)  
      btn_2.classList.toggle("active-btn")
      
      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(2)
      } else{
        logs.push([2])
      }
  }
})

btn_3.addEventListener("click",()=>{
  if (flag){
    btn_3.classList.toggle("active-btn")
    logs.push([3,3])

  } else{

      //score1+=3
      //draw(score1) 
      btn_3.classList.toggle("active-btn")
      
      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(3)
      } else{
        logs.push([3])
      }
  }
})

btn_4.addEventListener("click",()=>{
  if (flag){
    btn_4.classList.toggle("active-btn")
    logs.push([4,4])

  } else{

      //score1+=4
      //draw(score1)   
      btn_4.classList.toggle("active-btn")
      
      
      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(4)
      } else{
        logs.push([4])
      }
  }
})

btn_5.addEventListener("click",()=>{
  if (flag){
    logs.push([5,5])
    btn_5.classList.toggle("active-btn")
  } else{

      //score1+=5
      ///draw(score1)  
      btn_5.classList.toggle("active-btn")
      
      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(5)
      } else{
        logs.push([5])
      }
  }
})

btn_6.addEventListener("click",()=>{
  if (flag){
    logs.push([6,6])
    btn_6.classList.toggle("active-btn")
  } else{

      //score1+=5
      //draw(score1)    
      btn_6.classList.toggle("active-btn")

      if (logs[logs.length-1].length===1) {
        logs[logs.length-1].push(6)
      } else{
        logs.push([6])
      }
  }
})











function draw(score){
  document.querySelector(".score1").innerHTML = `Total: ${score}`
}

function draw1(score){
  document.querySelector(".score1").innerHTML = `Total: ${score}`
}

function draw2(score){
  document.querySelector(".score2").innerHTML = `Total: ${score}`
}