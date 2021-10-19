var slideDiv = document.getElementsByClassName('slide');
var projectCover = document.getElementsByClassName('projectCover');


Array.from(projectCover).forEach(slide => {

    slide.addEventListener('mouseover', () =>{
        slide.parentNode.parentNode.classList.add('displayMore');
    });
    slide.addEventListener('mouseout', () =>{
        slide.parentNode.parentNode.classList.remove('displayMore');
    });
}, true);