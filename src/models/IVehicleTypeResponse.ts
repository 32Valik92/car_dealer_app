import {IVehicleType} from "@/models/IVehicleType";

export interface IVehicleTypeResponse{
    "Count": number;
    "Message": string;
    "SearchCriteria": string;
    "Results": IVehicleType[];
}