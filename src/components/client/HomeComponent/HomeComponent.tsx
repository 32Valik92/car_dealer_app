"use client";

import {IVehicleTypeResponse} from "@/models";
import React, {FC, useState} from 'react';
import Link from "next/link";

interface IProps {
    VehicleTypeResponse: IVehicleTypeResponse;
    yearsArr: number[];
}

const HomeComponent: FC<IProps> = ({VehicleTypeResponse, yearsArr}) => {
    // our states for filter selects
    const [selectedMakeId, setSelectedMakeId] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const isButtonDisabled = !(selectedMakeId && selectedYear);
    // navigate to /result/[makeId]/[year]
    const linkHref = selectedMakeId && selectedYear ? `/result/${selectedMakeId}/${selectedYear}` : '#';

    return (
        <div>
            <div>
                <select value={selectedMakeId} onChange={(e) => setSelectedMakeId(e.target.value)}>
                    <option value="" disabled>Select vehicle type</option>
                    {
                        VehicleTypeResponse.Results.map((type, index) => (
                            <option key={index} value={type.MakeId}>{type.MakeName}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="" disabled>Select year</option>
                    {
                        yearsArr.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <Link href={linkHref}>
                    <button disabled={isButtonDisabled}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {HomeComponent};
