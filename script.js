function AreaRetangulo(){
    let x=Number (prompt("Informe o valor Hvc"));
    let y=Number (prompt("Informe o valor B"));
    let resultado=x*y;
    res='O resultado da área é ' +resultado+ 'm²'
    alert(res)
    document.getElementById('a_ret').innerHTML=res
}

function AreaTriangulo(){
    let x=Number (prompt("Informe o valor de b (base)"));
    let y=Number (prompt("Informe o valor de h (altura)"));
    let resultado=x*y/2;
    res='O resultado da área é ' +resultado+ 'm²'
    alert(res)
    document.getElementById('a_tri').innerHTML=res
}

function AreaCirculo(){
    let pi=Math.PI;
    let x=Number (prompt("Informe o valor do raio"));
    let resultado=pi*x**2;
    res='O resultado da área é ' +resultado+ 'm²'
    alert(res)
    document.getElementById('a_cir').innerHTML=res
}

function AreaTrapezio(){
    let b=Number (prompt("Informe o valor de b (base menor)"));
    let B=Number (prompt("Informe o valor de B (base maior)"));
    let h=Number (prompt("Informe o valor de h (altura)"));
    let resultado=(b+B)*h/2;
    res='O resultado da área é ' +resultado+ 'm²'
    alert(res)
    document.getElementById('a_tra').innerHTML=res
}

function AreaLosango(){
    let D=Number (prompt("Informe o valor da diagonal maior (D)"));
    let d=Number (prompt("Informe o valor da diagonal menor (d)"));
    let resultado=D*d/2;
    res='O resultado da área é ' +resultado+ 'm²'
    alert(res)
    document.getElementById('a_los').innerHTML=res
}