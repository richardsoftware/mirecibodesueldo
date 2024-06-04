function calcularSueldo() {
    const nombre = document.getElementById('name').value;
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const horas50 = parseFloat(document.getElementById('horas50').value);
    const horasFeriado = parseFloat(document.getElementById('horasFeriado').value);
    const horasNocturnas = parseFloat(document.getElementById('horasNocturnas').value);

    const sueldo = 356000.00;
    const adicionalRemunerativo = 123000.00;
    const adicionalAntiguedad = 4790.00 * antiguedad;
    const presentismo = 112000.00;
    const viaticos = 219000.00;
    const hsExtras50 = horas50 * 4468.43;
    const hsExtras100 = horasFeriado * 5957.90;
    const adNocturnidad = horasNocturnas * 483.79;
    const sumaNoRemunerativa = 30000.00;

    const totalHaberesConAportes = sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo + hsExtras50 + hsExtras100 + adNocturnidad;
    const totalHaberesSinAportes = sumaNoRemunerativa + viaticos;
    //const totalDeduccionesNuevo = (jubilacion+ley+sindicato+personal+obrasocial+redondeo); // Prueba


    const jubilacion = (totalHaberesConAportes * 0.11).toFixed(2)
    const ley = (totalHaberesConAportes * 0.03).toFixed(2);
    const sindicato = 0;
    const personal = 66.52;
    const obrasocial = ((totalHaberesConAportes+sumaNoRemunerativa)* 0.03).toFixed(2);
    const redondeo = -0.05;

    const totalDeducciones = (totalHaberesConAportes + totalHaberesSinAportes) * 0.10; // Asumiendo el 20% de deducciones totales
    //const totalDeduccionesNuevo = (jubilacion+ley+sindicato+personal+obrasocial+redondeo); // Asumiendo el 20% de deducciones totales

    const totalAPagar = totalHaberesConAportes + totalHaberesSinAportes - totalDeducciones;

    document.getElementById('result').innerHTML = `
        <h2>Detalle del Sueldo</h2>
        <p>Nombre: ${nombre}</p>
        <table>
            <tr><td>1000</td><td>Sueldo</td><td>1.00</td><td>$ ${sueldo.toFixed(2)}</td></tr>
            <tr><td>1002</td><td>Adicional Remunerativo</td><td>1.00</td><td>$ ${adicionalRemunerativo.toFixed(2)}</td></tr>
            <tr><td>1030</td><td>Adicional Antigüedad</td><td>1</td><td>$ 4.790,00</td><td>$ ${adicionalAntiguedad.toFixed(2)}</td></tr>
            <tr><td>1245</td><td>Adic.Presentismo CCT</td><td>1.00</td><td>$ ${presentismo.toFixed(2)}</td></tr>
            <tr><td>1460</td><td>VIAT.CCT.VIG</td><td>30</td><td>7300,00</td><td>$ ${viaticos.toFixed(2)}</td></tr>
            <tr><td>2000</td><td>Hs. Extras 50 %</td><td>${horas50}</td><td>4468,43</td><td>$ ${hsExtras50.toFixed(2)}</td></tr>
            <tr><td>2015</td><td>Hs. Extras 100 %</td><td>${horasFeriado}</td><td>5957,90</td><td>$ ${hsExtras100.toFixed(2)}</td></tr>
            <tr><td>2140</td><td>Ad.Esp.por Nocturnidad</td><td>${horasNocturnas}</td><td>483,79</td><td>$ ${adNocturnidad.toFixed(2)}</td></tr>
            <tr><td>5400</td><td>Suma No Remunerativa</td><td>30</td><td>1000,00</td><td>$ ${sumaNoRemunerativa.toFixed(2)}</td></tr>
        </table>
        <br>
        <table>
            <tr><td>6010</td><td>Jubilacion</td><td>11%</td><td>$ ${jubilacion}</td></tr>
            <tr><td>6020</td><td>Ley 19.032</td><td>3%</td><td>$ ${ley}</td></tr>
            <tr><td>6050</td><td>Sindicato</td><td>3%</td><td>$ ${sindicato}</td></tr>
            <tr><td>6100</td><td>Asociacion de Personal</td><td>1.00</td><td>$ ${personal}</td></tr>
            <tr><td>6175</td><td>Obra Social</td><td>3%</td><td>$ ${obrasocial}</td></tr>
            <tr><td>7500</td><td>Ajuste Redondeo (-)</td><td>1.00</td><td>$ ${redondeo}</td></tr>
        </table>
        <br>
        <p><strong>TOTAL HABERES CON APORTES: $${totalHaberesConAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL HABERES SIN APORTES: $${totalHaberesSinAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL DEDUCCIONES: $${totalDeducciones.toFixed(2)}</strong></p>
        
        <h3><strong>TOTAL A PAGAR: $${totalAPagar.toFixed(2)}</strong></h3>
    `;
}
