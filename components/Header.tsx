"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className   // takes in childen and className parameters
}) => {
    const router = useRouter();

    const handleLogout= () => {
        // function that will handle logout in the future
    }
     
    
    return (  
        <div    // vv this CSS adds the green gradiency
            className={twMerge(`
                h-fit
                bg-gradient-to-b
                from-emerald-800
                p-6
                ,
                className
            `)}
        >
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between

            ">
                <div className="
                    hidden
                    md-flex
                    
                ">

                </div>
            </div>
        </div>
    );
}
 
export default Header;
