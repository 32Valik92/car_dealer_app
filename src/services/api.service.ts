import {baseURL, urls} from "@/constants";
import {IVehicleTypeResponse} from "@/models";

const carService = {
    getAllVehicleType: async ():Promise<IVehicleTypeResponse>=> {
        const response = await fetch(`${baseURL}${urls.cars.GetMakesForVehicleType}`, {
            method: "GET",
        }).then(cars => cars.json());

        return response;
    }
}

export {
    carService
}