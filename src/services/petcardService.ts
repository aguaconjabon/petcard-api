import Petcard from "../databse/petcard";
import { v4 as uuidv4 } from "uuid";

const getAllPetcards = () => {
  return Petcard;
};

const getOnePetcard = () => {
  return;
};

const createNewPetcard = () => {
  uuidv4();
  return;
};

const updateOnePetcard = () => {
  return;
};

const deleteOnePetcard = () => {
  return;
};

export default {
  getAllPetcards,
  getOnePetcard,
  createNewPetcard,
  updateOnePetcard,
  deleteOnePetcard,
};
