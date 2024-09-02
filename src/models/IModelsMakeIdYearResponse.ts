import {IModelsMakeIdYear} from "@/models/IModelsMakeIdYear";

export interface IModelsMakeIdYearResponse{
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: IModelsMakeIdYear[];
}