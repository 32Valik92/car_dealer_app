import Image from "next/image";

import loadingImg from "@/assets/Loading.svg";
export default function Loading() {
   return (
      <div className="flex items-center justify-center h-screen">
         <Image src={loadingImg} alt="Loading" width={100} height={100} />
      </div>
   );
}
