import { Request, Response } from "express";
import petcardService from "../services/petcardService";

const getAllPetcards = (req: Request, res: Response) => {
  const allPetcards = petcardService.getAllPetcards();
  res.send({ status: "OK", data: allPetcards });
};

const getOnePetcard = (req: Request, res: Response) => {
  const onePetcard = petcardService.getOnePetcard();
  res.send("Get an existing Petcards");
};

const createNewPetcard = (req: Request, res: Response) => {
  const newPetcard = petcardService.createNewPetcard();
  res.send("Create a new Petcards");
};

const updateOnePetcard = (req: Request, res: Response) => {
  const updatePetcard = petcardService.updateOnePetcard();
  res.send("Update an existing Petcards");
};

const deleteOnePetcard = (req: Request, res: Response) => {
  const deleteOnePetcard = petcardService.deleteOnePetcard();
  res.send("Delete an existing Petcards");
};

export default {
  getAllPetcards,
  getOnePetcard,
  createNewPetcard,
  updateOnePetcard,
  deleteOnePetcard,
};
