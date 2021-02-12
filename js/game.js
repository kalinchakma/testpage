
const game = document.getElementById('game');
const player = document.getElementById("player");
const getCurrentPosition = (inc, cb) => {
    let num = 0;
    if (inc.length >= 0) {
        for(let i = 0; i < inc.length; i++) {
            //console.log("value of num is",inc);
            if(inc[i] != Number(inc[i]) ) {
                num = inc.slice(0,i);
                num = Number(num);
                break;
            }               
        }
    }
    cb(num);
};

addEventListener('keydown', (e)=> {
    //console.log(e.keyCode);
    const player = document.getElementById("player");
    if(e.key === "w" || e.key === "W") {
        let inc = player.style.bottom;
        getCurrentPosition(inc, num => {
            if (num <= 443) {
                num += 5;
            } else {
                console.log("you connot go outside");
            }
            player.style.bottom = `${num}px`;
        });
    }
    if (e.key === "d" || e.key === "D") {
        let inc = player.style.left;
        getCurrentPosition(inc, num => {
            if (num < 1120){
                num += 5;
            } else {
                console.log("U cannot go outside");
            }
            player.style.left = `${num}px`;
        });
    }
    if(e.key === "s" || e.key === "S") {
        let inc = player.style.bottom;
        getCurrentPosition(inc, num => {
            if (num > 0 && num < 500){
                num -= 5;
            } else {
                console.log("U cannot go outside");
            }
            player.style.bottom = `${num}px`;
        });
    }
    if (e.key === "a" || e.key === "A") {
        let inc = player.style.left;
        getCurrentPosition(inc, num => {
            if (num > 0){
                num -= 5;
            } else {
                console.log("U cannot go outside");
            }
            player.style.left = `${num}px`;
        });
    }
    // add fire
   if (e.key == " ") {
    let left = player.style.left;
    let bottom = player.style.bottom;
     getCurrentPosition(left, num => {
        left = num;
    });
     getCurrentPosition(bottom, num => {
       bottom = num;
    });
    const bullet = document.createElement("i");
    bullet.className = "bullet";
    let b = bullet.style.bottom = `${bottom+50}px`;
    let l = bullet.style.left = `${left}px`;
    const tooltip = document.createElement('span');
    tooltip.className = "tooltip";
    tooltip.style.bottom = `${bottom+50+10+28}px`;
    tooltip.style.left = `${left-58}px`;
    tooltip.textContent = `Coordinate: ${b} ${l}`;
    bullet.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });
    bullet.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
    game.append(bullet);
    game.append(tooltip);
   }
});

player.addEventListener('mouseover', (e) => {
    player.style.backgroundColor = "blue";
});
player.addEventListener('mouseleave', () =>{
    player.style.backgroundColor = "rgb(196, 0, 0)";
});