import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

type PropType = { children: React.ReactNode };

const HomeLayout = ({children}: PropType) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default HomeLayout;
