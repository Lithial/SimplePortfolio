


const selectors = document.querySelectorAll('.selector');
selectors.forEach(child => {
    child.addEventListener('click', (e) =>{
        const clicked = e.target.closest('.selector');
        if (!clicked) return; //guard clause
        selectors.forEach(child => child.classList.remove('active'));
        clicked.classList.add('active');
        toggleProjectHide(clicked.classList[1])
    })
});

function toggleProjectHide(selectorType){
    let projects = document.querySelectorAll('.project');
    projects.forEach(child => {
        if(selectorType === 'all'){
            child.classList.remove('hide');
        }
        else if(!child.classList.contains(selectorType)){
            child.classList.add('hide');
        }
        else{
            child.classList.remove('hide');
        }
    })
}
