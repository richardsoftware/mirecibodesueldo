function calcularSueldo() {
    const nombre = document.getElementById('name').value;
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const horas50 = parseFloat(document.getElementById('horas50').value);
    const horasFeriado = parseFloat(document.getElementById('horasFeriado').value);
    const horasNocturnas = parseFloat(document.getElementById('horasNocturnas').value);
    const dias = 30;

    const sueldo = 274000.00;//356000
    const adicionalRemunerativo = 0;//123000
    const adicionalAntiguedad = (sueldo * 0.01) * antiguedad;
    const presentismo = 57000.00;//1120000
    const viaticos = 70000.00;//219000
    const hsExtras50 = horas50 * ((sueldo + adicionalAntiguedad + presentismo)* 0.0075);//variable 4468.43
    const hsExtras100 = (horasFeriado/2) * ((sueldo + adicionalAntiguedad + presentismo)* 0.01);//variable 5957.90
    const adNocturnidad = horasNocturnas * ((sueldo + adicionalAntiguedad)* 0.001);//variable 483.79
    const sumaNoRemunerativa = 89000.00;//30000
    const viaticoDiario = viaticos / 30 ;//30000

    const totalHaberesConAportes = sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo + hsExtras50 + hsExtras100 + adNocturnidad;
    const totalHaberesSinAportes = sumaNoRemunerativa + viaticos;

    const jubilacion = (totalHaberesConAportes * 0.11);
    const ley = (totalHaberesConAportes * 0.03);
    const sindicato = 0;
    const personal = 35.39;//66.52
    const obrasocial = ((totalHaberesConAportes+sumaNoRemunerativa)* 0.03);
    const redondeo = -0.25;

    const totalDeducciones = (jubilacion + ley + sindicato + personal + obrasocial + redondeo); // Descuentos
    const totalAPagar = totalHaberesConAportes + totalHaberesSinAportes - totalDeducciones;

    /*Tipos de datos de las variables y constantes*/
    console.log(typeof nombre);    // "string"
    console.log(typeof antiguedad);    // "number"
    console.log(typeof horas50);    // "number"
    console.log(typeof horasFeriado);    // "number"
    console.log(typeof horasNocturnas);    // "number"
    console.log(typeof dias);    // "number"

    console.log(typeof sueldo);    // "number"
    console.log(typeof adicionalRemunerativo);    // "number"
    console.log(typeof adicionalAntiguedad);    // "number"
    console.log(typeof presentismo);    // "number"

    console.log(typeof viaticos);    // "number"
    console.log(typeof hsExtras50);    // "number"
    console.log(typeof hsExtras100);    // "number"
    console.log(typeof adNocturnidad);    // "number"
    console.log(typeof sumaNoRemunerativa);    // "number"
    console.log(typeof viaticoDiario);    // "number"

    console.log(typeof totalHaberesConAportes);    // "number"
    console.log(typeof totalHaberesSinAportes);    // "number"

    console.log(typeof jubilacion);    // "number"
    console.log(typeof ley);    // "number"
    console.log(typeof sindicato);    // "number"
    console.log(typeof personal);    // "number"
    console.log(typeof obrasocial);    // "number"
    console.log(typeof redondeo);    // "number"

    console.log(typeof totalDeducciones);    // "number"
    console.log(typeof totalAPagar);    // "number"

    document.getElementById('result').innerHTML = `
        <h2>Detalle del Sueldo     Mes: Mayo 2024</h2>
        <p>Nombre: ${nombre}</p>
        <table>
            <tr><td>1000</td><td>Sueldo</td><td>1.00</td><td>$ ${sueldo.toFixed(2)}</td></tr>
            <tr><td>1002</td><td>Adicional Remunerativo</td><td>1.00</td><td>$ ${adicionalRemunerativo.toFixed(2)}</td></tr>
            <tr><td>1030</td><td>Adicional Antigüedad</td><td>${antiguedad}</td><td>$ ${adicionalAntiguedad.toFixed(2)}</td></tr>
            <tr><td>1245</td><td>Adic.Presentismo CCT</td><td>1.00</td><td>$ ${presentismo.toFixed(2)}</td></tr>
            <tr><td>1460</td><td>VIAT.CCT.VIG</td><td>${dias}</td><td></td><td>$ ${viaticos.toFixed(2)}</td></tr>
            <tr><td>2000</td><td>Hs. Horas 50 %</td><td>${horas50}</td><td>$ ${hsExtras50.toFixed(2)}</td></tr>
            <tr><td>2015</td><td>Hs. Horas Feriado</td><td>${horasFeriado}</td><td>$ ${hsExtras100.toFixed(2)}</td></tr>
            <tr><td>2140</td><td>Horas Nocturnas</td><td>${horasNocturnas}</td><td>$ ${adNocturnidad.toFixed(2)}</td></tr>
            <tr><td>5400</td><td>Suma No Remunerativa</td><td>30</td><td></td><td>$ ${sumaNoRemunerativa.toFixed(2)}</td></tr>
        </table>
        <br>
        <table>
            <tr><td>6010</td><td>Jubilacion</td><td>11%</td><td></td><td></td><td></td><td>$ ${jubilacion}</td></tr>
            <tr><td>6020</td><td>Ley 19.032</td><td>3%</td><td></td><td></td><td></td><td>$ ${ley}</td></tr>
            <tr><td>6050</td><td>Sindicato</td><td>3%</td><td></td><td></td><td></td><td>$ ${sindicato}</td></tr>
            <tr><td>6100</td><td>Asociacion de Personal</td><td>1.00</td><td></td><td></td><td></td><td>$ ${personal}</td></tr>
            <tr><td>6175</td><td>Obra Social</td><td>3%</td><td></td><td></td><td></td><td>$ ${obrasocial}</td></tr>
            <tr><td>7500</td><td>Ajuste Redondeo (-)</td><td>1.00</td><td></td><td></td><td></td><td>$ ${redondeo}</td></tr>
        </table>
        <br>
        <p><strong>TOTAL HABERES CON APORTES: $${totalHaberesConAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL HABERES SIN APORTES: $${totalHaberesSinAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL DEDUCCIONES: $${totalDeducciones.toFixed(2)}</strong></p>
        <h3><strong>TOTAL A PAGAR: $${totalAPagar.toFixed(2)}</strong></h3>
    `;
}