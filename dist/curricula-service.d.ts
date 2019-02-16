import { IIntent } from "nlp-trainer";
export declare class CurriculaService {
    private readonly nlpTrainer;
    constructor();
    provideCurriculumByID(id: string): Promise<IIntent[]>;
    saveCurriculumByID(id: string, intents: IIntent[]): Promise<void>;
}
