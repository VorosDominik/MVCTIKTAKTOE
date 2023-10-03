import Modell from "../Modell/Modell.js";
import { Negyzet } from "../View/Negyzet.js";

class Start {
    
    #elemLista=[]
    constructor() {

        this.MoDELL = new Modell();
        for (let index = 0; index < 9; index++) {
            this.Divelem = new Negyzet($("#ide"),index);
            
        }
        

        // Az eseménykezelőt kívül, a konstruktoron kívül definiáljuk
        $(window).on("kivalaszt", (event) => {
            this.MoDELL.setallapot(event.detail.getindex());
            event.detail.SetErtek(this.MoDELL.getErtek());

            let jatekvege=this.MoDELL.getvegevane()
            if (jatekvege) {
                console.log("vege a dalnak")
            }
        });
    }
}

export default Start;