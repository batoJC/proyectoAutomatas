//VARIABLES DE ESTADO
/********************/
var estadoEmisor = null;
var emisor = 'publico'; // 0
var estadoReceptor = null;
var receptor = 'publico'; // 1




//funciones para hacer el movimiento en el automata
/**************************************************/
const iniciar = () => {
    
}


const cambiarEstado = (transicion,estadoId,ente) => {

    //evaluar transicion para cambiar el estado del otro ente
    /*******************************************************/
    evaluar(transicion,ente);

    let idEnte = (ente == 0 )? 'Emisor' : 'Receptor';
    $('#botones'+idEnte).html('');

    switch (transicion) {
        case 'l':
            let mensaje = prompt('Ingrese el mensaje:');
            $('#mensaje'+idEnte).text($('#mensaje'+idEnte).text() + mensaje  + '\n');
            $('#mensaje'+idEnte).animate({ scrollTop: $('#mensaje'+idEnte)[0].scrollHeight}, 1000);
            break;
        case 'n':
            (ente == 0 )? cambiarEstado ('','q0',1) : cambiarEstado ('','q0',0);
            $('#mensajeEmisor').html('');
            $('#mensajeReceptor').html('');
            break;
        case 'v':
            (ente == 0 )? cambiarEstado ('','q0',1) : cambiarEstado ('','q0',0);
            $('#mensajeEmisor').html('');
            $('#mensajeReceptor').html('');
            break;
    }

    //organizar texto para mostrar en consola
    let estado = estados[estadoId];
    let leyenda = '';
    if(estadoEmisor != null && estadoReceptor != null && transicion != ""){
        // leyenda = transicion + '      >>>    ' + ((ente == 0) ? estadoEmisor : estadoReceptor).transiciones.find((data)=>{
        //         return data.id == transicion;
        // }).descripcion + '\n';
    }
    leyenda += estadoId + '    >>>    ' + estado.descripcion + '\n';
    if(estado.inicial){
        leyenda += 'Estado inicial.\n';
    }
    if(estado.aceptador){
        leyenda += 'Estado Aceptador.\n';
    }else{
        leyenda += 'Estado No Aceptador.\n';
    }

    $('#consola'+idEnte).text($('#consola'+idEnte).text() + leyenda  + '\n');
    $('#consola'+idEnte).animate({ scrollTop: $('#consola'+idEnte)[0].scrollHeight}, 1000);

    console.log(estado.transiciones);
    for (let i = 0; i < estado.transiciones.length; i++) {
        let nombreEnte = (ente == 0 )? emisor : receptor;
        if (estado.transiciones[i].restricciones.length > 4){
            if(estado.transiciones[i].restricciones.includes(nombreEnte)){
                if(ente == 0 ){
                    agregarBoton(estado.transiciones[i],ente);
                }else{
                    agregarBoton(estado.transiciones[i],ente);
                }
            }
        }else{  
            if(ente == 0 ){
                if(estado.transiciones[i].condiciones.length > 4 ){
                    if(estado.transiciones[i].condiciones.includes(receptor)){
                        agregarBoton(estado.transiciones[i],ente);
                    }
                }else{
                    agregarBoton(estado.transiciones[i],ente);
                }
            }else{
                agregarBoton(estado.transiciones[i],ente);
            }
        }
    }

    if (ente == 0) {//emisor
        estadoEmisor = estado;
    }else{//receptor
        estadoReceptor = estado;
    }

}

const agregarBoton = (data,ente) => {
    let id = (ente == 0 )? 'Emisor' : 'Receptor';
    $('#botones'+id).append(`
        <button onclick="cambiarEstado('${data.id}','${data.estado}',${ente});" class="boton">${data.descripcion}</button>
    `);
}

const cambiarEnte = (ente,cual) => {
    let leyenda = ente.toUpperCase();
    $('#consola'+cual).text($('#consola'+cual).text() + leyenda  + '\n\r');
    $('#consola'+cual).animate({ scrollTop: $('#consola'+cual)[0].scrollHeight}, 1000);
    if (cual == 'Emisor') {//0
        emisor = ente;
        cambiarEstado ('','q0',0);
    }else{//1
        receptor = ente;
        cambiarEstado ('','q0',1);
    }
}


const evaluar = (transicion,ente) => {
    console.log(transicion);
    let aux = (ente == 0)? 1 : 0;

    //hacer sonar el otro ente
    if(transicion == 'i1' || transicion ==  'i2' || transicion ==  'i3' || transicion ==  'i4' || transicion ==  'i5'){
        cambiarEstado ('o','q17',aux);
    }

    //contestar
    if(transicion == 'p' || transicion ==  'p1' || transicion ==  'q' ){
        cambiarEstado ('j',((aux == 0) ? estadoEmisor : estadoReceptor).transiciones.find((data)=>{
            return data.id == 'j';
        }).estado,aux);
    }


    // rechazar o hacer caso omiso al llamado
    if(transicion == 'r'){
        cambiarEstado ('k','q16',aux);
    }

    if(transicion == 'λ'){
        if ((ente == 0) ? emisor : receptor != 'casa'){
            cambiarEstado ('k','q16',aux);
        }
    }

}


//INICIAR LOS VALORES INICIALES
/*****************************/
cambiarEstado ('','q0',0);
cambiarEstado ('','q0',1);
