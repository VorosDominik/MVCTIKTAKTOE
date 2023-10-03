class Modell{
#lista =[];
#id;
#allapot;
constructor(){

this.#allapot="x"


}
setallapot(){
    console.log("probalt erteket adni")
if (this.#allapot==="x"){
    this.#allapot= "O";
} else {
 this.#allapot="X"
}
}
getErtek(){
return this.allapot
}


}
export default Modell;