function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', '../img/avatar-kaue-light.png')
  } else {
    img.setAttribute('src', '../img/avatar-kaue.png')
  }
}