import * as React from "react";

const Artikkel: React.FC<{ children: React.ReactNode, className?: string }> = ({children, className}) => {

    return (
        <div className={"blokk-center " + className}>
            <div className="artikkel">
                <div className="innhold">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Artikkel;
