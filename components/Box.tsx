import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}


const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return (    // this allows us to resuse the Box component and pass in names using parameters
        <div 
            className={twMerge(`
                bg-neutral-900
                rounded-lg
                h-fit
                w-full
        `,
            className
        )}
        >
            {children}
        </div>
    );
};

export default Box;