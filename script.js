const themeButton = document.querySelectorAll('.border-comment-child .comment');
const selectscore = document.getElementById('selected-score');
let clicked = false;

themeButton.forEach(comment =>{
    comment.addEventListener('click' , ()=>{
        if (!clicked){
            comment.style.backgroundColor = "orange"
            selectscore.textContent = comment.textContent;
            selectscore.style.backgroundColor = "black"
            selectscore.style.borderRadius = "10px"
            selectscore.style.color = "orange"
            clicked = true
        }  else{
            comment.style.backgroundColor = ""
            selectscore.textContent = ""
            clicked = false
        }
    })
})