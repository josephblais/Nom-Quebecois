const firstNames = ['Louis', 'Philippe', 'Marie', 'Jean', 'Guy', 'Martine']

const surnames = ['Tremblay', 'Roy', 'Gauthier', 'Bélanger', 'Pelletier', 'Bergeron', 'Simard', 'Leblanc', 'Richard', 'Girard', 'Bouchard', 'Gagnon', 'Lefebvre', 'Poirier']

const wildCards = ['Caisse Populaire Desjardins', 'Guy A. Lepage', 'Chicoutimi Steve', 'Sloche', 'Radio NRJ', 'Sauce Brune']

const cutToFirstVowel = (name) => {
  const vowels = ['a','e','i','o','u']
  let splicedName = ''

  for (let char of name) {
    if (vowels.includes(char)) {
      splicedName += char
      return splicedName
    }
    splicedName += char
  }
  return splicedName
}

const random14 = () => {
  return Math.round(Math.random() * 13)
}

const random10 = () => {
  return Math.round(Math.random() * 10 + 1)
}

const random5 = () => {
  return Math.round(Math.random() * 5)
}

const setQuebName = (firstName, lastName) => {
  const number = random10()
  // const number = 8
  const doubleFirstName = `${cutToFirstVowel(firstName)}${cutToFirstVowel(firstName).toLowerCase()}`
  const hypenatedFirstName = `${firstNames[random5()]}-${firstName}`
  const quadHyphenatedFirstName = `${firstNames[random5()]}-${firstName}-${firstNames[random5()]}-${firstNames[random5()]}`
  const hyphenatedLastName = `${surnames[random14()]}-${lastName}`
  const doubleHyphenatedLastName = `${surnames[random14()]}-${lastName}-${surnames[random14()]}`

  switch (number) {
    case 1:
      // i.e. Ti-Joseph Pelletier-Blais
      return `Ti-${firstName} ${hyphenatedLastName}`;
      case 2:
        // i.e. Jo Tremblay-Blais
        return `${cutToFirstVowel(firstName)} ${hyphenatedLastName}`;
      case 3:
        // i.e. Jojo Simard-Blais-Tremblay
        return `${doubleFirstName} ${doubleHyphenatedLastName}`;

      case 4:
        // i.e. Jean-Joseph Belanger-Blais
        return `${hypenatedFirstName} ${hyphenatedLastName}`;

      case 5:
        // i.e. Ti-Jo Richard-Blais-Poirier
        return `Ti-${cutToFirstVowel(firstName)} ${doubleHyphenatedLastName}`;

      case 6:
        // i.e. Casse-Croute Simard-Blais
        return `Casse-Croute ${hyphenatedLastName}`;

      case 7:
        // i.e. Ti-Jojo Su'a Brosse
        return `Ti-${doubleFirstName} Su'a Brosse`;

      case 8:
        // i.e. Philippe-Joseph-Philippe-Jean All Dress
        return `${quadHyphenatedFirstName} All Dress`;

      default:
        // i.e. Chicoutimi Steve
        return wildCards[random5()]
  }
}

export {setQuebName}