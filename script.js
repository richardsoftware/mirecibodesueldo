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
