const User = require("../models/User");
const Project = require("../models/Project");
const Card = require("../models/Card");
const db = require("./connection");
// const { Project } = require("../models");

db.sync ({force: true}).then(() => {
    User.bulkCreate([
        {
            email: "scelsi@mail.com",
            password: "password"
        },
        {
            email: "moraga@mail.com",
            password: "password"
        },
        {
            email: "garry@mail.com",
            password: "password"
        }
    ]).then(()=> {
        console.log("----------USERS SEEDED!----------")
    })

    Project.bulkCreate([
        {
            proj_title: "Fullstack Project"
        }
    ]).then(() => {
        console.log("----------PROJECTS SEEDED!----------")
    })

    Card.bulkCreate([
        {
            task_title: "Build HTML",
            task_desc: "index, login, register, and dashboard",
            task_cat: "Frontend",
            teammate_id: 1
        },
        {
            task_title: "CSS",
            task_desc: "research best frameworks",
            task_cat: "Frontend",
            teammate_id: 2
        },
        {
            task_title: "Database",
            task_desc: "schema.sql, models, and seeds.js",
            task_cat: "Backend",
            teammate_id: 3
        },

    ]).then(() => {
        console.log("----------CARDS SEEDED!----------");
        process.exit();
    })
})