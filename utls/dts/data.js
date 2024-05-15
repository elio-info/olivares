let prod_olive=[
    { "variedad":"Arbequina",
        "fotos": ['plantas_ventas','Arbequina','ejemplo','ejemplo-v'],
        "ofrece":"Aceite oliva Premium " 
    },
    { "variedad": "Arbosana",
        "fotos": ['plantas_ventas','Arbosana','ejemplo-v','ejemplo'],
        "ofrece":"Aceite oliva Premium "
    },
    { "variedad": "Ascolana",
        "fotos": ['plantas_ventas','Ascolana','ejemplo','ejemplo-v'],
        "ofrece":"Aceite oliva Premium "
    },
    {"variedad":"Kalamata",
        "fotos": ['plantas_ventas','Kalamata','ejemplo','ejemplo-v'],
        "ofrece":"Aceite oliva Premium "
    },
    { "variedad":"Koroneiki",
        "fotos": ['plantas_ventas','Koroneiki','ejemplo-v','ejemplo'],
        "ofrece":"Aceite oliva Premium "
    },
    { "variedad": "Manzanilla",
        "fotos": ['plantas_ventas','Manzanilla','ejemplo-v','ejemplo'],
        "ofrece":"Aceite oliva Premium "
    },
    { "variedad": "Olivo Picual",
        "fotos": ['plantas_ventas','Picual','ejemplo','ejemplo-v'],
        "ofrece":"Aceite oliva Premium "       
    },
    {"variedad":"Taggiasca",
        "fotos": ['plantas_ventas','Taggiasca','ejemplo','ejemplo-v'],
        "ofrece":"Aceite oliva Premium "
    }
]
let prod_olive_venta=[
    { "variedad":"Oh! Aceite",
        "fotos": ['01','aceite-evoo-02','aceite-evoo-01','aceite-oh-white','aceite-oh-black','vista-05'],
        "ofrece":"Aceites de oliva <b>Extra Virgen</b>. Oh! Premium olive Oil "                    
    }
] 
  
let prod_sals=[
    { "nombre":" Cubanito Picantico",
        "fotos": ['salsa-inflable2','salsa-variantes','salsa-ico2'],
        "ofrece":"Que cosa mas rica",
        "facebook":'https://www.facebook.com/cubanitopicantico/?locale=es_LA',
        "url":"https://cubanitopicantico.com/"
    }
]
let prod_vino=[
    { "nombre":" Canna Vinus",
        "fotos": ['vino-copa','vino-01'],
        "ofrece":"Producto de alta calidad y que sirve para",
        "agro":"ipsum"
    }
]

let prodactv=[
    { 
        'nomb':"Servicio Harvest Host",        
        "fotos": [],
        "ofrece":'Nuestra plataforma fácil de usar hace que el alojamiento sea fácil y requiere un tiempo mínimo, por lo que puede obtener ingresos adicionales fácilmente mientras se concentra en administrar su negocio.' 
    }
,
    { 
        "fotos": ['vst-01','vst-02','vst-03','vst-04','vst-05','vst-06','vst-07','vst-08','vst-09'],
         "ofrece":'Podrá recorrer toda la finca y recibirá una explicación del proceso productivo de la misma, desde las plantas que se cultivan y la finalidad de las mismas hasta los animales que viven en ella y como es su vida.Para&iacute;so de visita, donde tambi&eacute;n se relaja...',
        'nomb':"Visitas Guiadas "
    }
       ,
    { 
        "fotos": ['trab-01','trab-02','trab-03','trab-04','trab-05','trab-06','trab-07','trab-08'],
        "ofrece":'Se le darán tareas sencillas para que experimente el proceso de trabajar en una finca y entiendan el valor que tiene este trabajo. Realizaran actividades como quitar malas hierbas a los cultivos, dar de comer a los animales, cepillarlos, incluso pueden jugar con ellos. Un lugar de para&iacute;so, donde tambi&eacute;n se trabaja...',
        'nomb':"Trabajo en la finca "
    }
 ,   { 
        "fotos": [],
        "ofrece":'Se le proporcionara una canasta en la cual va a recoger frutas y verduras las cuales van a utilizar en una merienda o picnic, solo van a recolectar la cantidad suficiente para comer y se les hablara del desarrollo sostenible.',
        'nomb':"Recogida de frutas y verduras "
    }
,
    { 
        "fotos": [],
         "ofrece":'Se ofrecen actividades educativas para ampliar el conocimiento de los visitantes en temas como el cuidado de animales, sostenibilidad y desarrollo sostenible, agricultura ecológica, como el cambio climático ha afectado la zona y talleres de cocina.',
        'nomb':"Actividades educativas "
    }
    ,
    { 
        "fotos": [],
        "ofrece":'Los visitantes disfrutaran de paseos a caballo, degustación de alimentos y bebidas típicas, observación de estrellas, entre otras opciones.',
        'nomb':"Turismo Rural"
    }
 
]

