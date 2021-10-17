function jumpingOnClouds(c) {    
    let i = 0;
    let nbOfJumps = 0;
    
    while (i != c.length - 1) {
        c[i+2] === 0 ? i += 2 : i ++
        nbOfJumps ++;
    }
    
    return nbOfJumps;
}