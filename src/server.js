const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "/images/proffys/Diego.svg",
        whatsapp: "1111111111",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
    { 
        name: "Mayk",
        avatar: "/images/proffys/Mayk.svg",
        whatsapp: "1111111111",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
                    
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]

function pageLanding(req, ask) {
    return ask.render("index.html")
}

function pageStudy(req, ask) {
    // console.log(req.query)
    const filters = req.query
    return ask.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, ask) {  
    //add data to proffys list
    // console.log(data)
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return ask.redirect("/study")
    }

    return ask.render("give-classes.html", { subjects, weekdays })
}

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)