
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("myVideo");
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping

    var seekBar = document.getElementById("seekBar");
    seekBar.addEventListener("input", function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause(); // Pause the video
});


document.querySelector("#mute").onclick = function() {
    video.muted = !video.muted;
    var muteButton = document.getElementById("mute");
    if (video.muted) {
        muteButton.textContent = "Unmute";
    } else {
        muteButton.textContent = "Mute";
    }
};
document.querySelector("#slider").oninput = function(event) {
    var volumeValue = event.target.value;
    video.volume = volumeValue / 100;
    var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = volumeValue + "%";
};
/*<!-----------------------------------------------------------
function playVid(ID) {
  var myVideo = document.getElementById("myVideo");
  var videoUrls = {
      "one": "bts1.mp4",
      "two": "bts2.mp4",
      "three": "bts4.mp4",
      "four": "bts3.mp4"
  };

  if (ID in videoUrls) {
      myVideo.src = videoUrls[ID];
      myVideo.load();
      myVideo.play();
  } else {
      console.error("Invalid video ID:", ID);
  }
}

/*<!----------------------------------------------------------------->*/
function playVid(ID) {
  var myVideo = document.getElementById("myVideo");
  var buttons = document.querySelectorAll('.thumb');

  // Remove the "active" class from all buttons
  buttons.forEach(function(button) {
      button.classList.remove('active');
  });

  // Add the "active" class to the clicked button
  var clickedButton = document.getElementById("button_" + ID);
  clickedButton.classList.add('active');

  // Set up video URLs
  var videoUrls = {
      "one": "bts1.mp4",
      "two": "bts2.mp4",
      "three": "bts3.mp4",
      "four": "bts4.mp4"
  };

  if (ID in videoUrls) {
      myVideo.src = videoUrls[ID];
      myVideo.load();
      myVideo.play().catch(function(error) {
          console.error('Error playing video:', error);
      });
  } else {
      console.error("Invalid video ID:", ID);
  }
}
