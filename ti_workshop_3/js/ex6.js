
let position = 1;
let imageCount = 4;
let currentImage = 'images/chat.jpg';

function moveUp() {
    let currentId = 'img' + position;
    position -= 1;

    if (position < 1) {
        position = imageCount;
    }

    let prevId = 'img' + position;

    // Permute images
    document.getElementById(currentId).src = document.getElementById(prevId).src;
    document.getElementById(prevId).src = currentImage;
}


function moveDown() {
    let currentId = 'img' + position;
    position += 1;

    if (position > imageCount) {
        position = 1;
    }

    let nextId = 'img' + position;

    // Permute images
    document.getElementById(currentId).src = document.getElementById(nextId).src;
    document.getElementById(nextId).src = currentImage;
}