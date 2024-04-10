let prod_olive=[
    { "variedad":"Arbequina",
        "fotos": ['plantas_ventas','Arbequina'],
        "ofrece":"Aceite oliva Premium " 
    },
    { "variedad": "Arbosana",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Ascolana",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"",
        "morfo":""
    },
    {"variedad":"Kalamata",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"",
        "morfo":""
    },
    { "variedad":"Koroneiki",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Manzanilla",
        "fotos": ['plantas_ventas','Manzanilla'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Olivo Picual",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"La variedad de olivo Picual es la principal en España donde se cultivan más de 900.000 ha. El árbol es vigoroso, resistente al frío, y de maduración temprana, es muy sensible a la verticilosis. Su aceite es muy apreciado por su estabilidad y elevado contenido en ácido oleico. En algunas zonas se utiliza también el fruto como aceituna de mesa.",
        "morfo":"La variedad Picual participa en numerosas denominaciones de origen en toda España, como variedad principal o secundaria. Participa como parental en los programas de mejora genética del olivo de la universidad de Córdoba.",
        "desc":"Aceite de oliva de categoría superior, obtenido directamebte de aceitunas y solo mediante procedimientos mecánicos. 100% variedad Picual. Extracción en frío."
    },
    {"variedad":"Taggiasca",
        "fotos": ['05','10'],
        "ofrece":"Aceite oliva Premium ",
        "agro":"Árboles de gran porte, es de vigor alto, porte abierto-llorón y copa de media densidad. Adaptado a zona más costera o más elevada.  El olivo Taggiasca, se adapta bien a diversas condiciones, tanto pegando al mar como en zonas de mayor altitud. ",
        "morfo":"Destaca por sus buenas características productivas y la alta valoración del aceite y aceitunas producidos, es de entrada en producción precoz y de producción alta, obtiene producciones regulares. Es de floración mediay su polen es parcialmente autocompatible"
    }
]
let prod_olive_venta=[
                { "variedad":"Diferentes",
                    "fotos": ['05','10'],
                    "ofrece":"Planta de la variedad Sevillano",
                    "agro":"La variedad Arbequina es resistente al frío y a la salinidad, es susceptible a la clorosis férrica en terrenos con suelos muy calizos. También es sensible a la tuberculosis, verticilosis y a la mosca del olivo. ",
                    "morfo":"Árbol.	Bajo vigor con porte abierto y media densidad de copa.        Fruto.	Peso bajo, con forma esférica simétrica. Ápice redondeado y base truncada, sin pezón y pocas lenticelas.   Hoja.	De corta longitud, elíptica y medianamente ancha.        Hueso.	Con peso bajo, ovoide, simétrico, ápice y base redondeadas, y superficie rugosa."
                }] 
  
let prod_sals=[
    { "nombre":" Cubanito Picantico",
        "fotos": ['05','10'],
        "ofrece":"Que cosa mas rica",
        "agro":"ipsum"
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
            break;
        case 'Vacunos':
            // olivos
            document.getElementById('cabeza-olivo').className=`oculto`
            // otros
            document.getElementById('cabeza-otros').innerHTML=sals + params
            document.getElementById('cabeza-otros').className=``
            break;
        case 'Ovino-Caprino':
            // olivos
            document.getElementById('cabeza-olivo').className=`oculto`
            // otros
            document.getElementById('cabeza-otros').innerHTML=sals + params
            document.getElementById('cabeza-otros').className=``
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
                break;
        case 'Gansos':
                // olivos
                document.getElementById('cabeza-olivo').className=`oculto`
                // otros
                document.getElementById('cabeza-otros').innerHTML=vino + params
                document.getElementById('cabeza-otros').className=``
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

