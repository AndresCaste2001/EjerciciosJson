export const likes = (cantlikes)=>{
    let num = 0
    if(cantlikes>1000 && cantlikes<1000000){
        num = cantlikes/1000;
        num = Math.floor(num);
        num = String(num);
        num = num+'K';
    }else if(cantlikes>=1000000){
        num = cantlikes/1000000;
        num = Math.floor(num);
        num = String(num);
        num = num+'M';
    }else{
        return String(cantlikes);
    }
    return num
}