"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnePetcard = exports.updateOnePetcard = exports.createNewPetcard = exports.getOnePetcard = exports.getAllPetcards = void 0;
const getAllPetcards = (req, res) => {
    res.send("Get all workouts");
};
exports.getAllPetcards = getAllPetcards;
const getOnePetcard = (req, res) => {
    res.send("Get an existing Petcards");
};
exports.getOnePetcard = getOnePetcard;
const createNewPetcard = (req, res) => {
    res.send("Create a new Petcards");
};
exports.createNewPetcard = createNewPetcard;
const updateOnePetcard = (req, res) => {
    res.send("Update an existing Petcards");
};
exports.updateOnePetcard = updateOnePetcard;
const deleteOnePetcard = (req, res) => {
    res.send("Delete an existing Petcards");
};
exports.deleteOnePetcard = deleteOnePetcard;
