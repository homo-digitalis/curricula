"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nlp_trainer_1 = require("nlp-trainer");
class CurriculaService {
    constructor() {
        this.nlpTrainer = new nlp_trainer_1.NLPTrainer();
    }
    async provideCurriculumByID(id) {
        return this.nlpTrainer.getIntents(id);
    }
    async saveCurriculumByID(id, intents) {
        return this.nlpTrainer.saveIntents(id, intents);
    }
    async updateCurriculumByID(id, ownerID, intents) {
        await this.nlpTrainer.deleteIntents(id, ownerID);
        await this.nlpTrainer.saveIntents(id, intents);
    }
}
exports.CurriculaService = CurriculaService;
