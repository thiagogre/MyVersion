const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "/images/proffys/Diego.svg",
        whatsapp: "1111111111",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",

        // o proffy_id é gerado pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // Consultar

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM Proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do proffessor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser MENOR ou IGUAL ao horário solicitado
    // o time_to precisa ser MAIOR

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)
    // console.log(selectClassesSchedules)
})