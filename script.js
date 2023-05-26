let flag = 0 

function controller(y){
    flag = flag + y
    slideshow(flag)
}

slideshow(flag)

function slideshow(x){
    let slies = document.getElementsByClassName("slide");

    if(x == slies.length){
        flag =0;
        x =0;
    }
    if(x < 0){
        flag = slies.length-1
        x = slies.length-1
    }

    for(let i of slies){
        i.style.display="none";
    }
    // console.log(x)
    slies[x].style.display="block";
}