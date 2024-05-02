let imgActiva="05";
let listaImag=['05','06','10','21','22','39','41','42','47']

let ciencia_invest_art=[
  { 
    "nomb":"Cultivo de Olivo en la Florida, una alternativa para la adaptación al cambio climático",
    "autor": ['Enrique Orestes Santos. Investigador independiente.',
              'Reinaldo Hanoi Valdés Reinoso. Doctor en Ciencias Forestales.',
              'Bertha Rita Castillo EduaDoctora en Ciencias Forestales.'],
    "ruta":"utls/sc-inv/articulo-publicado-rap05124.pdf",
    "ico":"utls/sc-inv/paper-64.ico"
}
]

// ciencia e investigacion
function cambioCiencia(params) {
  
  switch (params) {
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

/**
 * The `fillLiterature` function creates a card structure for literature data with an icon, title, and
 * link.
 * @param literatureData - The `literatureData` parameter seems to be an object containing information
 * about a piece of literature. It likely includes properties such as: name,source,type of literature
 * @param literaturaIcoClass - The `literaturaIcoClass` parameter in the `fillLiterature` function is
 * used to specify the CSS class that will be applied to the icon element representing the type of
 * document in the literature card. This class will determine the styling of the icon, such as its
 * size
 * @returns The `fillLiterature` function is returning a `div` element that contains a card for
 * literature data. The card includes an icon, a link to the literature document, and the title of the
 * literature document.
 */
function fillLiterature(literatureData,literaturaIcoClass) {
  //crear estructura cuerpo tarjeta Documento
  // imagen-tipo-literatura {enlace-doc > imagen-tipo-doc-extension año-doc titulo-doc} 

  //dentro de la tarjeta completa, el nombre
  let literatureCard_p = document.createElement('p');

  //dentro de la tarjeta completa, agrego el icono del tipo de Doc
  let doc_tipo_ico = document.createElement("img");
  doc_tipo_ico.src = literatureData.ico;//poner icono lugar valor
  doc_tipo_ico.className = literaturaIcoClass;//poner icono clase valor

  literatureCard_p.appendChild(doc_tipo_ico);//agrego dentro de la tarjeta completa, agrego el icono del tipo de Doc
  
  //dentro de la tarjeta completa, el icono
  let doc_pdfLink = document.createElement("a");  
  doc_pdfLink.href =literatureData.ruta;  

  let titulo=document.createElement('span')
  titulo.innerHTML='&nbsp; '+literatureData.nomb
  doc_pdfLink.appendChild(titulo);//agrego espacio entre img y vinculo

  literatureCard_p.appendChild(doc_pdfLink);//agrego dentro de la tarjeta completa, enlace de Doc 
 
//crear el div
  let div_literatura = document.createElement("div");
  div_literatura.appendChild(literatureCard_p);//agrego dentro de la tarjeta completa, agrego el p

  return div_literatura;

}


function crearAccStack(param) {
  let div_row=document.createElement('div')//creando eleto row
    div_row.setAttribute( 'class','row')
    let algo=fillLiterature(param,'imgArt')
    div_row.appendChild(algo)
    let div_row_inside=document.createElement('div')//creando eleto row de bg-success text-white
    //div_row_inside.setAttribute( 'class','bg-success text-white')
    let div_row_inside_h4=document.createElement('h4')//creando eleto row de bg-success text-white
        div_row_inside_h4.className='bg-success text-white'
        div_row_inside_h4.innerHTML=param.nomb
    let div_row_inside_ref=document.createElement('a')//creando eleto row de bg-success text-white
        div_row_inside_ref.href=param.ruta
        //imagen
          let div_row_inside_ref_img=document.createElement('img')//creando eleto row de bg-success text-white
          div_row_inside_ref_img.src=param.ico
          div_row_inside_ref_img.alt=param.nomb
          div_row_inside_ref.appendChild(div_row_inside_ref_img) 
          let art_ref=document.createElement('p')//creando eleto row de bg-success text-white
          art_ref.innerHTML= param.nomb.substring(0,10)+'...'
          div_row_inside_ref.appendChild(art_ref)

      div_row_inside.appendChild(div_row_inside_h4)//incorporar h4
      div_row_inside.appendChild(div_row_inside_ref)//incorporar vinculo

    div_row.appendChild(div_row_inside)//incorporar row_inside
  return div_row
}

function llenarAcc(data,root) {
  let prod_fotos=data.fotos,
      ponerDatos=document.getElementById('producto-oferta')
  // llenar las imagenes
  // 1-vaciar
  while (ponerDatos.firstChild) {
      // The list is LIVE so it will re-index each call
      ponerDatos.removeChild(ponerDatos.firstChild);
    }
  // llenar el trip
  data.map(e =>{    
      ponerDatos.appendChild(crearAccStack(e)) 
  }) 
  // descripcion de ofrecemos
 // document.getElementById('ofrece').innerHTML=data.ofrece
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

