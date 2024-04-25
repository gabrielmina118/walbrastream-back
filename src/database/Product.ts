import { IProduct } from "../interface/IProduct";
import { BaseDataBase } from "./baseDatabase";

export class ProductDataBase extends BaseDataBase {

    private TABLENAME = "produtos";

    public async getProducts() {
        try {
            const result = await this.getConnection()
            .select("*")
            .from(this.TABLENAME)
            console.log("RESULT", result);

            return result
        } catch (error) {}
    }

    public async create(product:IProduct){
        try {
                const result = await this.getConnection().insert(product).into(this.TABLENAME);
                return "Produto cadastrado com sucesso!"
        } catch (error) {
            
        }
    }
    
}
