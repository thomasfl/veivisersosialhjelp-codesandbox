import * as React from 'react';
import './banner.less';
import {Sidetittel, Innholdstittel} from 'nav-frontend-typografi';
import {history} from "../../utils/navigasjon";
import VeiviserBannerIllustrasjon from "../bilder/VeiviserBannerIllustrasjon";

const Dekorator: React.FC<{ children: React.ReactNode, tittel?: string }> = ({children, tittel}) => {

    const erForside: boolean = (history.location.pathname === "/");

    let bannerClassNames = erForside ? 'banner__forside' : 'banner__underside';

    return (
        <div>
            <div className={'banner ' + bannerClassNames}>
                <div className="blokk-center">

                    {erForside && (
                        <div className="banner__forside-wrapper">
                            <div className="banner__tittel-tekst">
                                <Sidetittel>
                                    Økonomisk sosialhjelp
                                </Sidetittel>
                            </div>
                            <VeiviserBannerIllustrasjon
                                className="banner__forside-illustrasjon"/>
                        </div>
                    )}
                    {!erForside && (
                        <div className="undersideBanner__tekst">
                            {tittel && tittel !== '' && (
                                <Innholdstittel>{tittel}</Innholdstittel>
                            )}
                            {!(tittel && tittel !== '') && (
                                <span>Økonomisk sosialhjelp</span>
                            )}
                        </div>
                    )}

                </div>
            </div>
            <br/>
            <br/>
            {children}
        </div>
    );
};

export default Dekorator;
