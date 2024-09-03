import {baseURL, urls} from "@/constants";
import {IModelsMakeIdYearResponse, IVehicleTypeResponse} from "@/models";

const carService = {
   getAllVehicleType: async ():Promise<IVehicleTypeResponse>=> {
      const response = await fetch(`${baseURL}${urls.cars.GetMakesForVehicleType}`, {
         method: "GET",
      }).then(cars => cars.json());

      return response;
   },
   getGetModelsForMakeIdYear: async (makeId: string, modelyear: string): Promise<IModelsMakeIdYearResponse> =>{
      const response = await fetch(`${baseURL}${urls.cars.GetModelsForMakeIdYear(makeId, modelyear)}`, {
         method: "GET",
      }).then(cars => cars.json());

      return response;
   }
};

export {
   carService
};