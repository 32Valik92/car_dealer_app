import {HomeComponent} from "@/components";
import {carService} from "@/services";

const HomePage = async () => {
   // get all VehicleTypes
   const VehicleTypeResponse = await carService.getAllVehicleType();

   // get current year and make arr from 2015 to current year
   const currentYear = new Date().getFullYear();
   const yearsArr = Array.from({length: currentYear - 2015 + 1}, (_, i) => 2015 + i);

   return (
   // return our client component and
      <HomeComponent VehicleTypeResponse={VehicleTypeResponse} yearsArr={yearsArr}/>
   );
};

export default HomePage;