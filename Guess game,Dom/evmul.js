

var len = document.querySelectorAll(".btn").length;
for (i = 0; i < 3; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "" + " is clicked";


    });
}

