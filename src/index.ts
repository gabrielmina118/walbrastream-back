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
    console.log("newProdut", newProdut);
    const insertProdut = await new ProductDataBase().create(newProdut);
    res.status(201).send({ message: insertProdut });
});

app.put("/product/:id",async(req,res)=>{
    const editProduct = await new ProductDataBase().edit(req.body,req.params.id);

    res.status(200).send({message:editProduct})
})

app.delete("/product/:id", async (req, res) => {
    const deleteProduct = await new ProductDataBase().delete(req.params.id);

    res.status(200).send({ message: deleteProduct });
});

app.listen(3000, () => {
    console.log("Server is runnin in localhost:3000");
    console.log("Servidor ligado....")
});
