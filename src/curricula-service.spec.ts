import { ICurriculum, IIntent } from "nlp-trainer"
import { CurriculaService } from "./curricula-service"

describe("HelloWorldProvider", () => {

    it("should provide curriculum by id", async () => {
        const curriculaService: CurriculaService = new CurriculaService()

        const exampleIntents: IIntent[] =
            await curriculaService.provideCurriculumByID("exampleMap")

        expect(exampleIntents.length)
            .toEqual(4)
    })

    it("should save and provide a curriculum", async () => {
        const curriculaService: CurriculaService = new CurriculaService()

        await curriculaService.saveCurriculumByID("ATest", [])

        const exampleIntents: IIntent[] =
            await curriculaService.provideCurriculumByID("ATest")

        expect(exampleIntents.length)
            .toEqual(0)

    })

    it("should update a curriculum", async () => {
        const curriculaService: CurriculaService = new CurriculaService()

        const exampleIntents: IIntent[] =
            await curriculaService.provideCurriculumByID("exampleMap")

        const entry: ICurriculum = await curriculaService.saveCurriculumByID("ATest", exampleIntents)

        expect(exampleIntents.length)
            .toEqual(4)

        await curriculaService.updateCurriculumByID("ATest", entry.ownerID,
                                                    exampleIntents.splice((exampleIntents.length - 1), 1))

        expect(exampleIntents.length)
            .toEqual(3)
    })

})
