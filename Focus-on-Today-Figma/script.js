let score = 0;
let setGoal= false;
const progress = document.querySelector('.progress');
const progressMsg = document.querySelector('.progressMsg');
let screenWidth = window.innerWidth;
const inputs = document.querySelectorAll('input[type="text"]');
const checkboxes= document.querySelectorAll('input[type="checkbox"]')
const warningMsg= document.querySelector('.warningMsg');
const scoreMsg = document.querySelector('.scoreMsg');
const inputFields= document.querySelectorAll('.inputFields');
// const checkbox= document.querySelectorAll('.checkmark')

// console.log(screenWidth);

inputs.forEach(input => {
   input.addEventListener('input',()=>{
        if(inputs[0].value.trim() == "" || inputs[1].value.trim() == "" || inputs[2].value.trim() == "" ){
            setGoal = false;
            console.log(setGoal);
        }else{
            setGoal= true;
            console.log(setGoal);
            
        }
        warningMsg.innerText='';
    }) 
})



// console.log(allGoalSet);


checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('change', (event)=> {
        if(setGoal){
            if (event.target.checked) {
            score++;
            console.log('Checkbox is checked',score);
            } else {
                score--;
                console.log('Checkbox is unchecked',score);
            }
            if (score===0) {
                scoreMsg.innerHTML='Raise the bar by completing your goals!'
            }
            if(score===1){
                scoreMsg.innerHTML='Well begun is half done!'
                // console.log('socore 1');
                
            }
            if(score===2){
                scoreMsg.innerHTML='Just a step away, keep going!'
            }
            if(score===3){
                scoreMsg.innerHTML='Whoa! You just completed all the goals, time for chill :D'
            }
            if(screenWidth>700){
                progress.style.width='191.33333333333334' * score + 'px';
                
            }else{
                progress.style.width='101' * score + 'px';
            }
            if(score){
                progressMsg.innerHTML=+score+'/3'+' completed'
                progressMsg.style.paddingLeft='24px'
                
            }else{
                progressMsg.innerText='';
            }
            // inputFields.forEach(inputField=>{

            //     inputField.classList.add('completed');
            // })
        }
        else{
            checkbox.checked=false;
            score=score;
            console.log(score);
            warningMsg.innerHTML='Please set all the 3 goals!'
            warningMsg.style.color='red'; 
        }
    });
})

window.addEventListener('resize',()=>{
    screenWidth = window.innerWidth;
    if(screenWidth>700){
        progress.style.width='191.33333333333334' * score + 'px';
        
    }else{
        progress.style.width='101' * score + 'px';
    }
})

console.log('hi');

