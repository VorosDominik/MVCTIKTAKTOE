import Modell from "../Modell/Modell.js";
import { Negyzet } from "../View/Negyzet.js";
import { INFO_PANEL } from "../View/INFO-PANEL.js";

export class Start {
    
    #elemLista=[]
    constructor() {
       
        
        this.MoDELL = new Modell();
        for (let index = 0; index < 9; index++) {
            this.Divelem = new Negyzet($("#ide"),index);
            
        }
        this.counter=0
        this.jatekvege=this.MoDELL.getvegevan()
        this.INFO =new INFO_PANEL($("#tabla"),$("#allapot"),"X kezd")
         

        // Az eseménykezelőt kívül, a konstruktoron kívül definiáljuk
       
       
     
       
        do {
            $(window).on("kivalaszt", (event) => {
                if (this.counter>0) {
                    this.INFO.Allapotszovcsere(this.jatekvege)
                }
                this.MoDELL.setallapot(event.detail.getindex());
                event.detail.SetErtek(this.MoDELL.getErtek());
                this.counter++
                this.jatekvege=this.MoDELL.getvegevan()
                
                
              
    
              
                
            });
            
            
        } while (this.jatekvege==="O nyert"|| this.jatekvege==="X nyert"||this.jatekvege==="Döntetlen!");
        this.INFO.Allapotszovcsere(this.jatekvege)
    }
    
};

