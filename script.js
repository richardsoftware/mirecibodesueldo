function calcularSueldo() {
    const nombre = document.getElementById('name').value;
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const horas50 = parseFloat(document.getElementById('horas50').value);
    const horasFeriado = parseFloat(document.getElementById('horasFeriado').value);
    const horasNocturnas = parseFloat(document.getElementById('horasNocturnas').value);
    const dias = 30;

    const sueldo = 356000.00;//356000
    const adicionalRemunerativo = 123000;//123000
    let adicionalAntiguedad = ((sueldo + adicionalRemunerativo)* 0.01) * antiguedad;
    const presentismo = 112000.00;//1120000
    const viaticos = 219000.00;//219000
    let viaticoDiario = viaticos / 30 ;//219000 dividido 30

    let hsExtras50 = horas50 * ((sueldo + adicionalAntiguedad + presentismo)* 0.0075);//variable 4468.43
    let hsExtras100 = (horasFeriado/2) * ((sueldo + adicionalAntiguedad + presentismo)* 0.01);//variable 5957.90
    let adNocturnidad = horasNocturnas * ((sueldo + adicionalAntiguedad)* 0.001);//variable 483.79
    const sumaNoRemunerativa = 30000.00;//30000

    let totalHaberesConAportes = sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo + hsExtras50 + hsExtras100 + adNocturnidad;
    let totalHaberesSinAportes = sumaNoRemunerativa + viaticos;

    let jubilacion = (totalHaberesConAportes * 0.11);
    let ley = (totalHaberesConAportes * 0.03);
    let sindicato = 0;
    let personal = 66.52;//66.52
    let obrasocial = ((totalHaberesConAportes+sumaNoRemunerativa)* 0.03);

    let totalDeducciones = (jubilacion + ley + sindicato + personal + obrasocial); // Descuentos
    let totalAPagar = totalHaberesConAportes + totalHaberesSinAportes - totalDeducciones;
    let totalRedondo = Math.round(totalAPagar);
    let redondeo1 = totalRedondo - totalAPagar;
    
    document.getElementById('result').innerHTML = `
        <h2>Detalle del Sueldo     Mes: Mayo 2024</h2>
        <p>Nombre: ${nombre}</p>
        <table>
            <tr><td>1000</td><td>Sueldo</td><td>1</td><td>$ ${sueldo.toFixed(2)}</td></tr>
            <tr><td>1002</td><td>Adicional Remunerativo</td><td>1</td><td>$ ${adicionalRemunerativo.toFixed(2)}</td></tr>
            <tr><td>1030</td><td>Adicional Antigüedad</td><td>${antiguedad}</td><td>$ ${adicionalAntiguedad.toFixed(2)}</td></tr>
            <tr><td>1245</td><td>Adic.Presentismo CCT</td><td>1</td><td>$ ${presentismo.toFixed(2)}</td></tr>
            <tr><td>1460</td><td>VIAT.CCT.VIG</td><td>${dias}</td><td>$ ${viaticos.toFixed(2)}</td></tr>
            <tr><td>2000</td><td>Hs. 50 %</td><td>${horas50}</td><td>$ ${hsExtras50.toFixed(2)}</td></tr>
            <tr><td>2015</td><td>Hs. Feriado</td><td>${horasFeriado}</td><td>$ ${hsExtras100.toFixed(2)}</td></tr>
            <tr><td>2140</td><td>Hs. Nocturnas</td><td>${horasNocturnas}</td><td>$ ${adNocturnidad.toFixed(2)}</td></tr>
            <tr><td>5400</td><td>Suma No Remunerativa</td><td></td><td>$ ${sumaNoRemunerativa.toFixed(2)}</td></tr>
        </table>
        <br>
        <table>
            <tr><td>6010</td><td>Jubilacion</td><td>11%</td><td></td><td></td><td></td><td>$ ${jubilacion}</td></tr>
            <tr><td>6020</td><td>Ley 19.032</td><td>3%</td><td></td><td></td><td></td><td>$ ${ley}</td></tr>
            <tr><td>6050</td><td>Sindicato</td><td>3%</td><td></td><td></td><td></td><td>$ ${sindicato}</td></tr>
            <tr><td>6100</td><td>Asociacion de Personal</td><td>1</td><td></td><td></td><td></td><td>$ ${personal}</td></tr>
            <tr><td>6175</td><td>Obra Social</td><td>3%</td><td></td><td></td><td></td><td>$ ${obrasocial}</td></tr>
            <tr><td>7500</td><td>Ajuste Redondeo</td><td>1</td><td></td><td></td><td></td><td>$ ${redondeo1.toFixed(2)}</td></tr>
        </table>
        <br>
        <p><strong>TOTAL HABERES CON APORTES: $${totalHaberesConAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL HABERES SIN APORTES: $${totalHaberesSinAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL DEDUCCIONES: $${totalDeducciones.toFixed(2)}</strong></p>
        <h3><strong>TOTAL A PAGAR: $${totalRedondo.toFixed(2)}</strong></h3>
    `;
}