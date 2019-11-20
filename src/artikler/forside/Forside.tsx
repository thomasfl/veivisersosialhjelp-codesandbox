import * as React from "react";
import {InfoPanel, InfoPanelContainer} from "../../komponenter/infopanel/InfoPanel";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import "./komponenter/forside.less";
import {Normaltekst, Systemtittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import {onClickLink} from "../../utils/navigasjon";
import Dekorator from "../../komponenter/dekorator/Dekorator";

const Forside: React.FC = () => {

    return (
        <Dekorator erForside={true}>
            <div className="blokk-center forside">

                <InfoPanelContainer>
                    <InfoPanel
                        ikon={<span/>}
                        href="/dette-bor-du-vite"
                        onClick={(event: any) => onClickLink(event, "dette-bor-du-vite")}
                    >
                        Dette bør du vite før du søker
                    </InfoPanel>

                    <InfoPanel
                        ikon={<span/>}
                        href="/andre-mulighter"
                        onClick={(event: any) => onClickLink(event, "andre-mulighter")}
                    >
                        Andre muligheter
                    </InfoPanel>

                    <InfoPanel
                        ikon={<span/>}
                        href="/dette-kan-du-soke-om"
                        onClick={(event: any) => onClickLink(event, "dette-kan-du-soke-om")}
                    >
                        Dette kan du søke om
                    </InfoPanel>
                </InfoPanelContainer>


                <LenkepanelBase
                    className="start_soknad_panel"
                    href="/slik-soker-du"
                    onClick={(event: any) => onClickLink(event, "slik-soker-du")}
                >
                    <Systemtittel>
                        Søk om økonomisk sosialhjelp
                    </Systemtittel>
                </LenkepanelBase>


                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks">
                        <Normaltekst>
                            Har du spørsmål om sosiale tjenester og økonomisk sosialhjelp?
                            <br/>
                            <Lenke href="todo123">Chat med oss om sosiale tjenester</Lenke>
                        </Normaltekst>
                        <br/>
                        <Normaltekst>
                            Har du spørsmål om budsjett, økonomi og gjeldsrådgivning?
                            <br/>
                            <Lenke href="todo123">Chat med oss om gjeldsrådgivning</Lenke>
                        </Normaltekst>
                    </div>

                    <div className="lenkeboks">

                        <ul>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514880"
                                >
                                    Dette gjør du i en
                                    nødssituasjon
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    href="https://www.nav.no/353421/finn-ditt-nav-kontor"
                                    className="no-text-decoration"
                                >
                                    Finn NAV-kontoret ditt
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a href="https://www.nav.no/87526/generelle-råd-og-veiledning"
                                   className="no-text-decoration"
                                >
                                    Du har rett til opplysning,
                                    råd og veiledning
                                </a>
                            </li>
                            <li className="lenkeboks-linje">
                                <a
                                    className="no-text-decoration"
                                    href="/sosialhjelp/artikkel/514876"
                                >
                                    Slik foregår et møte med
                                    oss
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Dekorator>
    )
};

export default Forside;
