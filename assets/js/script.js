function titleAnimation() {
    for (let i = 0; i < 1; i++) {
        if (window.innerWidth < 768) {
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "81px";
            }, 1000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "82px";
            }, 2000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "81px";
            }, 3000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "80px";
            }, 4000);
        }
        else {
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "121px";
            }, 1000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "122px";
            }, 2000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "121px";
            }, 3000);
            setTimeout(function() {
                document.getElementById("title").style.fontSize = "120px";
            }, 4000);
        }   
    }
    setTimeout(titleAnimation, 4000);
}

titleAnimation();