let imgActiva="05";
let listaImag=['05','06','10','21','22','39','41','42','47']

let ciencia_invest_art=[
  { 
    "nomb":"Cultivo de Olivo en la Florida, una alternativa para la adaptación al cambio climático",
    "autor": ['Enrique Orestes Santos. Investigador independiente.',
              'Reinaldo Hanoi Valdés Reinoso. Doctor en Ciencias Forestales.',
              'Bertha Rita Castillo EduaDoctora en Ciencias Forestales.'],
    "ruta":"/sc-inv/articulo-publicado-rap05124.pdf"                    
}
]

// ciencia e investigacion

function cambioCiencia(params) {
  
  switch (params) {
      case 'picant':
          // olivos
          document.getElementById('cabeza-olivo').className=`oculto`
          // document.getElementById('de_olivo').className=`oculto`
          // otros
          document.getElementById('cabeza-otros').innerHTML=sals + prod_sals[0].nombre
          // ofrecemos
          document.getElementById('ofrece').innerHTML=prod_sals[0].ofrece
          document.getElementById('cabeza-otros').className=``
          // llenando
          llenarProdcc(prod_sals[0],'salsa')            
          break;
      case 'olivo-venta':
          // productos de olivos
          document.getElementById('cabeza-olivo').className=`oculto`
          // otros
          document.getElementById('cabeza-otros').innerHTML="Ventas de productos"
          document.getElementById('cabeza-otros').className=``
          llenarProdcc(prod_olive_venta[0],'aceites')
          break;
      case 'vino':
              // olivos
              document.getElementById('cabeza-olivo').className=`oculto`
              // document.getElementById('de_olivo').className=`oculto`
              // otros
              document.getElementById('cabeza-otros').innerHTML=vino + prod_vino[0].nombre
              // ofrecemos
              document.getElementById('ofrece').innerHTML=prod_vino[0].ofrece
          
              document.getElementById('cabeza-otros').className=`` 
              // llenando
              llenarProdcc(prod_vino[0],'vinos')               
              break;
      default:
          // articulos
          document.getElementById('cabeza-producto').innerHTML=` Art&iacute;culos`
          
          // llenar con fotos
         llenarAcc(ciencia_invest_art,'Identificadas')
          break;
  }
}

function llenarAcc(data,root) {
  // let prod_fotos=data.fotos,
  //     ponerCarousel=document.getElementById('thumbsSeccion')
  // llenar las imagenes
  // 1-vaciar
  // while (ponerCarousel.firstChild) {
  //     // The list is LIVE so it will re-index each call
  //     ponerCarousel.removeChild(ponerCarousel.firstChild);
  //   }
  // llenar el trip
  data.map(e =>{
      let imgVinc=document.createElement('img'),
          atta="'"+e+"','"+root+"'"

          imgVinc.setAttribute( 'src','utls/imgs/'+root+'/IMG-'+e+'.jpg')
          imgVinc.setAttribute('id','e')
          imgVinc.setAttribute('alt','ads')
          imgVinc.setAttribute('onclick','mostrarEnCarrusel('+atta+');')
          imgVinc.setAttribute('className',"imagenScala20")
     
      ponerCarousel.appendChild(imgVinc) 
  })
  // fotos
  // cambiar Foto Principal
  mostrarEnCarrusel(prod_fotos[0],root);
  // descripcion de ofrecemos
  document.getElementById('ofrece').innerHTML=data.ofrece
}


// fin ciencia e investigacion

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

