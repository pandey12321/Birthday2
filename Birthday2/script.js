window.onload = () =>{
  
    let text = document.getElementsByClassName("wish")[0];
    
    aakuWriter(text, "Dipty Wishing you a day filled with love, laughter, and all the happiness in the world May this year bring you new adventures, beautiful moments, and dreams turning into reality. Keep smiling, keep shining — you truly deserve the best life has to offer. Have a wonderful birthday! 🎂🌸🎁");
    
};

function aakuWriter(target, msg) {
    let i=0,
        id = setInterval(() => {
        
        target.append(msg[i++]);
        if (i >= msg.length) {
            clearInterval(id);         
        }
    }, 70);
}


window.addEventListener('click', () => {
    
    document.getElementById("song").play();
    
});

