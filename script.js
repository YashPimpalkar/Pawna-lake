function openFullscreen(src) {
    // Function to open images and videos in fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

window.onload = function() {
    const galleryContainer = document.querySelector('.gallery');

    // Generate image elements from 1 to 82
    for (let i = 2; i <= 58; i++) {
        if (i >= 42 && i <= 45) continue; // Skip images 42 to 45
        if (i >= 55 && i <= 58) continue; // Skip images 55 to 58
        const img = document.createElement('img');
        img.src = `Pawna-Lake (${i}).jpeg`;
        img.alt = `Image ${i}`;
        img.className = 'gallery-item';
        img.setAttribute('onclick', `openFullscreen('${img.src}')`);
        img.loading ="lazy";
        // Add rotation class to a specific image
        // if (i === 58) {
        //     img.classList.add('rotate-90'); // Example: rotate the 2nd image upside down
        // }

        galleryContainer.appendChild(img);

    }


    for (let i = 1; i <= 6; i++) {
        const video = document.createElement('video');
        video.src = `Pawna-Lake (${i}).mp4`; // Adjust video source accordingly
        video.type = 'video/mp4';
        video.className = 'gallery-item';
        video.setAttribute('controls', '');
        video.setAttribute('onclick', `openFullscreen('${video.src}')`);
        

        // Add rotation class to a specific video
        // if (i === 3) {
        //     video.classList.add('rotate-90'); // Example: rotate the 3rd video by 90 degrees
        // }

        galleryContainer.appendChild(video);
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll(".lazy-video"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var video = entry.target;
                    video.src = video.dataset.src;
                    lazyVideoObserver.unobserve(video);
                }
            });
        });

        lazyVideos.forEach(function(video) {
            lazyVideoObserver.observe(video);
        });
    } else {
        // For browsers that don't support IntersectionObserver, load all videos immediately
        lazyVideos.forEach(function(video) {
            video.src = video.dataset.src;
        });
    }
});
