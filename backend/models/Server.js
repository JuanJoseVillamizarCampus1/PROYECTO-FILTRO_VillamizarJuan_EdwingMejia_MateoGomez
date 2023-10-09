const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares()
        this.connectionDb()
        this.path={
            role:'/api/roles'
         }
        this.routes()
    }
    async connectionDb (){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.path.role,require('../routes/role.routes'))
    }
    listening(){
        this.app.listen(this.port,()=>{console.log(`EScuchando el puerto ${this.port}`)})
    }
}
module.exports= Server;