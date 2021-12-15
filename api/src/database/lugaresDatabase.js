let db;

class LugaresDatabase {
    static injectDB(conn) {
        db = conn.db('ingressos').collection('lugares')
    }

    async availableSeats(day, movie, hour, room) {
        let resp = await db.aggregate([
            {
                $match: {            
                'data': day,
                'filme': movie,
                'hora': hour,
                'sala': room}
            },
            {
                $sort: {
                    'lugar.letra': 1,
                    'lugar.numero': 1
                }
            }
        ]).toArray();

        let newArr = []
        let currentObj = {}

        for (let index = 0; index < resp.length; index++) {
            const element = resp[index].lugar;
            if (element.letra !== currentObj.fileira) {
                currentObj = {
                    'fileira': element.letra,
                    'lugares': []
                }
                newArr.push(currentObj)
            }
            
            if(element.dataReservada) {
                var dataRes = Date.parse(newDate(element.dataReservada))
                if (dataRes - Date.parse(new Date()) > 60000 * 20 ) {
                    element.situacao = 'Livre'
                }
            }

            currentObj.lugares.push({
                'numero': element.numero,
                'situacao': element.situacao,
                'usuario': element.usuario,
            })
        }

        /* que poha que aconteceu nesse for */
       return newArr;
    }

    async reserveSeat(day, movie, hour, room, letter, number, user) {
        await db.updateOne({
            'data': day,
            'filme': movie,
            'hora': hour,
            'sala': room,
            'lugar.letra': letter,
            'lugar.numero': number
        }, {
            '$set': {
                'lugar.situacao': 'Reservado',
                'lugar.usuario': user,
                'lugar.dataReserva': new Date().toISOString()
            }
        })
    }
}

module.exports = LugaresDatabase;