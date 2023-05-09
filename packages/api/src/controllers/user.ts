import { Request, Response } from "express";
import UserService from "../services/user";
export class UserController {
  async findById(req: Request, res: Response) {
    if (req.user?.admin) {
      const response = await UserService.findById(Number(req.params.id));
      return res
        .status(response.status)
        .json({ data: response.data, error: response.error });
    }
    return res.status(401).json({ data: null, error: "Não autorizado" });
  }
  async findAll(req: Request, res: Response) {
    if (req.user?.admin) {
      const response = await UserService.findAll();
      return res
        .status(response.status)
        .json({ data: response.data, error: response.error });
    }
    return res.status(401).json({ data: null, error: "Não autorizado" });
  }
  async create(req: Request, res: Response) {
    const response = await UserService.createUser(req.body);
    return res
      .status(response.status)
      .json({ data: response.data, error: response.error });
  }
  async login(req: Request, res: Response) {
    const response = await UserService.login(req.body);
    return res
      .status(response.status)
      .json({ data: response.data, error: response.error });
  }
}
