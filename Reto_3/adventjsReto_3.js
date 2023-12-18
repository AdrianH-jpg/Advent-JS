//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''
// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
findNaughtyStep(original1, modified1) // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
findNaughtyStep(original2, modified2) // ''

function findNaughtyStep(original, modified) {
  // Obtener la longitud mínima de las dos cadenas
  const minLength = Math.min(original.length, modified.length);
  if(original.length < modified.length){
    // Iterar a través de los caracteres de ambas cadenas
    for (let i = 0; i < minLength; i++) {
      if (original[i] !== modified[i]) {
        // Si se encuentra un paso diferente, devolverlo
        return modified[i];
      }
    }
  }else{
    // Iterar a través de los caracteres de ambas cadenas
    for (let i = 0; i < minLength; i++) {
      if (modified[i] !== original[i]) {
        // Si se encuentra un paso diferente, devolverlo
        return original[i];
      }
    }
  }

  // Si las longitudes son diferentes, devolver el caracter faltante o adicional
  if (original.length < modified.length) {
    return modified[minLength];
  } else if (original.length > modified.length) {
    return original[minLength];
  }

  // Si las cadenas son idénticas
  return '';
}