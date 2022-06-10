const Sequelize = require('sequelize')

const db = new Sequelize('school','schooluser','schoolpass',{
    dialect: 'mysql'
})

const login = db.define('login',{
    sno: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    name : {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false,
    },
    role: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false,
    }
})

const classes = db.define('class',{
    sno: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    no_of_std: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    standard: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false,
    },
    Section: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false,
    },
    
})

const teachers = db.define('teacher',{
    
})

const student = db.define('student',{
    
})




db.sync()
.then(()=>{
    console.log("synced")
})
.catch((err)=>{
    console.log("error")
})