import { Request, Response } from "express";
import Service from "../services/service";
export class ServiceController {
  async findAvailableRooms(req: Request, res: Response) {
    const response = await Service.findAvailableRooms(
      Number(req.params?.hotelId)
    );
    return res
      .status(response.status)
      .json({ data: response.data, error: response.error });
  }
  async schedule(req: Request, res: Response) {
    const response = await Service.schedule(req.body);
    return res
      .status(response.status)
      .json({ data: response.data, error: response.error });
  }
}
