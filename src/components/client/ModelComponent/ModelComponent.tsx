"use client";

import {FC} from 'react';
import {IModelsMakeIdYear} from "@/models";

interface IProps {
    model: IModelsMakeIdYear;
    key: number;
}

const ModelComponent: FC<IProps> = ({model, key}) => {
    return (
        <div key={key}>
            <div>Make_ID: {model.Make_ID}</div>
            <div>Make_Name: {model.Make_Name}</div>
            <div>Model_ID: {model.Model_ID}</div>
            <div>Model_Name: {model.Model_Name}</div>
            <hr/>
        </div>
    );
};

export {ModelComponent};