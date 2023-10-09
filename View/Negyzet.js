export class Negyzet{
    #index
    katintahto;
    constructor(szuloelem,index){
        
        this.szuloelem=szuloelem;
        this.#index=index
        this.katintahto=true
        this.#htmlOszerak()
        this.elem = $(".elem:last-child")
        this.Pelem= this.elem.children("p")
        this.elem.on("click",()=>{
            if (this.katintahto){
            this.#sajatesemenykezelo("kivalaszt")
            this.katintahto=false;
            }
        })
      
        
    }
 
   
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev,{detail:this})
        window.dispatchEvent(esemenyem) 
    }
    SetErtek(jel){
        this.Pelem.html(jel)
    }
    getindex(){
        return this.#index
    }
    setKatinthatoF(){
        this.katintahto=false
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