import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Result page",
    description: "",
};

type PropType = { children: React.ReactNode }

const ResultLayout = ({children}: PropType) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default ResultLayout;
