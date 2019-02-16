import { ICurriculum, IIntent, NLPTrainer } from "nlp-trainer"

export class CurriculaService {

    private readonly nlpTrainer: NLPTrainer

    public constructor() {
        this.nlpTrainer = new NLPTrainer()
    }

    public async provideCurriculumByID(id: string): Promise<IIntent[]> {
        return this.nlpTrainer.getIntents(id)
    }

    public async  saveCurriculumByID(id: string, intents: IIntent[]): Promise<ICurriculum> {
        return this.nlpTrainer.saveIntents(id, intents)
    }

    public async  updateCurriculumByID(id: string, ownerID: string, intents: IIntent[]): Promise<void> {
        await this.nlpTrainer.deleteIntents(id, ownerID)
        await this.nlpTrainer.saveIntents(id, intents)
    }

}
