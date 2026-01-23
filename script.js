// Actualizado 27/01/2026 - versión mejorada CHATGPT
document.getElementById('calculateBtn').addEventListener('click', calcular);

function num(id){return Number(document.getElementById(id).value)||0}
function money(v){return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS'}).format(v)}

function addRow(rows,label,val){if(Math.abs(val)>0)rows.push({label,val})}

function calcular(){
    const sueldo=867200;
    const presentismo=165000;
    const viaticos=473800;
    const sumaNoRem=10000;

    const antig=num('antiguedad');
    const faltas=num('faltas');
    const adelanto=num('adelanto');

    const antMonto=sueldo*0.01*antig;
    const descFalta=faltas>0?-(sueldo/30):-0;

    const totalHab=sueldo+presentismo+viaticos+sumaNoRem+antMonto+descFalta;
    const deducciones=totalHab*0.17+adelanto;
    const neto=Math.round(totalHab-deducciones);

    const rows=[];
    addRow(rows,'Sueldo básico',sueldo);
    addRow(rows,'Antigüedad',antMonto);
    addRow(rows,'Presentismo',presentismo);
    addRow(rows,'Viáticos',viaticos);
    addRow(rows,'Suma no remunerativa',sumaNoRem);
    addRow(rows,'Descuento inasistencia',descFalta);
    addRow(rows,'Adelanto',-adelanto);

    const res=document.getElementById('result');
    res.innerHTML='<h2>Detalle</h2>';

    const t=document.createElement('table');
    rows.forEach(r=>{
        const tr=document.createElement('tr');
        tr.innerHTML=`<td>${r.label}</td><td class="amount">${money(r.val)}</td>`;
        t.appendChild(tr);
    })
    res.appendChild(t);
    res.innerHTML+=`<h3>Total a pagar: ${money(neto)}</h3>`;

    res.scrollIntoView({behavior:'smooth'});
}




























document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calculateBtn');
    const reset = document.getElementById('resetBtn');
    btn.addEventListener('click', calcularSueldo);
    reset.addEventListener('click', () => document.getElementById('salaryForm').reset());
});

function toNum(id){
    const v = Number(document.getElementById(id).value);
    return isFinite(v) ? v : 0;
}

function formatMoney(value){
    // Formateo local argentino con símbolo ARS
    try{
        return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:2}).format(value);
    }catch(e){
        return '$ ' + value.toFixed(2);
    }
}

function addRowIfNotZero(rowsArray, code, label, qty, amount){
    // Consideramos como cero valores muy próximos a 0
    if(Math.abs(Number(amount)) > 0.005){
        rowsArray.push({code, label, qty, amount});
    }
}

