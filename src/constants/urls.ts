const baseURL = "https://vpic.nhtsa.dot.gov/api";

const urls = {
   cars: {
      GetMakesForVehicleType: "/vehicles/GetMakesForVehicleType/car?format=json",
      GetModelsForMakeIdYear: (makeId: string, modelyear: string) => `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelyear}?format=json`
   }
};

export {
   baseURL,
   urls
};