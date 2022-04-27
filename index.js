//Flag je potreban za iniciranje upscala odnosno downscala za pojedin image
let flag=1;

function ImgBigger(ImgName){
    let img=document.getElementById(ImgName);
    if (flag==1){
        biggerPicture(flag,img);
        flag=0;
    }else{
        biggerPicture(flag,img);
        flag=1;
    }
}

function biggerPicture(flag,img){
    if(flag==1){
        img.style.transform = "scale(1.5)";
        // Animation effect 
        img.style.transition = "transform 0.25s ease";
        flag=0;
    }else{
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
        flag=1;
    }
}