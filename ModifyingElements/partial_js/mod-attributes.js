function updateImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imageElement = document.getElementById('displayImage');
    if (imageUrl) {
        imageElement.src = imageUrl;
    } else {
        alert('Please enter a valid URL.');
    }
}

document.getElementById('removeAltBtn').addEventListener('click', function() {
    const imageElement = document.getElementById('displayImage');
    imageElement.removeAttribute('alt');
});
