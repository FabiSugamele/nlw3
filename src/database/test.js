const Database = require('./db');
const saveOrphanage = require("./saveOrphanage");

Database.then(async(db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.5500991",
        lng: "-46.6355097",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "55999992222",
        images: [
            "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0",
    })

    //consultar dados da tabela
    await db.all("SELECT * FROM orphanages")
})