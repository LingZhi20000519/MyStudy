checkSpeed(80);

function checkSpeed(speed){
    let Point=Math.floor((speed-70)%5);
    if(Point<=1)
        console.log("ok");
    else if(Point<=12)
        console.log(Point);
    else
        console.log("suspended");
}
