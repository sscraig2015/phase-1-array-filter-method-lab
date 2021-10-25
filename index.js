function findMatching(array, nameFiltered) {
    let matchingNames = array.filter(name => name.toUpperCase() === nameFiltered.toUpperCase())
    return matchingNames
}

function fuzzyMatch(array, startLet) {
    let matchingFirst = array.filter( name => name.startsWith(startLet)) 
    return matchingFirst
}

function matchName(array, inputName) {
    let matchingName = array.filter( array=> array.name === inputName)
    return matchingName
}

