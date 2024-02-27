let prod_olive=[
    { "variedad":"Arbequina",
        "fotos": ['05','10'],
        "ofrece":"Aceite y fruta comercial",
        "agro":"La variedad Arbequina es resistente al frío y a la salinidad, es susceptible a la clorosis férrica en terrenos con suelos muy calizos. También es sensible a la tuberculosis, verticilosis y a la mosca del olivo. ",
        "morfo":"Árbol.	Bajo vigor con porte abierto y media densidad de copa.        Fruto.	Peso bajo, con forma esférica simétrica. Ápice redondeado y base truncada, sin pezón y pocas lenticelas.   Hoja.	De corta longitud, elíptica y medianamente ancha.        Hueso.	Con peso bajo, ovoide, simétrico, ápice y base redondeadas, y superficie rugosa."
    },
    { "variedad": "Arbosana",
        "fotos": ['05','10'],
        "ofrece":"",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Ascolana",
        "fotos": ['05','10'],
        "ofrece":"",
        "agro":"",
        "morfo":""
    },
    {"variedad":"Kalamata",
        "fotos": ['05','10'],
        "ofrece":"",
        "agro":"",
        "morfo":""
    },
    { "variedad":"Koroneiki",
        "fotos": ['05','10'],
        "ofrece":"",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Manzanilla",
        "fotos": ['05','10'],
        "ofrece":"",
        "agro":"",
        "morfo":""
    },
    { "variedad": "Olivo Picual",
        "fotos": ['05','10'],
        "ofrece":"Aceite",
        "agro":"La variedad de olivo Picual es la principal en España donde se cultivan más de 900.000 ha. El árbol es vigoroso, resistente al frío, y de maduración temprana, es muy sensible a la verticilosis. Su aceite es muy apreciado por su estabilidad y elevado contenido en ácido oleico. En algunas zonas se utiliza también el fruto como aceituna de mesa.",
        "morfo":"La variedad Picual participa en numerosas denominaciones de origen en toda España, como variedad principal o secundaria. Participa como parental en los programas de mejora genética del olivo de la universidad de Córdoba."
    },
    {"variedad":"Taggiasca",
        "fotos": ['05','10'],
        "ofrece":"Madera",
        "agro":"Árboles de gran porte, es de vigor alto, porte abierto-llorón y copa de media densidad. Adaptado a zona más costera o más elevada.  El olivo Taggiasca, se adapta bien a diversas condiciones, tanto pegando al mar como en zonas de mayor altitud. ",
        "morfo":"Destaca por sus buenas características productivas y la alta valoración del aceite y aceitunas producidos, es de entrada en producción precoz y de producción alta, obtiene producciones regulares. Es de floración mediay su polen es parcialmente autocompatible"
    }
]

function llenarProdcc(params) {
    let prod=prod_olive[params]
    // fotos
    // ofrecemos
    document.getElementById('ofrece').innerHTML=prod.ofrece
    // agro
    document.getElementById('agro').innerHTML=prod.agro
    // morfo
    document.getElementById('morfo').innerHTML=prod.morfo
}

function cambioProdcc(params) {
    let gan="Ganaderia: ",  corral="Aves: "
    switch (params) {
        case 'Cerdos':
            // olivos
            document.getElementById('cabeza-olivo').className=`oculto`
            // otros
            document.getElementById('cabeza-otros').innerHTML=gan + params
            document.getElementById('cabeza-otros').className=``
            break;
        case 'Vacunos':
            // olivos
            document.getElementById('cabeza-olivo').className=`oculto`
            // otros
            document.getElementById('cabeza-otros').innerHTML=gan + params
            document.getElementById('cabeza-otros').className=``
            break;
        case 'Ovino-Caprino':
            // olivos
            document.getElementById('cabeza-olivo').className=`oculto`
            // otros
            document.getElementById('cabeza-otros').innerHTML=gan + params
            document.getElementById('cabeza-otros').className=``
            break;
        case 'Pollos':
                // olivos
                document.getElementById('cabeza-olivo').className=`oculto`
                // otros
                document.getElementById('cabeza-otros').innerHTML=corral + params
                document.getElementById('cabeza-otros').className=``
                break;
        case 'Gansos':
                // olivos
                document.getElementById('cabeza-olivo').className=`oculto`
                // otros
                document.getElementById('cabeza-otros').innerHTML=corral + params
                document.getElementById('cabeza-otros').className=``
                break;
        default:
            // olivos
            document.getElementById('cabeza-olivo').className=``
            // otros
            document.getElementById('cabeza-otros').className=`oculto`
            break;
    }
}

