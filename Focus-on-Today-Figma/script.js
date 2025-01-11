let score = 0;
let setGoal= false;
const progress = document.querySelector('.progress');
const screenWidth = window.innerWidth;
const input = document.querySelectorAll('input[type="text"]');
const checkbox= document.querySelectorAll('input[type="checkbox"]')
// const checkbox= document.querySelectorAll('.checkmark')

// console.log(screenWidth);
input[0].addEventListener('input',()=>{

    if(input[0].value.trim() == "" || input[1].value.trim() == "" || input[2].value.trim() == "" ){
        setGoal = false;
        console.log(setGoal);
    }else{
        setGoal= true;
    }
})
input[1].addEventListener('input',()=>{

    if(input[0].value.trim() == "" || input[1].value.trim() == "" || input[2].value.trim() == "" ){
        setGoal = false;
        console.log(setGoal);
    }else{
        setGoal= true;
    }
})
input[2].addEventListener('input',()=>{

    if(input[0].value.trim() == "" || input[1].value.trim() == "" || input[2].value.trim() == "" ){
        setGoal = false;
        console.log(setGoal);
    }else{
        setGoal= true;
    }
})


// console.log(allGoalSet);



document.querySelectorAll('input[type="checkbox"]')[0].addEventListener('change', function() {
    if (this.checked) {
        score++;
        console.log('Checkbox is checked',score);
    } else {
        score--;
        console.log('Checkbox is unchecked',score);
    }
    if(screenWidth>700){
        progress.style.width='191.33333333333334' * score + 'px';
    }else{
        progress.style.width='101' * score + 'px';
    }

});
document.querySelectorAll('input[type="checkbox"]')[1].addEventListener('change', function() {
    if (this.checked) {
        score++;
        console.log('Checkbox is checked',score);
    } else {
        score--;
        console.log('Checkbox is unchecked',score);
    }
    if(screenWidth>700){
        progress.style.width='191.33333333333334' * score + 'px';
    }else{
        progress.style.width='101' * score + 'px';
    }
});
document.querySelectorAll('input[type="checkbox"]')[2].addEventListener('change', function() {
    if (this.checked) {
        score++;
        console.log('Checkbox is checked',score);
    } else {
        score--;
        console.log('Checkbox is unchecked',score);
    }
    if(screenWidth>700){
        progress.style.width='191.33333333333334' * score + 'px';
    }else{
        progress.style.width='101' * score + 'px';
    }

});
console.log('hi');

