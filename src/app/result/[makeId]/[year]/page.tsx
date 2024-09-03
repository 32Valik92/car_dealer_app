import React, {Suspense} from "react";

import Loading from "@/app/loading";
import {ModelsComponent} from "@/components";
import {carService} from "@/services";

type Props = {
    params: {
        makeId: string;
        year: string;
    }
}

const ResultPage = async (props: Props) => {
   const {params} = props;
   const modelsResponse = await carService.getGetModelsForMakeIdYear(params.makeId, params.year);

   return (
      <Suspense fallback={<Loading/>}>
         <ModelsComponent models={modelsResponse.Results} SearchCriteria={modelsResponse.SearchCriteria}/>
      </Suspense>
   );
};

export default ResultPage;