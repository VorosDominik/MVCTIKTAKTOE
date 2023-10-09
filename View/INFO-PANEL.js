export class INFO_PANEL {

  constructor(szulelem,szulelem2,helyzet) {
    this.szulelem = szulelem;
    this.szulelem2= szulelem2;
    this.xcounter =0
    this.Ocounter =0
    this.helyzet=helyzet;

    this.tablazat()
    this.interaktivallapot()
  }

  tablazat() {
    var txt = ``;
    txt += `        <tr>
    <th>X-Kapitány<---------</th>
    <th>-------->Kör-Bajnok</th>
</tr>
<tr>
    <td>${this.xcounter}<----------</td>
    <td>---------->${this.Ocounter}</td>
</tr>

</table>`;

this.szulelem.append(txt)
  }
  interaktivallapot(){
    let szoveg=""
    szoveg += `${this.helyzet} `;
    this.szulelem2.append(szoveg)
  }
  Allapotszovcsere(szov){
    this.szulelem2.text(szov)
  }

}
