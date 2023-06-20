export const GuardarEnStorage = (clave, elemento) => {
  //conseguir elementos que ya tenemos en loca storage
  let elementos = JSON.parse(localStorage.getItem(clave));
  //comprobar si es array
  if (Array.isArray(elementos)) {
    // añadir elemento nuevo
    elementos.push(elemento);
  } else {
    //crear un array con la nueva peli
    elementos = [elemento];
  }
  // guardar en localstorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //devolver objeto
  return elemento;
};
