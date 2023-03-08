

function calcularValores(){
    // input 
    const valor = [ document.getElementById ('dxFechamento'),document.getElementById('dxAbertura'),document.getElementById('dxMinima'),document.getElementById('dxMaxima'),document.getElementById('dolarFechamento'),document.getElementById('dolarAjuste')
    ]
    const valoresNumber = [Number (valor[0].value),Number (valor[1].value), Number (valor[2].value),Number (valor[3].value),Number (valor[4].value),Number (valor[5].value)
    ] 
    /* 
    valoresNumber[0] Fechamento do Dx
    valoresNumber[1] Abertura do DX
    valoresNumber[2] Maxima do Dx
    valoresNumber[3] Minima do Dx
    valoresNumber[4] Fechamento Dolar
    valoresNumber[5] Ajuste Dolar
    */
    function varPercentual (a,b){ return (((b-a)/a)*100)}
    function maxVariacao (a){ return ((a*(0,5/100)/10)+a)} 
    function minVariacao (a){ return ((a*(0,5/100)/10)-a)} 
    function resultadoDeVariacao(a,b){return (b*(a/100)+b) }
    let quadroDx = [
        varPercentual(valoresNumber[0],valoresNumber[1]),varPercentual(valoresNumber[0],valoresNumber[2]),varPercentual(valoresNumber[0],valoresNumber[3])
]
/*
  quadroDx[0] variação da abertura do DX
  quadroDx[1] variação da min Dx
  quadroDx[2] Variação da max Dx
*/
let abertuta = resultadoDeVariacao(quadroDx[0],valoresNumber[4])

    resdx.innerHTML = `<p id="dx">Max Abertura :${ maxVariacao(abertuta).toPrecision(6)} </p>  `
    resdx;dx.innerHTML += '<br>'
    resdx;dx.innerHTML += `Abertura :${ abertuta.toPrecision(6)}`
    resdx;dx.innerHTML += '<br>'
    resdx;dx.innerHTML += `Min Abertura :${ minVariacao(abertuta*-1).toPrecision(6)}`
    resdx;dx.innerHTML += '<br>'
    resdx;dx.innerHTML += `Min Dx: ${resultadoDeVariacao(quadroDx[1],valoresNumber[4]).toPrecision(6)}`
    resdx;dx.innerHTML += '<br>'
    resdx;dx.innerHTML += `Max Dx: ${resultadoDeVariacao(quadroDx[2],valoresNumber[4]).toPrecision(6)}`
   
    resab.innerHTML = `<p id="ab">Fechamento Dolar: ${valoresNumber[4]}</p> `
    resab;ab.innerHTML += '<br>'
    
    resaj.innerHTML = `<p id="aj">Max Ajuste ${maxVariacao(valoresNumber[5]).toPrecision(6)}</p> `
    resaj;aj.innerHTML += '<br>'
    resaj;aj.innerHTML += `Ajuste${valoresNumber[5]}`
    resaj;aj.innerHTML += '<br>'
    resaj;aj.innerHTML += `Min Ajuste ${minVariacao(valoresNumber[5]*-1).toPrecision(6)}`
/* 
console.log(resultadoDeVariacao(quadroDx[0],valoresNumber[4]).toPrecision(6))
console.log(resultadoDeVariacao(quadroDx[1],valoresNumber[4]).toPrecision(6))
console.log(resultadoDeVariacao(quadroDx[2],valoresNumber[4]).toPrecision(6))
console.log(valoresNumber[4])
console.log(maxVariacao(valoresNumber[5]).toPrecision(6))
console.log(valoresNumber[5])
console.log(minVariacao(valoresNumber[5]).toPrecision(6))
*/

}

