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
            console.log("O történt")
            this.#allapot = "O";
        } else {
            this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista)
        this.#lepesszam++;
    }
    getvegevane(){
        this.#viszintesgyozelem();
        if (this.#lepesszam===9){
            return true;
        }
        return false;
      
    }

    getErtek() {
        return this.#allapot;
    }
    #viszintesgyozelem(){
        let vell=""
       
            for (let j = 0; j < 9; j++) {
                vell+=this.#lista[j]
              if(j%3===2){
                vell+="@"
              }
            
           
            
        }
        console.log(vell)
    }
}

export default Modell;
