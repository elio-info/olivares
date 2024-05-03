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

let prodactv_trabj=[
    { 
        "fotos": ['trab-01','trab-02','trab-03','trab-04','trab-05','trab-06','trab-07','trab-08'],
        "ofrece":"Un lugar de para&iacute;so, donde tambi&eacute;n se trabaja..."
    }
]
let prodactv_visita=[
    { 
        "fotos": ['vst-01','vst-02','vst-03','vst-04','vst-05','vst-06','vst-07','vst-08','vst-09'],
        "ofrece":"Para&iacute;so de visita, donde tambi&eacute;n se relaja..."
    }
]
function llenarProdcc(data,root) {
    let prod_fotos=data.fotos,
        ponerCarousel=document.getElementById('thumbsSeccion')
    // llenar las imagenes
    // 1-vaciar
    while (ponerCarousel.firstChild) {
        // The list is LIVE so it will re-index each call
        ponerCarousel.removeChild(ponerCarousel.firstChild);
      }
    // llenar el trip
    prod_fotos.map(e =>{
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
            case 'visit':
            // otros
            document.getElementById('cabeza-otros').innerHTML=prodactv_visita[0].ofrece
            document.getElementById('cabeza-otros').className=``
            llenarProdcc(prodactv_visita[0],'act-visita')
            break;
        case 'trab':
                // otros
                document.getElementById('cabeza-otros').innerHTML=prodactv_trabj[0].ofrece
                document.getElementById('cabeza-otros').className=`` 
                llenarProdcc(prodactv_trabj[0],'act-trabajo')               
                break;
        
    }
}

