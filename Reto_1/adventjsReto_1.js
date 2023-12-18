alert("Hola")
const giftIds = [2, 1, 3, 5, 3, 2]
console.log(giftIds)
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

function findFirstRepeated(gifts) {
    const seenNumbers = {};
    for(let i = 0; i < gifts.length; i++){
      const currentId = gifts[i];
      //Si ya hemos visto este numero, devolvemos el numero repetido
      if(seenNumbers[currentId] !== undefined){
        return currentId;
      }
      // Guardamos la posición de la primera ocurrencia del número
      seenNumbers[currentId] = i;
    }
    //Si no se encuentra nungun numero repetido, devolvemos -1
    return -1;
  }
  
