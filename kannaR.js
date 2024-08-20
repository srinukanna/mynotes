document.getElementById('imageUpload').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'pencil-sketch';
            gallery.appendChild(img);
        }
        reader.readAsDataURL(file);
    });

    // Adding user's photo and wishes
    const userPhoto = new Image();
    userPhoto.src = 'images/kanna1.jpeg';  // Replace with your photo path
    userPhoto.className = 'pencil-sketch';
    userPhoto.style.marginTop = '20px';
    gallery.appendChild(userPhoto);

    const wishes = document.createElement('div');
    wishes.innerText = 'Happy Birthday! Wishing you all the best!';
    wishes.className = 'wishes';
    gallery.appendChild(wishes);
}