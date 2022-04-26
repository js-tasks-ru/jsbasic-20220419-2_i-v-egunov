truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)

function truncate(str, maxlength) {
  if(str.length<=maxlength){
  return str;
  }
  else{
  return (str.slice(0, (maxlength-1))+"…")
  }
}
