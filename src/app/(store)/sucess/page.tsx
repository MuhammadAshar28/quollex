'use client';

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useBasketStore from "../../../../store/store";

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");
    const clearBasket = useBasketStore((state) => state.clearBasket);

    useEffect(() => {
        if (orderNumber) {
            clearBasket();
        }
    }, [orderNumber, clearBasket]);

    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Thank You for Your Order!</h1>
            <p className="text-gray-600 text-lg mb-6">
                Your order number is: <strong>{orderNumber}</strong>. We&apos;ve received your payment and will process your order soon.
            </p>

            <div className="flex space-x-4">
                <Link href="/" passHref>
                    <Button className="bg-blue-500 text-white">Back to Home</Button>
                </Link>
                <Link href="/orders" passHref>
                    <Button className="bg-gray-500 text-white">View Orders</Button>
                </Link>
            </div>
        </div>
    );
}



// 'use client';

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import useBasketStore from "../../../../store/store";

// export default function Successpage() {
//     const searchParams = useSearchParams();
//     const orderNumber = searchParams.get("orderNumber");
//     const clearBasket = useBasketStore((state) => state.clearBasket);

//     useEffect(() => {
//         if (orderNumber) {
//             clearBasket();
//         }
//     }, [orderNumber, clearBasket]);

//     return (
//         <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
//             <h1 className="text-2xl font-bold mb-4 text-gray-800">Thank You for Your Order!</h1>
//             <p className="text-gray-600 text-lg mb-6">
//                 Your order number is: <strong>{orderNumber}</strong>. We've received your payment and will process your order soon.
//             </p>

//             <div className="flex space-x-4">
//                 <Link href="/" passHref>
//                     <Button className="bg-blue-500 text-white">Back to Home</Button>
//                 </Link>
//                 <Link href="/orders" passHref>
//                     <Button className="bg-gray-500 text-white">View Orders</Button>
//                 </Link>
//             </div>
//         </div>
//     );
// }



// 'use client'

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import useBasketStore from "../../../../store/store";

// export default function Successpage(){
//     const searchParams = useSearchParams();
//     const orderNumber= searchParams.get("orderNumber")
//     const clearBasket = useBasketStore((state)=> state.clearBasket )

//     useEffect(() => {
//         if (orderNumber) {
//             clearBasket();
//         }
//     }, [orderNumber, clearBasket]);


//     return(

//     )
// }