const socket = io()

socket.on('connect', () => {
    console.log('conectado al servidor')
})

// on son para escuchar sucesos
socket.on('disconnect', ()=> {
    console.log('conexión perdida')
})

//son para enviar info
socket.emit('enviarMensaje', {
    usuario: null,
    mensaje: 'Hola mundo'
}, (response)=> {
    console.log('se disparo el callback', response)
})

//Escuchar info
socket.on('enviarMensaje',(mensaje)=>{
    console.log(mensaje)
})



