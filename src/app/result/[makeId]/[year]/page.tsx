import React from 'react';
import {ModelsComponent} from "@/components";

type Props = {
    params: {
        makeId: string;
        year: string;
    }
}

const ResultPage = async (props: Props) => {
    const {params} = props;
    return (
        <div>
            <ModelsComponent makeId={params.makeId} year={params.year}/>
        </div>
    );
};

export default ResultPage;