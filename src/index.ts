import express from "express";
import cors from "cors";
import { ProductDataBase } from "./database/Product";
import { IProduct } from "./interface/IProduct";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/produtos", async (req, res) => {
    const produtos = await new ProductDataBase().getProducts();
    res.status(200).send(produtos);
});

app.post("/create-product", async (req, res) => {
    const newProdut: IProduct = {
        id: "214312",
        nome: req.body.nome,
        imagem: req.body.imagem,
        url: req.body.url,
        descricao: req.body.descricao,
    };

    const insertProdut = await new ProductDataBase().create(newProdut);
    res.status(201).send({ message: insertProdut });
});

app.listen(3000, () => {
    console.log("Server is runnin in localhost:3000");
});
