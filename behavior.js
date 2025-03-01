document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className === "small") {
            thumbnailElement.className = ""; // Expand image
        } else {
            thumbnailElement.className = "small"; // Shrink image
        }
    });
});