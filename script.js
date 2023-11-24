function toggleMode(){
  const html = document.documentElement

  /*if (html.classList.contains('light')){
  html.classList.remove('light')
 } else{
  html.classList.add('light')
 }*/

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains('light')){
  img.setAttribute('src', './assets/assets/avatar-light.png')
  img.setAttribute('alt','refeição normal Rick and Morty')
 } else{
  img.setAttribute("src", "./assets/assets/avatar.png")
  img.setAttribute("alt", "Foto Rick and Morty, arregalando os olhos")
 }
}