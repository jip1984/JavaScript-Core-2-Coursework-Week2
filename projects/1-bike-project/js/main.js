const blueBtn = document.getElementById("blueBtn");
blueBtn.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#588fbd";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#ffa500";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
});

const orangeBtn = document.getElementById('orangeBtn');

const orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#f0ad4e";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#5751fd";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#31b0d5";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
});

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#87ca8a";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#8c9c08";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "black";
});

const submitBtn = document.getElementById('submit');
