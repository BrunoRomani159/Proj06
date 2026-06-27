import mongoose from "mongoose";
import "dotenv/config";

const endereco = process.env.MONGO_URI;



mongoose.connect(endereco)
    .then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    })
    .catch((erro) => {
        console.log("Erro ao conectar com o banco de dados: ", erro.message);
    })