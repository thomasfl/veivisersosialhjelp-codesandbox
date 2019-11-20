import * as React from "react";
import "./artikkel.less";
import Dekorator from "../komponenter/dekorator/Dekorator";
import {Innholdstittel} from "nav-frontend-typografi";

const Artikkel: React.FC<{ children: React.ReactNode, className?: string, tittel?: string }> = ({children, className, tittel}) => {

    return (
        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <div className={"blokk-center " + className}>
                <div className="artikkel">
                    <div className="innhold">
                        <Innholdstittel>{tittel}</Innholdstittel>
                        {children}
                    </div>
                </div>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
