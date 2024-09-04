import React, {FC} from "react";

import {ModelComponent} from "@/components";
import {IModelsMakeIdYear} from "@/models";

interface IProps {
    SearchCriteria: string;
    models: IModelsMakeIdYear[];
}

const ModelsComponent: FC<IProps> = ({models, SearchCriteria}) => {
   return (
      <div className="max-w-screen-lg mx-auto py-8">
         <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
                    Search Criteria: {SearchCriteria}
            </h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
            {models.map((model, index) => (
               <ModelComponent model={model} key={index} />
            ))}
         </div>
      </div>
   );
};

export {ModelsComponent};
