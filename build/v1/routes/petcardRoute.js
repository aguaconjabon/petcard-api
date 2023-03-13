"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petcardController_1 = require("../../controllers/petcardController");
const router = express_1.default.Router();
router.get("/", petcardController_1.getAllPetcards);
router.get("/:petcardId", petcardController_1.getOnePetcard);
router.post("/", petcardController_1.createNewPetcard);
router.patch("/:petcardId", petcardController_1.updateOnePetcard);
router.delete("/:petcardId", petcardController_1.deleteOnePetcard);
exports.default = router;
