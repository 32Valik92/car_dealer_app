"use client";

import {IVehicleTypeResponse} from "@/models";
import React, {FC, useState} from 'react';
import {useRouter} from 'next/navigation'; // useRouter for client navigation

interface IProps {
    VehicleTypeResponse: IVehicleTypeResponse;
    yearsArr: number[];
}

const HomeComponentClient: FC<IProps> = ({VehicleTypeResponse, yearsArr}) => {
    // our states for filter selects
    const [selectedMakeId, setSelectedMakeId] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const router = useRouter();

    // Next function for navigate to /result/[makeId]/[year]
    const handleRedirect = () => {
        if (selectedMakeId && selectedYear) {
            router.push(`/result/${selectedMakeId}/${selectedYear}`);
        } else {
            alert('Please select the vehicle type and year');
        }
    };

    return (
        <div>
            <div>
                <select value={selectedMakeId} onChange={(e) => setSelectedMakeId(e.target.value)}>
                    <option value="" disabled>Select vehicle type</option>
                    {VehicleTypeResponse.Results.map((type, index) => (
                        <option key={index} value={type.MakeId}>{type.MakeName}</option>
                    ))}
                </select>
            </div>

            <div>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="" disabled>Select year</option>
                    {yearsArr.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div>
                <button onClick={handleRedirect}>Next</button>
            </div>
        </div>
    );
};

export {HomeComponentClient};