function calcularSueldo(){
    const nombre = (document.getElementById('name').value || '').trim();
    const antiguedad = toNum('antiguedad');
    const horas50 = toNum('horas50');
    const horasFeriado = toNum('horasFeriado');
    const horasNocturnas = toNum('horasNocturnas');
    const faltas = toNum('faltas');
    const adelanto = toNum('adelanto');
    const dias = 30;

    // Valores base (puedes parametrizar más adelante)
    const sueldo = 867200;
    const adicionalRemunerativo = 0;
    const presentismo = 165000;
    const sumaNoRemunerativa = 10000;
    let viaticosBase = 473800;

    // Cálculos
    const adicionalAntiguedad = ((sueldo + adicionalRemunerativo) * 0.01) * antiguedad;

    const diasTrabajados = Math.max(0, dias - faltas);
    const viaticoDiario = viaticosBase / dias;
    const viaticos = diasTrabajados * viaticoDiario;

    let descPresentismo = 0;
    let inasistencia = 0;
    if(faltas !== 0){
        descPresentismo = -presentismo;
        inasistencia = - (sueldo + adicionalRemunerativo + adicionalAntiguedad) / dias;
    }

    const hsExtras50 = horas50 * ((sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo) * 0.0075);
    const hsExtras100 = (horasFeriado / 2) * ((sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo) * 0.01);
    const adNocturnidad = horasNocturnas * ((sueldo + adicionalRemunerativo + adicionalAntiguedad) * 0.001);

    const totalHaberesConAportes = sueldo + adicionalRemunerativo + adicionalAntiguedad + presentismo + descPresentismo + hsExtras50 + hsExtras100 + adNocturnidad + inasistencia;
    const totalHaberesSinAportes = sumaNoRemunerativa + viaticos;

    // Deducciones
    const jubilacion = totalHaberesConAportes * 0.11;
    const ley = totalHaberesConAportes * 0.03;
    const sindicato = 0;
    const personal = 0;
    const obrasocial = (totalHaberesConAportes + sumaNoRemunerativa) * 0.03;

    const totalDeducciones = jubilacion + ley + sindicato + personal + obrasocial + adelanto;
    const totalAPagar = totalHaberesConAportes + totalHaberesSinAportes - totalDeducciones;
    const totalRedondo = Math.round(totalAPagar);
    const redondeo1 = totalRedondo - totalAPagar;

    // Construyo filas, pero solo incluyo las que tienen monto != 0
    const filasHaberes = [];
    addRowIfNotZero(filasHaberes, '1000', 'Sueldo', 1, sueldo);
    addRowIfNotZero(filasHaberes, '1002', 'Adicional Remunerativo', 1, adicionalRemunerativo);
    addRowIfNotZero(filasHaberes, '1030', 'Adicional Antigüedad', antiguedad, adicionalAntiguedad);
    addRowIfNotZero(filasHaberes, '1245', 'Adic. Presentismo', 1, presentismo);
    addRowIfNotZero(filasHaberes, '1247', 'Desc. Presentismo', 1, descPresentismo);
    addRowIfNotZero(filasHaberes, '1460', 'Viáticos', diasTrabajados, viaticos);
    addRowIfNotZero(filasHaberes, '2000', 'Hs. 50 %', horas50, hsExtras50);
    addRowIfNotZero(filasHaberes, '2015', 'Hs. Feriado', horasFeriado, hsExtras100);
    addRowIfNotZero(filasHaberes, '2140', 'Hs. Nocturnas', horasNocturnas, adNocturnidad);
    addRowIfNotZero(filasHaberes, '2870', 'Desc. Inasistencia', faltas, inasistencia);
    addRowIfNotZero(filasHaberes, '5210', 'Desc. Adelanto', 1, -Math.abs(adelanto));
    addRowIfNotZero(filasHaberes, '5400', 'Suma No Remunerativa', 1, sumaNoRemunerativa);

    const filasDeducciones = [];
    addRowIfNotZero(filasDeducciones, '6010', 'Jubilación', '11%', -jubilacion);
    addRowIfNotZero(filasDeducciones, '6020', 'Ley 19.032', '3%', -ley);
    addRowIfNotZero(filasDeducciones, '6050', 'Sindicato', '3%', -sindicato);
    addRowIfNotZero(filasDeducciones, '6100', 'Asociación de Personal', '', -personal);
    addRowIfNotZero(filasDeducciones, '6175', 'Obra Social', '3%', -obrasocial);
    addRowIfNotZero(filasDeducciones, '7500', 'Ajuste Redondeo', '1', redondeo1);

    // Renderizado dinámico
    const result = document.getElementById('result');
    result.innerHTML = '';

    const header = document.createElement('div');
    header.innerHTML = `<h2>Detalle del Sueldo — Mes: Enero 2026</h2><p>Nombre: ${escapeHtml(nombre) || '—'}</p>`;
    result.appendChild(header);

    // Haberes
    const wrap1 = document.createElement('div');
    wrap1.className = 'table-wrap';
    const table1 = document.createElement('table');
    const tbody1 = document.createElement('tbody');
    for(const r of filasHaberes){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td style="width:72px">${r.code}</td><td class="label">${r.label}</td><td style="width:80px; text-align:center">${r.qty}</td><td class="amount">${formatMoney(Number(r.amount))}</td>`;
        tbody1.appendChild(tr);
    }
    table1.appendChild(tbody1);
    wrap1.appendChild(table1);
    result.appendChild(wrap1);

    // Deducciones
    const wrap2 = document.createElement('div');
    wrap2.className = 'table-wrap';
    const table2 = document.createElement('table');
    const tbody2 = document.createElement('tbody');
    for(const r of filasDeducciones){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td style="width:72px">${r.code}</td><td class="label">${r.label}</td><td style="width:80px; text-align:center">${r.qty}</td><td class="amount">${formatMoney(Number(r.amount))}</td>`;
        tbody2.appendChild(tr);
    }
    table2.appendChild(tbody2);
    wrap2.appendChild(table2);
    result.appendChild(wrap2);

    // Totales
    const totals = document.createElement('div');
    totals.style.marginTop = '12px';
    totals.innerHTML = `
        <p><strong>TOTAL HABERES CON APORTES: ${formatMoney(totalHaberesConAportes)}</strong></p>
        <p><strong>TOTAL HABERES SIN APORTES: ${formatMoney(totalHaberesSinAportes)}</strong></p>
        <p><strong>TOTAL DEDUCCIONES: ${formatMoney(totalDeducciones)}</strong></p>
        <h3 style="margin-top:6px"><strong>TOTAL A PAGAR: ${formatMoney(totalRedondo)}</strong></h3>
    `;
    result.appendChild(totals);

    // Al terminar, hago un scroll suave hacia arriba del resultado para que se vea completo
    setTimeout(()=>{
        result.scrollIntoView({behavior:'smooth', block:'start'});
    }, 80);
}

function escapeHtml(str){
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
}