function delAllElmts(params) {
    while (params.firstChild) {
        // The list is LIVE so it will re-index each call
        params.removeChild(params.firstChild);
      }
}

function createImg_withLink(idImg,srcLink,altImg,fncClk,clss) {
    let imgVinc=document.createElement('img')
            
    imgVinc.setAttribute( 'src',srcLink)
    imgVinc.setAttribute('id',idImg)
    imgVinc.setAttribute('alt',altImg)
    imgVinc.setAttribute('onclick',fncClk)
    imgVinc.setAttribute('className',clss)
    return imgVinc
}

function llenarProdcc(data,root) {
    let prod_fotos=data.fotos,
        ponerCarousel=document.getElementById('thumbsSeccion')
    // llenar las imagenes
    // 1-vaciar
    delAllElmts(ponerCarousel)
    // llenar el trip    
    // fotos length()
    if (prod_fotos.length>0 ) { //tiene datos y fotos
        prod_fotos.map(e =>{ 
        src= 'utls/imgs/'+root+'/IMG-'+e+'.jpg' 
        atta="'"+e+"','"+root+"'"
        fncClk="mostrarEnCarrusel("+atta+");"
        clss="imagenScala20"
                
        let imgVinc= createImg_withLink('e',src,'Old Olive',fncClk,clss)
        ponerCarousel.appendChild(imgVinc) 
        })
        // cambiar Foto Principal
        mostrarEnCarrusel(prod_fotos[0],root);
    } else { //vacio
        document.getElementById("galeriaImg").src = 'utls/imgs/enConstrucc.PNG';//poner icono lugar valor            
    }
    
    // descripcion de ofrecemos
    document.getElementById('ofrece').innerHTML=data.ofrece
}

function cambioProdcc(params) {
    let sals="Salsas: ",  vino="Vinos: "
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
            // olivos
            document.getElementById
            ('cabeza-olivo').className=``
            // ocultar otros
            document.getElementById('cabeza-otros').className=`oculto`
            // llenar con fotos
           llenarProdcc(prod_olive[0],'Identificadas')
            break;
        case 'hhost':
            // algo
            document.getElementById('cabeza-otros').innerHTML=prodactv[0].nomb
            llenarProdcc(prodactv[0],'act-hhost')
            break;            
            
        case 'visit':
            // otros
            document.getElementById('cabeza-otros').innerHTML=prodactv[1].nomb
            document.getElementById('cabeza-otros').className=``
            llenarProdcc(prodactv[1],'act-visita')
            break;
        case 'trab':
            // otros
            document.getElementById('cabeza-otros').innerHTML=prodactv[2].nomb
            document.getElementById('cabeza-otros').className=`` 
            llenarProdcc(prodactv[2],'act-trabajo')               
            break;
        case 'recog':
            // algo
            document.getElementById('cabeza-otros').innerHTML=prodactv[3].nomb
            // llenar datos
           llenarProdcc(prodactv[3],'act-recog')
           break;
        case "edu":// algo
            document.getElementById('cabeza-otros').innerHTML=prodactv[4].nomb
            //  llenar datos
           llenarProdcc(prodactv[4],'act-recog')
            break;
        case "t_ru": // algo
            document.getElementById('cabeza-otros').innerHTML=prodactv[5].nomb
            // llenar datos
            llenarProdcc(prodactv[5],'act-turr')
            break;   
    }
}

