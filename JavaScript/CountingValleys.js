function countingValleys(steps, path) {
    let nbOfValleys = 0;
    let level = 0;
    
    for (const step of path) {
        if (step === 'D')
            level --;
        else 
        {
            level ++;
            if (level === 0)
                nbOfValleys ++;
        }
    }
    
    return nbOfValleys;
}