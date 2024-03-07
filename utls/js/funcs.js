let imgActiva="05";
let listaImag=['05','06','10','21','22','39','41','42','47']

function mostrarEnCarrusel(params,lugar) {
    document.getElementById("galeriaImg").src="utls/imgs/"+lugar+"/IMG-"+params+".jpg" ;
    let thumbsI=document.getElementById("thumbsSeccion").getElementsByTagName('img');
    for (const  elt of thumbsI)  {
    let claseTipo=elt.id==params ?"imagenScala20 active":"imagenScala20";
    elt.setAttribute('class',claseTipo)
    }
}

function toogleVw(dondeTxt,donde) {
  let lugar=document.getElementById(donde)
  let lugarTxt=document.getElementById(dondeTxt)
  if (lugarTxt.innerHTML=='Ampliar...') {
    lugar.style.display='block'
    lugarTxt.innerHTML='Ocultar...'
  } else {
    lugar.style.display='none'
    lugarTxt.innerHTML='Ampliar...'
  }
}

