import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-gray-900 text-gray-500">
                <div
                    className="mt-5 p-5 relative z-50 w-full flex justify-center flex-col px-[200px] mob-footer-px"
                    id="Impressum"
                >
                    <div className="flex justify-center text-sm">
                        <p className="credits">&copy;2018 ATELIER D´ART</p>
                    </div>
                    <div className="mb-6 text-xs">
                        <p className="impressum">
                            IMPRESSUM
                            <br />
                            Angaben gemäß § 5 TMG:
                        </p>
                    </div>
                    <div className="mb-6 text-xs">
                        <p className="impressum">
                            Rainier Zywietz
                            <br />
                            Werkstatt für Werbung und Gestaltung
                            <br />
                            Postfach 1221
                            <br />
                            Telefon: 0171 2635162
                            <br />
                            E-Mail:{" "}
                            <a className="text-red-500" href="mailto:info@atelierdart.de">
                                info@atelierdart.de
                            </a>
                        </p>
                    </div>
                    <p className="impressum mb-6 text-xs ">LIABILITY FOR CONTENT</p>
                    <p className="impressum mb-6 text-xs">
                        As service providers, we are liable for own contents of these
                        websites according to § 7 paragraph 1 German Telemedia Act (TMG).
                        However, according to §§ 8 to 10 German Telemedia Act (TMG), service
                        providers are not obligated to monitor submitted or stored
                        information or to search for evidences that indicate illegal
                        activities. Legal obligations to removing information or to blocking
                        the use of information remain unchallenged. In this case, liability
                        is only possible at the time of knowledge about a specific violation
                        of law. If we become aware of such violations, we will remove this
                        content immediately.
                    </p>
                    <p className="impressum mb-6 text-xs">LIABILITY FOR LINKS</p>
                    <p className="impressum mb-6 text-xs">
                        Our offer contains links to external third-party websites over whose
                        content we have no influence. We therefore cannot accept any
                        liability for this external content. The respective provider or
                        operator of the pages is always responsible for the content of the
                        linked pages. The linked pages were checked for possible legal
                        violations at the time of linking. Illegal content was not
                        recognizable at the time of linking. However, permanent control of
                        the content of the linked pages is not reasonable without concrete
                        evidence of a legal violation. If we become aware of any legal
                        violations, we will remove such links immediately.
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>COPYRIGHT</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        The content and works on these pages created by the site operators
                        are subject to German copyright law. Duplication, processing,
                        distribution and any type of exploitation outside the limits of
                        copyright law require the written consent of the respective author
                        or creator. Downloads and copies of this page are only permitted for
                        private, non-commercial use. Insofar as the content on this page was
                        not created by the operator, the copyrights of third parties are
                        observed. In particular, third-party content is marked as such.
                        Should you nevertheless become aware of a copyright infringement, we
                        ask you to notify us accordingly. If we become aware of any
                        infringements, we will remove such content immediately.
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <i>
                            Source:
                            <a
                                className="text-red-500"
                                rel="nofollow"
                                href="http://www.e-recht24.de/muster-disclaimer.html"
                                target="_blank"
                            >
                                eRecht24
                            </a>
                        </i>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Data protection</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        The responsible body within the meaning of data protection laws, in
                        particular the EU General Data Protection Regulation (GDPR), is:
                        Rainier Zywietz
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Your rights as a data subject</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
                        können Sie jederzeit folgende Rechte ausüben:
                        <br />
                        Auskunft über Ihre bei uns gespeicherten Daten und deren
                        Verarbeitung,
                        <br />
                        Berichtigung unrichtiger personenbezogener Daten,
                        <br />
                        Löschung Ihrer bei uns gespeicherten Daten,
                        <br />
                        Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund
                        gesetzlicher Pflichten noch nicht löschen dürfen,
                        <br />
                        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und
                        <br />
                        Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
                        eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.
                        <br />
                        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
                        jederzeit mit Wirkung für die Zukunft widerrufen. <br />
                        Sie können sich jederzeit mit einer Beschwerde an die für Sie
                        zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde
                        richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder
                        der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für
                        den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: .
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>
                            Zwecke der Datenverarbeitung durch die verantwortliche Stelle und
                            Dritte
                        </strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser
                        Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer
                        persönlichen Daten an Dritte zu anderen als den genannten Zwecken
                        findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte
                        weiter, wenn: <br />
                        Sie Ihre ausdrückliche Einwilligung dazu erteilt haben, <br />
                        die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen
                        erforderlich ist, <br />
                        die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
                        erforderlich ist, <br />
                        die Verarbeitung zur Wahrung berechtigter Interessen erforderlich
                        ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes
                        schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Löschung bzw. Sperrung der Daten</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Wir halten uns an die Grundsätze der Datenvermeidung und
                        Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher
                        nur so lange, wie dies zur Erreichung der hier genannten Zwecke
                        erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen
                        vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen
                        Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten
                        routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt
                        oder gelöscht.
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Verwendung von Scriptbibliotheken (Google Webfonts)</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Um unsere Inhalte browserübergreifend korrekt und grafisch
                        ansprechend darzustellen, verwenden wir auf dieser Website
                        Scriptbibliotheken und Schriftbibliotheken wie z. B. Google Webfonts
                        (
                        <a
                            href="http://www.google.com/webfonts/"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.google.com/webfonts/
                        </a>
                        ). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den
                        Cache Ihres Browsers übertragen. Falls der Browser die Google
                        Webfonts nicht unterstützt oder den Zugriff unterbindet, werden
                        Inhalte in einer Standardschrift angezeigt. Der Aufruf von
                        Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine
                        Verbindung zum Betreiber der Bibliothek aus. Dabei ist es
                        theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu
                        welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten
                        erheben. Die Datenschutzrichtlinie des Bibliothekbetreibers Google
                        finden Sie hier:
                        <a
                            href="https://www.google.com/policies/privacy/"
                            target="_blank"
                            rel="noopener"
                        >
                            https://www.google.com/policies/privacy/
                        </a>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Änderung unserer Datenschutzbestimmungen</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
                        sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
                        Änderungen unserer Leistungen in der Datenschutzerklärung
                        umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
                        erneuten Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                    <p className="impressum mb-6 text-xs">
                        <strong>Fragen an den Datenschutzbeauftragten</strong>
                    </p>
                    <p className="impressum mb-6 text-xs">
                        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
                        E-Mail oder wenden Sie sich direkt an die für den Datenschutz
                        verantwortliche Person in unserer Organisation:
                        <em>Die Datenschutzerklärung wurde mit dem </em>
                        <a
                            href="https://www.activemind.de/datenschutz/datenschutzhinweis-generator/"
                            target="_blank"
                            rel="noopener"
                        >
                            <em>
                                Datenschutzerklärungs-Generator der activeMind AG erstellt
                            </em>
                        </a>
                        <em>.</em>
                    </p>
                    <br />
                    <br />
                    <br />
                </div>
            </footer>
        </>
    )
}

export default Footer