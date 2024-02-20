let box=document.querySelector('#box')
let boxs=document.querySelector('h1')
let increase=document.querySelector('#increase')
let decrease=document.querySelector('#decrease')
let reset=document.querySelector('#reset')
let  count=0;

increase.addEventListener('click',()=>{
    count++
    
    if(count>=0){
        boxs.innerHTML = count;
    } 
    boxs.innerHTML =count;
})
decrease.addEventListener('click',()=>{

    if(count>0){
        boxs.innerHTML = count;
        count--
    }
   
   
})
reset.addEventListener('click',()=>{
// let counts=0
// boxs.innerHTML=counts;

})
increase.addEventListener('click',()=>{
    if(count==1){
        document.body.style.backgroundColor='red'
    }else if(count === 2){
        document.body.style.backgroundColor='blue'
    }else if(count === 3){
        document.body.style.backgroundColor='green'
    }else if(count === 4){
        document.body.style.backgroundColor='black'
    }else if(count === 5){
        document.body.style.backgroundColor='orange'
    }else{
        document.body.style.backgroundColor='white'
    }
    boxs.innerHTML = count;
})
decrease.addEventListener('click',()=>{
    if(count==1){
        document.body.style.backgroundColor='red'
    }else if(count === 2){
        document.body.style.backgroundColor='blue'
    }else if(count === 3){
        document.body.style.backgroundColor='green'
    }else if(count === 4){
        document.body.style.backgroundColor='black'
    }else if(count === 5){
        document.body.style.backgroundColor='orange'
    }else{
        document.body.style.backgroundColor='white'
    }
    boxs.innerHTML = count;
})