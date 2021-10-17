function sockMerchant(n, ar) {
    let nbOfSocksPerColors = new Array(101).fill(0);
    let nbOfPairs = 0;
    
    ar.forEach((color) => {
        nbOfSocksPerColors[color] ++;
    })
    
    nbOfSocksPerColors.forEach((nbOfSocks) => {
        nbOfPairs += parseInt(nbOfSocks / 2);
    })
    
    return nbOfPairs;
}