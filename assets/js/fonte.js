function fonte(e) {
  var elemento = $(".acessibilidade");
  var fonte = parseInt(elemento.css("font-size"));

  var body = $("body");
  const fonteNormal = parseInt(body.css("font-size"));

  if (e == "aumentar") {
    fonte++;
  }
  if (e == "diminuir") {
    fonte--;
  }
  if (e == "fontePadrao") {
    fonte = fonteNormal;
  }

  elemento.css("fontSize", fonte);
}
