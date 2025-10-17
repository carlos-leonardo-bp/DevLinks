function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Carlos Leonardo sorrindo, usando camisa preta e fundo em degradê, indo do roxo na parte esquerda para azul na parte direita."
    )
  } else {
    // se tiver sem light mode, mater a imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Carlos Leonardo sorrindo, usando camisa branca e fundo amarelo."
    )
  }
}

/*   if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
