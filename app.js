for (let i = 1; i <= 20; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} -> Frontend Simplified`); 
    }
    else if (i % 5 == 0) {
        console.log(`${i} -> Simplified`);
    }
    else if (i % 3 == 0) {
        console.log(`${i} -> Frontend`);
    }
    else{
        console.log(`${i} -> ${i}`);
    }
    
}