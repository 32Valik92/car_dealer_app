import type {Metadata} from "next";
import React, {Suspense} from "react";

import Loading from "@/app/loading";

export const metadata: Metadata = {
   title: "Home page",
   description: "",
};

type PropType = { children: React.ReactNode };

const HomeLayout = ({children}: PropType) => {
   return (
      <div>
         <Suspense fallback={<Loading/>}>
            {children}
         </Suspense>
      </div>
   );
};

export default HomeLayout;
