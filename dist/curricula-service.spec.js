"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curricula_service_1 = require("./curricula-service");
describe("HelloWorldProvider", () => {
    it("should provide curriculum by id", async () => {
        const curriculaService = new curricula_service_1.CurriculaService();
        const exampleIntents = await curriculaService.provideCurriculumByID("exampleMap");
        expect(exampleIntents.length)
            .toEqual(4);
    });
    it("should save and provide a curriculum", async () => {
        const curriculaService = new curricula_service_1.CurriculaService();
        await curriculaService.saveCurriculumByID("ATest", []);
        const exampleIntents = await curriculaService.provideCurriculumByID("ATest");
        expect(exampleIntents.length)
            .toEqual(0);
    });
});
