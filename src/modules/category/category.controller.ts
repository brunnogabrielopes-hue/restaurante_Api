import {response, type Request, type Response } from "express";
import CategoryService from "./category.service.js";
import categoryService from "./category.service.js";
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

    public async findAll(req:Request, resp: Response){
        const categories = await categoryService.findAll();
        
        return resp.status(200).json(categories);
    }

    public async findById(req:Request, resp: Response){
        const {id} = req.params ?? {};

        if(!id || typeof id !== "string"){
            return resp.status(400).json({
                message: "Id invalido",
            });
        }

        const category = await categoryService.findAll(Id);

        return response.status(200).json(category);

        /*
        
        Parametro de ROTA -> fAZ PARTE DE URL
        http://localhost:3000/api/v1/categories/6abb14ac8504985d2708ae05
        req.parmans.id

         const {id} = req.params ?? {};

         Quanto utilizar o Params
          - Identificar um recurso
          - Faz parte da URL
          - É obrigatorio


        http://localhost:3000/api/v1/categories/:categories/produtos/:produtoId
        Query Parmans
        http://localhost:3000/api/v1/alunos/cidade=Atibaia&bairro=centro
        http://localhost:3000/api/v1/alunos/pag=1&limit=30
        http://localhost:3000/api/v1/alunos/pag=2&limit=30

        Quando utilizar Query?

        - é opcional
        - filtrar resultados
        - alterar a consulta

        req.query.cidade
        req.query.bairro
        
        */
    }
}

export default new CategoryController();