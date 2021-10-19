//SHOW VIDEO POP AND CLOSE


var videos = document.querySelectorAll('.video-thumbnail');
Array.from(videos).forEach(video => {
  video.addEventListener('click', () => {
    var popup = video.parentNode.querySelector('.video-popup');
    var elVideo = video.parentNode.querySelector('video');
    console.log(elVideo);
    var closeViewer = video.parentNode.querySelector('.closeViewer');
    var closeViewer = popup.querySelector('.closeViewer');
    popup.classList.add('on');
    elVideo.play();
    closeViewer.addEventListener('click', (e)=>{
        console.log(e.target)
        elVideo.load();

        popup.classList.remove("on");
    }, false);
  })
});
