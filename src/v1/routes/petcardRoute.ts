import express, { Request, Response } from "express";
import petcardController from "../../controllers/petcardController";

const router = express.Router();

router.get("/", petcardController.getAllPetcards);

router.get("/:petcardId", petcardController.getOnePetcard);

router.post("/", petcardController.createNewPetcard);

router.patch("/:petcardId", petcardController.updateOnePetcard);

router.delete("/:petcardId", petcardController.deleteOnePetcard);

export default router;
