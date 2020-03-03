window.onload = function() {
  const div = document.getElementById("event-content");
  const originalColor = div.style.backgroundColor;

  div.addEventListener('touchstart', function() {
    div.style.backgroundColor = "#EF40FF";
  });

  div.addEventListener('touchend', function() {
    div.style.backgroundColor = originalColor;
  });

  div.addEventListener('mousedown', function() {
    div.style.backgroundColor = "#EF40FF";
  });

  div.addEventListener('mouseup', function() {
    div.style.backgroundColor = originalColor;
  });

  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = "#E83AAB";
  });

  div.addEventListener('mouseout', function() {
    div.style.backgroundColor = originalColor;
  });

};
