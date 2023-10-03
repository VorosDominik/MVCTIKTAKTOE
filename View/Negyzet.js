export class Negyzet{
    #index
    constructor(szuloelem,index){
        
        this.szuloelem=szuloelem;
        this.#index=index
        this.#htmlOszerak()
        this.elem = $(".elem:last-child")
        this.Pelem= this.elem.children("p")
        this.elem.on("click",()=>{
            console.log("valami")
            this.#sajatesemenykezelo("kivalaszt")
        })
      
        
    }
   
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemenyem) 
    }
    SetErtek(jel){
        this.Pelem.html(jel)
    }
    #htmlOszerak(){
        let txt=""
        txt+=`<div class="elem">
        <p></p>
    
   
        </div>`
     txt+=""
        this.szuloelem.append(txt);
    }
}