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
        if(vell.indexOf("OOO")>-1){
            console.log("O nyert")
            return true;
        }   
        else if(vell.indexOf("XXX")>-1){
            console.log("X nyert")
            return true;
        }
            else if (this.#lepesszam===9){
                console.log("Döntetlen")
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
        vell +="@"
        
        console.log(vell)
        console.log(vell.indexOf("OOO"),vell.indexOf("XXX"))
        return vell
    }
}

export default Modell;
