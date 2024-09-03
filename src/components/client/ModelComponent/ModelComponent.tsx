"use client";

import { FC } from 'react';
import { IModelsMakeIdYear } from "@/models";

interface IProps {
    model: IModelsMakeIdYear;
    key: number;
}

const ModelComponent: FC<IProps> = ({ model }) => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm mb-4 bg-white">
            <div className="text-sm font-medium text-gray-700">Make ID: <span className="font-normal">{model.Make_ID}</span></div>
            <div className="text-sm font-medium text-gray-700">Make Name: <span className="font-normal">{model.Make_Name}</span></div>
            <div className="text-sm font-medium text-gray-700">Model ID: <span className="font-normal">{model.Model_ID}</span></div>
            <div className="text-sm font-medium text-gray-700">Model Name: <span className="font-normal">{model.Model_Name}</span></div>
            <hr className="mt-4 border-t border-gray-300" />
        </div>
    );
};

export { ModelComponent };
