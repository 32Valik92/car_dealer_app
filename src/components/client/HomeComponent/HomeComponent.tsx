"use client";

import { IVehicleTypeResponse } from "@/models";
import React, { FC, useState } from 'react';
import Link from "next/link";

interface IProps {
    VehicleTypeResponse: IVehicleTypeResponse;
    yearsArr: number[];
}

const HomeComponent: FC<IProps> = ({ VehicleTypeResponse, yearsArr }) => {
    // states for filter selects
    const [selectedMakeId, setSelectedMakeId] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const isButtonDisabled = !(selectedMakeId && selectedYear);
    // navigate to /result/[makeId]/[year]
    const linkHref = selectedMakeId && selectedYear ? `/result/${selectedMakeId}/${selectedYear}` : '#';

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-md shadow-lg">
            <div className="mb-4 w-full">
                <select
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={selectedMakeId}
                    onChange={(e) => setSelectedMakeId(e.target.value)}
                >
                    <option value="" disabled>Select vehicle type</option>
                    {VehicleTypeResponse.Results.map((type, index) => (
                        <option key={index} value={type.MakeId}>
                            {type.MakeName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4 w-full">
                <select
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="" disabled>Select year</option>
                    {yearsArr.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Link href={linkHref}>
                    <button
                        className={`w-full p-2 text-white rounded ${
                            isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                        disabled={isButtonDisabled}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export { HomeComponent };
