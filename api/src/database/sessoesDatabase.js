
let db;

class SessoesDatabase {
    static injectDB(conn) {
        db = conn.db('ingressos').collection('sessoes')
    }

    async availableDays () {
        let general = await db.aggregate([
            {  
                $match: { 
                    data: {$gte: today()}
                }   
            },
            {   
                $group: {
                    _id: '$data'
                }
            },
            {
                $sort: { _id: 1 }
            },
            {
                $project: {
                    _id: 0,
                    data: '$_id'
                }
            },
            {
                $limit: 7
            }
        ]).toArray()

        let resp = general.map(item => {
            return {
                data: item.data,
                diaSemana: getDayWeek(item.data),
                dia: getDayNumber(item.data),
                mes: getMonth(item.data)
            }
        })

        return resp;
    }

    availableMovies(day, page) {
        let resp = db.find({
            data: day
        }).project({_id: 0}).toArray();

        return resp;
    }

    async availableSession(day, movie, page) {
        let resp = await db.aggregate([
            {
                $match: {
                    $and: [{data: day}, {'filme.nome': movie}]
                }
            },
            {
                $unwind: '$horarios'
            },
            {
                $sort: {
                   'horarios.hora': 1 
                }
            },
            {
                $project: {
                    _id: 0,
                    data: 0,
                    filme: 0
                }
            }
        ]).toArray();

        return resp;
    }
}

module.exports = SessoesDatabase;

function getDayNumber(data) {
    data = new Date(`${data}T00:00:00`);
    return data.getDate();
}

function getDayWeek(date) {
    if(date == today())
        return 'HOJE'

    date = new Date(`${date}T00:00:00`).getDay();
    switch (date) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terça';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sábado';
    }  
}

function getMonth(date) {
    date = new Date(`${date}T00:00:00`);
    switch (date.getMonth()) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}

function today() {
    return new Date().toISOString().slice(0, 10);
}