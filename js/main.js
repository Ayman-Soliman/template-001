let links = document.querySelector('.links');
let linksUl = document.querySelector('.links ul');

// links.addEventListener("click", function(){
//     linksUl.classList.toggle('block');
//     // console.log('clicked');
// });
document.addEventListener("click", function handleClick(event){
    if (event.target.parentNode.closest('.links')) {
        linksUl.classList.toggle('block');
        console.log(event.target);
    }else{
            linksUl.classList.remove('block');
        }
});
