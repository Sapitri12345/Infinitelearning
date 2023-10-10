function luas(alas, tinggi) {
    if (alas <= 0 || tinggi <= 0) {
        return "Alas dan tinggi harus lebih besar dari nol";
      }
    
      const luas = 0.5 * alas * tinggi;
      return luas;
}

console.log(luas(2, 6));