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
        "fotos": ['aceites','10'],
        "ofrece":"Aceites de oliva <b>Extra Virgen</b>. Oh! Premium olive Oil "                    
    }
] 
  
let prod_sals=[
    { "nombre":" Cubanito Picantico",
        "fotos": ['salsa-inflable','salsa-variantes'],
        "ofrece":"Que cosa mas rica",
        "facebook":'https://www.facebook.com/cubanitopicantico/?locale=es_LA',
        "url":"https://cubanitopicantico.com/"
    }
]
let prod_vino=[
    { "nombre":" Canna Vinus",
        "fotos": ['05','10'],
        "ofrece":"Producto de alta calidad y que sirve para",
        "agro":"ipsum"
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
    }
}

