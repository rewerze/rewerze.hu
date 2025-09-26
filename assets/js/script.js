var title = "rewerze";
var titleArray = title.split("");

console.log(titleArray);

function titleAnimation() {
    for (let i = 0; i < titleArray.length; i++) {
        setTimeout(function() {
            titleArray[i] = titleArray[i].toUpperCase();
            document.getElementById("title").innerText = titleArray.join("");
            if (i > 0)
            {
                titleArray[i - 1] = titleArray[i - 1].toLowerCase();
                document.getElementById("title").innerText = titleArray.join("");
            }
            else if (i == 0)
            {
                titleArray[titleArray.length - 1] = titleArray[titleArray.length - 1].toLowerCase();
                document.getElementById("title").innerText = titleArray.join("");
            }
            else {
                titleArray[i - 1] = titleArray[i - 1].toLowerCase();
                document.getElementById("title").innerText = titleArray.join("");
            }
        }, 800 * i);
}
    setTimeout(titleAnimation, 800 * titleArray.length);
}

titleAnimation();