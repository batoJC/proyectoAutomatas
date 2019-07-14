// ESTRUCTURA PARA LOS ESTADOS
/*****************************/
var estados = {
    //inicio estado q0
    'q0': {
        descripcion: 'Colgado',
        inicial : true,
        aceptador: true,
        transiciones: [
            {
                id: 'a',
                descripcion: 'desbloquear celular',
                restricciones: ['celular'],
                condiciones: [],
                estado: 'q1'
            },
            {
                id: 'o',
                descripcion: 'recibir llamada',
                restricciones : ['oficina','casa','celular'],
                condiciones: ['oficina','casa','celular'],
                estado: 'q17'
            },
            {
                id: 'd',
                descripcion: 'levantar teléfono',
                restricciones : ['oficina','casa'],
                condiciones: [],
                estado: 'q4'
            },
            {
                id: 'c',
                descripcion: 'levantar teléfono publico',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q3'
            }
        ]
    },
    //fin estado q0

    //inicio estado q1
    'q1': {
        descripcion: 'Celular desbloqueado',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'b',
                descripcion: 'abrir app de llamadas',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q2'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q1

    //inicio estado q2
    'q2': {
        descripcion: 'App de llamadas',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'i2',
                descripcion: 'marcar a teléfono',
                restricciones : [],
                condiciones: ['oficina','casa'],
                estado: 'q11'
            },
            {
                id: 'i3',
                descripcion: 'marcar a celular',
                restricciones : [],
                condiciones: ['celular'],
                estado: 'q11'
            },
            {
                id: 'i4',
                descripcion: 'marcar de agenda',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q11'
            },
            {
                id: 'i5',
                descripcion: 'marcar de recientes',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q11'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q2

    //inicio estado q3
    'q3': {
        descripcion: 'Esperando moneda',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'e',
                descripcion: 'ingresar moneda',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q4'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q3

    //inicio estado q4
    'q4': {
        descripcion: 'Esperando tono',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'h',
                descripcion: 'tono casa',
                restricciones : ['casa'],
                condiciones: [],
                estado: 'q7'
            },
            {
                id: 'g',
                descripcion: 'tono publico',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q6'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'f',
                descripcion: 'tono oficina',
                restricciones : ['oficina'],
                condiciones: [],
                estado: 'q5'
            }
        ]
    },
    //fin estado q4

    //inicio estado q5
    'q5': {
        descripcion: 'Marcar de teléfono de oficina',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'i1',
                descripcion: 'marcar extensión',
                restricciones : [],
                condiciones: ['oficina'],
                estado: 'q8'
            },
            {
                id: 'i2',
                descripcion: 'marcar a teléfono',
                restricciones : [],
                condiciones: ['casa','oficina'],
                estado: 'q8'
            },
            {
                id: 'i3',
                descripcion: 'marcar a celular',
                restricciones : [],
                condiciones: ['celular'],
                estado: 'q8'
            }
        ]
    },
    //fin estado q5

    //inicio estado q6
    'q6': {
        descripcion: 'Marcar de teléfono publico',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'e',
                descripcion: 'ingresar moneda',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q6'
            },
            {
                id: 'i2',
                descripcion: 'marcar a telefono',
                restricciones : [],
                condiciones: ['oficina','casa'],
                estado: 'q9'
            },
            {
                id: 'i3',
                descripcion: 'marcar a celular',
                restricciones : [],
                condiciones: ['celular'],
                estado: 'q9'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            },
        ]
    },
    //fin estado q6

    //inicio estado q7
    'q7': {
        descripcion: 'Marcar de telefono de casa',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'i2',
                descripcion: 'marcar a telefono',
                restricciones : [],
                condiciones: ['oficina','casa'],
                estado: 'q10'
            },
            {
                id: 'i3',
                descripcion: 'marcar a celular',
                restricciones : [],
                condiciones: ['celular'],
                estado: 'q10'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q7

    //inicio estado q8
    'q8': {
        descripcion: 'Marcando de oficina',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'k',
                descripcion: 'enviado a buzón',
                restricciones : [],
                condiciones: [],
                estado: 'q16'
            },
            {
                id: 'j',
                descripcion: 'contestan',
                restricciones : [],
                condiciones: ['oficina','casa','celular'],
                estado: 'q13'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q8

    //inicio estado q9
    'q9': {
        descripcion: 'Marcando de publico',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'e',
                descripcion: 'ingresar moneda',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q9'
            },
            {
                id: 'k',
                descripcion: 'enviado a buzón',
                restricciones : [],
                condiciones: [],
                estado: 'q16'
            },
            {
                id: 'j',
                descripcion: 'contestan',
                restricciones : [],
                condiciones: ['oficina','casa','celular'],
                estado: 'q12'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q9

    //inicio estado q10
    'q10': {
        descripcion: 'Marcando de casa',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'k',
                descripcion: 'enviado a buzón',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q16'
            },
            {
                id: 'j',
                descripcion: 'contestan',
                restricciones : [],
                condiciones: ['oficina','casa','celular'],
                estado: 'q14'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q10

    //inicio estado q11
    'q11': {
        descripcion: 'Marcando de celular',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'k',
                descripcion: 'enviado a buzón',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q16'
            },
            {
                id: 'j',
                descripcion: 'contestan',
                restricciones : [],
                condiciones: ['oficina','casa','celular'],
                estado: 'q15'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'm',
                descripcion: 'error en llamada',
                restricciones : [],
                condiciones: [],
                estado: 'q2'
            }
        ]
    },
    //fin estado q11

    //inicio estado q12
    'q12': {
        descripcion: 'En llamada publico',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'l',
                descripcion: 'hablar',
                restricciones : [],
                condiciones: [],
                estado: 'q12'
            },
            {
                id: 'i1',
                descripcion: 'marcar extensión',
                restricciones : [],
                condiciones: ['oficina'],
                estado: 'q12'
            },
            {
                id: 'e',
                descripcion: 'ingresar moneda',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q12'
            },
            {
                id: 'v',
                descripcion: 'saldo insuficiente',
                restricciones : ['publico'],
                condiciones: [],
                estado: 'q4'
            },
            {
                id: 'm',
                descripcion: 'error en llamada',
                restricciones : [],
                condiciones: [],
                estado: 'q4'
            }
        ]
    },
    //fin estado q12

    //inicio estado q13
    'q13': {
        descripcion: 'En llamada oficina',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'l',
                descripcion: 'hablar',
                restricciones : ['oficina'],
                condiciones: [],
                estado: 'q13'
            },
            {
                id: 'i1',
                descripcion: 'marcar extensión',
                restricciones : [],
                condiciones: ['oficina'],
                estado: 'q13'
            },
            {
                id: 'm',
                descripcion: 'error en llamada',
                restricciones : [],
                condiciones: [],
                estado: 'q4'
            },
            {
                id: 's',
                descripcion: 'trasladar llamada',
                restricciones : ['oficina'],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q13

    //inicio estado q14
    'q14': {
        descripcion: 'En llamada casa',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'l',
                descripcion: 'hablar',
                restricciones : [],
                condiciones: [],
                estado: 'q14'
            },
            {
                id: 'i1',
                descripcion: 'marcar extensión',
                restricciones : [],
                condiciones: ['oficina'],
                estado: 'q14'
            },
            {
                id: 'm',
                descripcion: 'error en llamada',
                restricciones : [],
                condiciones: [],
                estado: 'q4'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q14

    //inicio estado q15
    'q15': {
        descripcion: 'En llamada celular',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'l',
                descripcion: 'hablar',
                restricciones : [],
                condiciones: [],
                estado: 'q15'
            },
            {
                id: 'i1',
                descripcion: 'marcar extensión',
                restricciones : [],
                condiciones: ['oficina'],
                estado: 'q15'
            },
            {
                id: 'm',
                descripcion: 'error en llamada',
                restricciones : [],
                condiciones: [],
                estado: 'q2'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q15

    //inicio estado q16
    'q16': {
        descripcion: 'Buzón de voz',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'l',
                descripcion: 'hablar',
                restricciones : [],
                condiciones: ['oficina','celular'],
                estado: 'q16'
            },
            {
                id: 'n',
                descripcion: 'colgar',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q16

    //inicio estado q17
    'q17': {
        descripcion: 'Sonando',
        inicial : false,
        aceptador: false,
        transiciones: [
            {
                id: 'p',
                descripcion: 'contestar telefono casa',
                restricciones : ['casa'],
                condiciones: [],
                estado: 'q14'
            },
            {
                id: 'p1',
                descripcion: 'contestar telefono oficina',
                restricciones : ['oficina'],
                condiciones: [],
                estado: 'q13'
            },
            {
                id: 'q',
                descripcion: 'contestar celular',
                restricciones : ['celular'],
                condiciones: [],
                estado: 'q15'
            },
            {
                id: 'r',
                descripcion: 'enviar a contestadora',
                restricciones : ['oficina','celular'],
                condiciones: [],
                estado: 'q0'
            },
            {
                id: 'λ',
                descripcion: 'lambda - no hacer nada',
                restricciones : [],
                condiciones: [],
                estado: 'q0'
            }
        ]
    },
    //fin estado q17
}