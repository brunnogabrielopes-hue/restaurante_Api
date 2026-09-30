import type {Request, Response } from "express";
import CategoryService from "./category.service.js";
//import type { request } from "node:http";

class CategoryController {
    public async create(req:Request, resp:Response){
       /*  let nome =  req.body.name ?? "Não enviado";
        let descricao =  req.body.description ?? "Não enviado";
        let active =  req.body.active ?? "Não enviado"; */

        //console.log("O NOME ENVIADO É: ", nome);

        const {name, description, active} = req.body?? {};

        const category = await CategoryService.create({
            name, description, active
        });

        return resp.status(201).json(category);
    }
}

export default new CategoryController();