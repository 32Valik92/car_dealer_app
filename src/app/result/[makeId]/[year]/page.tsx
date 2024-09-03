import React, {Suspense} from 'react';
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
            <Suspense fallback={<div>Loading...</div>}>
                <ModelsComponent makeId={params.makeId} year={params.year}/>
            </Suspense>
        </div>
    );
};

export default ResultPage;