"use client";

import {FC, useEffect, useState} from 'react';
import {IModelsMakeIdYear, IModelsMakeIdYearResponse} from "@/models";
import {carService} from "@/services";
import {ModelComponent} from "@/components";

interface IProps {
    makeId: string;
    year: string;
}

const ModelsComponent: FC<IProps> = ({makeId, year}) => {
    const [models, setModels] = useState<IModelsMakeIdYear[]>([]);
    const [modelsResponse, setModelsResponse] = useState<IModelsMakeIdYearResponse>({
        Count: 0,
        Message: '',
        SearchCriteria: '',
        Results: []
    });

    useEffect(() => {
        const fetchModels = async (): Promise<void> => {
            try {
                const modelsResponse = await carService.getGetModelsForMakeIdYear(makeId, year);
                setModels(modelsResponse.Results);
                setModelsResponse(modelsResponse);

            } catch (error) {
                console.error("Failed to load models", error);
            }
        };

        fetchModels();
    }, [makeId, year]);

    return (
        <div className="max-w-screen-lg mx-auto py-8">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Search
                    Criteria: {modelsResponse.SearchCriteria}</h2>
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
                {models.map((model, index) => (
                    <ModelComponent model={model} key={index}/>
                ))}
            </div>
        </div>
    );
};

export {ModelsComponent};
