/*
 
    \papel do category.service.ts

    -Ele será responsavel por:
        -Criar categorias por meio da model
        -Listar categorias
        -Buscar categorias
        -Atualizar
        -Excluir

    Ou seja, concentra as operações e regras de negocio relacionado ao moduolo categoria.    
*/

import Category from "./category.model.js";
import type {
     ICreateCategoryDTO,
     IUpdateCategoryDTO
} from "./category.types.js";


class CategoryService{

    public async create(data:ICreateCategoryDTO){
        const category = await Category.create({
            name: data.name,
            description: data.description ?? "",
            active: data.active ?? true,
        });

        return category;
    }

}

export default new CategoryService;