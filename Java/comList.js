const listBut = document.getElementById('comListButDiv');
const picBut = document.getElementById('picButDiv');
const comDiv = document.getElementById('comicDiv');
const picDiv = document.getElementById('picDiv');
const comListButton = document.getElementById('comListButton');
const picButton = document.getElementById('picButton');
const topButton = document.getElementById('topButton')

function showList() {
    if (comDiv.hidden) {
        comDiv.hidden = false;
        comListButton.innerText = "Hide List"
        topButton.style.display = "inline"
    } else {
        comDiv.hidden = true;
        comListButton.innerText = "List What I Own"
        if (picDiv.hidden) {
            topButton.style.display = "none"
        }
    }
}

function showPics () {
    if (picDiv.hidden) {
        picDiv.hidden = false;
        picButton.innerText = "Hide Pictures"
        topButton.style.display = "inline"
    } else {
        picDiv.hidden = true;
        picButton.innerText = "See Pictures"
        if (comDiv.hidden) {
            topButton.style.display = "none"
        }
    }
}