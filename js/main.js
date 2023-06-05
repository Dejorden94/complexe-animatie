let profiles = document.getElementsByClassName("profile");

for (let i = 0; i < profiles.length; i++) {
    profiles[i].onclick = function () {
        profiles[i].style.animationName = "expand"
    }
}