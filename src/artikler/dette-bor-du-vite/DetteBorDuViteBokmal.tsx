import * as React from "react";
import Artikkel from "../Artikkel";
import {
  Ingress,
  Innholdstittel,
  Normaltekst,
  Undertittel
} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";

const DetteBorDuViteBokmal: React.FC = () => {
  return (
    <Artikkel>
      <Innholdstittel>Lene test 123. Dette bør du vite før du søker</Innholdstittel>

      <Ingress>
        Økonomisk sosialhjelp er en midlertidig inntekt. Før du kan få stønad må
        du vurdere alle andre muligheter til å forsørge deg selv. Dette kan for
        eksempel være gjennom jobb, andre inntekter eller egne midler.
      </Ingress>

      <Undertittel>Før du søker</Undertittel>
      <Normaltekst>
        NAV må ha tilstrekkelig dokumentasjon og trenger opplysninger om
        inntekter og utgifter. Du må i utgangspunktet dokumentere alle
        opplysninger skriftlig.
      </Normaltekst>

      <Ekspanderbartpanel
        tittel="Eksempler på hva du må legge ved søknaden"
        border
      >
        Panelet vil da ekspandere og vise innholdet.
      </Ekspanderbartpanel>

      <br />
      <Normaltekst>
        Du må ha lovlig opphold og ha fast bopel i Norge for å ha rett til
        økonomisk sosialhjelp. Hvis du oppholder deg i utlandet, har du ikke
        rett til økonomisk sosialhjelp.
      </Normaltekst>
      <br />
      <Normaltekst>
        Alle har rett til å søke om økonomisk sosialhjelp og få en individuell
        vurdering av saken sin.
      </Normaltekst>

      <Undertittel>Etter du har søkt</Undertittel>
      <Normaltekst>
        Saksbehandlingstiden varierer fra kommune til kommune. Hvis det går mer
        enn én måned, skal du få et foreløpig svar. Hvis du ikke har levert all
        nødvendig dokumentasjon, kan det ta lengre tid før du får svar på
        søknaden din. Hvis du er i en nødssituasjon, skal du få et raskt svar.
      </Normaltekst>
      <br />
      <Normaltekst>
        Du må gi beskjed til oss hvis situasjonen din endrer seg etter at du har
        søkt.
      </Normaltekst>
      <br />
      <Normaltekst>
        Når vi har behandlet søknaden din, får du et vedtak som du må lese nøye.
        Ofte vil vi stille ett eller flere krav til deg i vedtaket som du må
        oppfylle.
      </Normaltekst>
      <br />
      <Normaltekst>
        Du kan klage hvis du mener at vedtaket er feil. Klagefrist er 3 uker fra
        du mottar vedtaket.
      </Normaltekst>
    </Artikkel>
  );
};

export default DetteBorDuViteBokmal;
