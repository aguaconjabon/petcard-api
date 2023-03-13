import DB from "./petcard.json";

const getAllPetcards = () => {
  return DB.petcards;
};

export default [getAllPetcards];
