document.querySelectorAll(".collapse").forEach(function (elem) {
    elem.addEventListener("click", function (event) {
        console.info("clicked");
        var collapsable = document.getElementById(this.dataset.target);
        if (collapsable.dataset.collapsed == "true") {
            console.info("uncollapsing");
            uncollapse(collapsable);
        }
        else {
            console.info("collapsing");
            collapse(collapsable);
        }
    });
    document.getElementById("side-nav").addEventListener("touchstart", function (event) {
        console.info("Swiping.");
        this.touchStart = (event.touches[0].pageX);
    });
    document.getElementById("side-nav").addEventListener("touchend", function (event) {
        var moved = this.touchStart - event.changedTouches[0].pageX;
        var collapsable = this;
        console.info(moved);
        if (moved < 0) { //swipe left to right
            console.info("L -> R");
            console.info("uncollapsing");
            uncollapse(collapsable);
        }
        else if (moved > 0) { //swipe right to left
            console.info("L <- R");
            console.info("collapsing");
            collapse(collapsable);
        }
    });
});

function collapse(elem) {
    elem.dataset.originalWidth = elem.getBoundingClientRect().width;
    elem.style.width = '0px';
    elem.style.minWidth = '0px';
    elem.dataset.collapsed = "true";
}

function uncollapse(elem) {
    elem.style.width = `${elem.dataset.originalWidth}px`;
    elem.style.minWidth = `${elem.dataset.originalWidth}px`;
    elem.dataset.collapsed = "false";
}