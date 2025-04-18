function calcularSueldo() {
    const nombre = document.getElementById('name').value;
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const horas50 = parseFloat(document.getElementById('horas50').value);
    const horasFeriado = parseFloat(document.getElementById('horasFeriado').value);
    const horasNocturnas = parseFloat(document.getElementById('horasNocturnas').value);
    const faltas = parseFloat(document.getElementById('faltas').value);
    const adelanto = parseFloat(document.getElementById('adelanto').value);
    const dias = 30;

    const sueldo = 702225; //(685000)
    const adicionalRemunerativo = 26280; //123000(0)
    let adicionalAntiguedad = ((sueldo + adicionalRemunerativo) * 0.01) * antiguedad;
    let presentismo = 140000; //(135000)
    let descPresentismo = 0; //0
    let viaticos = 403700;//(385000)
    let viaticoDiario = viaticos / dias;

    let diasTrabajados = dias - faltas; //29
    viaticos = diasTrabajados * viaticoDiario; //29 x 7300
    let inasistencia = 0; //dia descontado

    if(faltas != 0){
        //se ejecuta si tiene 1 o mas faltas
        console.log("Tiene faltas");
        presentismo = 140000;
        descPresentismo = -140000;
        inasistencia = -(sueldo + adicionalRemunerativo + adicionalAntiguedad)/30; //-17723

        }
        else{
            //se ejecuta si faltas = 0
            console.log("No tiene faltas");
            presentismo = 140000;
            descPresentismo = 0;
            inasistencia = 0;
        }

    let hsExtras50 = horas50 * ((sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo) * 0.0075); //variable 4827.68
    let hsExtras100 = (horasFeriado / 2) * ((sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo) * 0.01); //variable 6436.90
    let adNocturnidad = horasNocturnas * ((sueldo + adicionalRemunerativo + adicionalAntiguedad) * 0.001); //variable 531.69
    let sumaNoRemunerativa = 0; //diasTrabajados * 1000; //30000

    let totalHaberesConAportes = sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo + descPresentismo + hsExtras50 + hsExtras100 + adNocturnidad + inasistencia;
    let totalHaberesSinAportes = sumaNoRemunerativa + viaticos;

    //Calculo Deducciones adelanto se ingresa por teclado
    let jubilacion = (totalHaberesConAportes * 0.11);
    let ley = (totalHaberesConAportes * 0.03);
    let sindicato = 0;
    let personal = 440.09; //116,07
    let obrasocial = ((totalHaberesConAportes + sumaNoRemunerativa) * 0.03);


    let totalDeducciones = (jubilacion + ley + sindicato + personal + obrasocial + adelanto); // Descuentos
    let totalAPagar = totalHaberesConAportes + totalHaberesSinAportes - totalDeducciones;
    let totalRedondo = Math.round(totalAPagar);
    let redondeo1 = totalRedondo - totalAPagar;

    document.getElementById('result').innerHTML = `
        <h2>Detalle del Sueldo     Mes: Marzo 2025 Nueva Paritaria</h2>
        <p>Nombre: ${nombre}</p>
        <table>
            <tr><td>1000</td><td>Sueldo</td><td>1</td><td>$ ${sueldo.toFixed(2)}</td></tr>
            <tr><td>1002</td><td>Adicional Remunerativo</td><td>1</td><td>$ ${adicionalRemunerativo.toFixed(2)}</td></tr>
            <tr><td>1030</td><td>Adicional Antigüedad</td><td>${antiguedad}</td><td>$ ${adicionalAntiguedad.toFixed(2)}</td></tr>
            <tr><td>1245</td><td>Adic.Presentismo</td><td>1</td><td>$ ${presentismo.toFixed(2)}</td></tr>
            <tr><td>1247</td><td>Desc.Presentismo</td><td>1</td><td>$ ${descPresentismo.toFixed(2)}</td></tr>
            <tr><td>1460</td><td>Viáticos</td><td>${diasTrabajados}</td><td>$ ${viaticos.toFixed(2)}</td></tr>
            <tr><td>2000</td><td>Hs. 50 %</td><td>${horas50}</td><td>$ ${hsExtras50.toFixed(2)}</td></tr>
            <tr><td>2015</td><td>Hs. Feriado</td><td>${horasFeriado}</td><td>$ ${hsExtras100.toFixed(2)}</td></tr>
            <tr><td>2140</td><td>Hs. Nocturnas</td><td>${horasNocturnas}</td><td>$ ${adNocturnidad.toFixed(2)}</td></tr>
            <tr><td>2870</td><td>Desc. Inasistencia</td><td>${faltas}</td><td>$ ${inasistencia.toFixed(2)}</td></tr>
            <tr><td>5210</td><td>Desc. Adelanto</td><td></td><td>$ ${adelanto.toFixed(2)}</td></tr>
            <tr><td>5400</td><td>Suma No Remunerativa</td><td></td><td>$ ${sumaNoRemunerativa.toFixed(2)}</td></tr>
        </table>
        <br>
        <table>
            <tr><td>6010</td><td>Jubilación</td><td>11%</td><td></td><td></td><td></td><td>$ ${jubilacion.toFixed(2)}</td></tr>
            <tr><td>6020</td><td>Ley 19.032</td><td>3%</td><td></td><td></td><td></td><td>$ ${ley.toFixed(2)}</td></tr>
            <tr><td>6050</td><td>Sindicato</td><td>3%</td><td></td><td></td><td></td><td>$ ${sindicato.toFixed(2)}</td></tr>
            <tr><td>6100</td><td>Asociación de Personal</td><td>1</td><td></td><td></td><td></td><td>$ ${personal}</td></tr>
            <tr><td>6175</td><td>Obra Social</td><td>3%</td><td></td><td></td><td></td><td>$ ${obrasocial.toFixed(2)}</td></tr>
            <tr><td>7500</td><td>Ajuste Redondeo</td><td>1</td><td></td><td></td><td></td><td>$ ${redondeo1.toFixed(2)}</td></tr>
        </table>
        <br>
        <p><strong>TOTAL HABERES CON APORTES: $${totalHaberesConAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL HABERES SIN APORTES: $${totalHaberesSinAportes.toFixed(2)}</strong></p>
        <p><strong>TOTAL DEDUCCIONES: $${totalDeducciones.toFixed(2)}</strong></p>
        <h3><strong>TOTAL A PAGAR: $${totalRedondo.toFixed(2)}</strong></h3>
    `;
}
