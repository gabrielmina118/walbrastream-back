import { IProduct } from "../interface/IProduct";
import { BaseDataBase } from "./baseDatabase";

export class ProductDataBase extends BaseDataBase {
    private TABLENAME = "produtos";

    public async getProducts() {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(this.TABLENAME);
            console.log("RESULT", result);

            return result;
        } catch (error) {}
    }

    public async create(product: IProduct) {
        try {
            await this.getConnection().insert(product).into(this.TABLENAME);
            return "Produto cadastrado com sucesso!";
        } catch (error) {}
    }

    public async getProductById(id: string) {
        try {
            const result = await this.getConnection()
                .select("*")
                .where({ id: id })
                .from(this.TABLENAME);
            return result;
        } catch (error) {}
    }

    public async edit(product: IProduct, id: string) {
        try {
            await this.getConnection()
                .update(product)
                .from(this.TABLENAME)
                .where("ID", id);

            return "Produto editado com sucesso!";
        } catch (error) {}
    }

    public async delete(id:string){
        try {
            await this.getConnection()
                .from(this.TABLENAME)
                .where({ ID: id })
                .delete();

             return "Produto DELETADO com sucesso!";
        } catch (error) {
            
        }
    }
}
