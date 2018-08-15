const { io } = require('../server')

io.on('connection', (client)=> {
    console.log("Usuario conectado")
    
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido'
    })
    client.on('disconnect', ()=> {
        console.log('Cliente desconectado')
    })

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje',data)

        // if (mensaje.usuario) {
        //     callback({
        //         ok: true
        //     })
        // }else {
        //     callback({
        //         ok:false
        //     })
        // }

        
    })
})
