import { Request, Response } from "express";
import knex from "../database/connections";

class ItemsController {
  async index(request: Request, reponse: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://10.0.1.131:3333/uploads/${item.image}`,
      };
    });

    return reponse.json(serializedItems);
  }
}

export default ItemsController;
