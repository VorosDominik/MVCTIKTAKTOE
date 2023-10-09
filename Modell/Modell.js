class Modell {
    #lista = [];
    #id;
    #allapot;
    #lepesszam;

    constructor() {
        this.#allapot = "x";
        this.#lepesszam = 0;
        this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    }

    setallapot(index) {
        
        if (this.#allapot === "X") {
          
            this.#allapot = "O";
        } else {
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista)
        this.#lepesszam++;
    }
    getErtek() {
        return this.#allapot;
      }
    fugolegesgyozelem(a){
       let legy=(this.#lista[0]===a &&this.#lista[3]===a &&this.#lista[6]===a)
       let lket=(this.#lista[1]===a &&this.#lista[4]===a &&this.#lista[7]===a)
       let lhar=(this.#lista[2]===a &&this.#lista[5]===a &&this.#lista[8]===a)
        if (legy || lket || lhar) {
            return true
        } else
        {return false}
    }
    ferdetema(a){
        let legy=(this.#lista[0]===a &&this.#lista[4]===a &&this.#lista[8]===a)
        let lket=(this.#lista[2]===a &&this.#lista[4]===a &&this.#lista[6]===a)
       
      
        if (legy || lket ) {
             return true
         } else
         {return false}
    }
    getvegevan() {
        let vEll= this.#vizszintesGyozelem();
         if (vEll.indexOf("OOO") > -1) {
           return "O nyert";
         } else if (vEll.indexOf("XXX") > -1) {
           return "X nyert";
         } else if (this.#lepesszam === 9) {
           return "Döntetlen!";
         }
         else if(this.fugolegesgyozelem("X") ){
            return "X nyert"
         }
         else if(this.fugolegesgyozelem("O") ){
            return "O nyert"
         }
         else if(this.ferdetema("X")){
            return "X nyert"
         }
         else if(this.ferdetema("O")){
            return "O nyert"
         }
         return `Ő jön: ${this.getErtek()}`;
       }
       #vizszintesGyozelem() {
     
         let vEll = "";
         for (let i = 0; i < 9; i++) {
           vEll += this.#lista[i];
           if (i % 3 === 2) {
             vEll += "@";
           }
         }
         vEll += "@";
         return vEll;
       }
     }
export default Modell;
