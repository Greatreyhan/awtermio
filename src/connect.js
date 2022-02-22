import React from 'react'
import mqtt from 'mqtt/dist/mqtt'

function Connect({msg}) {

    const [send,setSend] = React.useState(false)

    React.useEffect(()=>{
        if(send && msg != ""){
        const options = {
            // Clean session
            clean: true,
            connectTimeout: 4000,
            // Auth
            clientId: 'doratheexplolor',
            username: 'mamangracing',
            password: 'mamangracing',
          }
        // const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt', options)
        const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt', options)
        client.on('connect', function () {
          console.log('Connected')
          client.subscribe('soto', function (err) {
            if (!err) {
                client.publish('soto', msg)
            }
            })
        })
    }
    },[send])
    return(
        <>
        </>
    )
}

export default Connect