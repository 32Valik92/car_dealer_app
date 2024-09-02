"use client";

import {FC, useEffect, useState} from 'react';
import {IModelsMakeIdYear} from "@/models";
import {carService} from "@/services";
import {ModelComponent} from "@/components";

interface IProps {
    makeId: string;
    year: string;
}

const ModelsComponent: FC<IProps> = ({makeId, year}) => {
    const [models, setModels] = useState<IModelsMakeIdYear[]>([]);

    useEffect(() => {
        const fetchModels = async (): Promise<void> => {
            try {
                const modelsResponse = await carService.getGetModelsForMakeIdYear(makeId, year);
                setModels(modelsResponse.Results);
            } catch (error) {
                console.error("Failed to load models", error);
            }
        }

        fetchModels();
    }, [makeId, year]);

    return (
        <div>
            {
                models.map((model, index) => (
                    <ModelComponent model={model} key={index}/>
                ))
            }
        </div>
    );
};

export {ModelsComponent};