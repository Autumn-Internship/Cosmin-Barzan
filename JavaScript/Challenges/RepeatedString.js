    // Total aparitii =
// Nr aparitii in sirul initial * (n / lg sir initial) 
//                         +
// Nr aparitii in sirul de lungime (n % lg sir initial)

function repeatedString(s, n) {
    let initialNbOfa = 0;
    let totalNbOfa = 0;

    for (const letter of s) {
        if (letter === 'a')
            initialNbOfa ++;
    }

    totalNbOfa = initialNbOfa * parseInt(n / s.length);

    const remainingString = s.substr(0, n % s.length);

    for (const letter of remainingString) {
        if (letter === 'a')
            totalNbOfa ++;
    }

    return totalNbOfa;
}