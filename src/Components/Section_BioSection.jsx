export default function BioSection() {
  return (
    <div id="about-me" className="section-bio">
      <div className="section-bio-title">
        <h1>Om mig</h1>
      </div>
      <div className="section-bio-flexrow">
        <div className="section-bio-infosection">
          <div className="section-bio-imagesection">
            <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/PortraitMikael.jpg"></img>
          </div>
          <div className="section-bio-infosectionText">
            <div id="blockA" className="section-bio-skills-container">
              <span>C#</span>
              <span>.NET</span>
              <span>React</span>
              <span>AWS</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Figma</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>Unity</span>
              <span>Maya</span>
              <span>Virtual Reality</span>
              <span>Augmented Reality</span>
              <span>IOS</span>
              <span>Android</span>
              <span>GIT</span>
            </div>
            <div id="blockB" className="section-bio-title-info">
              <h2>Mikael Hverven-Landy</h2>
            </div>
            <div id="blockB" className="section-bio-infodesc">
              <p>
                Jag är en ambitiös lösningsfokuserad och kreativ
                systemutvecklare som trivs med nya utmaningar och har ett stort
                intresse för den kreativa processen att förena logik och grafik
                vilket även lett mig in i frontend-utveckling med React och
                Javascript. Har haft möjligheten att arbeta med intressanta
                projekt med hjälp av innovativa teknologier som VR och AR, och
                brinner för nya lösningar och uppfinningsrika sätt att driva
                samhället framåt med ett team av motiverade kollegor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
