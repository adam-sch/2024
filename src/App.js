import { useState } from 'react';
import './App.css';
import { skills } from './skills.js';
import iconPhone from './images/square-phone-solid.svg'
import iconMail from './images/square-envelope-solid.svg'
import iconLinkedIn from './images/linkedin.svg'
import iconMap from './images/map-location-dot-solid.svg'
import iconGitHub from './images/square-github.svg'



function App() {
  return (
    <div className="main bg-gray-300" id="app">

      <Header>
        <h1 className="header__heading text-5xl text-center font-serif mt-3">
          Adam <strong>Schlabach</strong>
        </h1>
        <HeaderTitleGroup>
          <HeaderTitle title="VP of Engineering"/>
          <HeaderTitle title="Corporate Website Manager"/>
          <HeaderTitle title="Front-end Developer"/>
          <HeaderTitle title="All Things B2B Website"/>
        </HeaderTitleGroup>
      </Header>

      <InfoBar>
        <ProfileInfo
          icon={iconPhone}
          content="503.970.0038"
        />
        <ProfileInfo
          icon={iconMail}
          content="adam.schlabach@gmail.com"
          url="mailto:adam.schlabach@gmail.com"
        />
        <ProfileInfo
          icon={iconLinkedIn}
          content="adamschlabach"
          url="https://www.linkedin.com/in/adamschlabach/"
        />
        <ProfileInfo
          icon={iconGitHub}
          content="adam-sch"
          url="https://github.com/adam-sch"
        />
        <ProfileInfo
          icon={iconMap}
          content="Portland, OR"
        />
      </InfoBar>

      <Section classes="skills">
        <SectionHeading>Skills, Technologies, Frameworks and Services:</SectionHeading>
        <Skills
          filterType="primary"
        />
        <Skills
          filterType="secondary"
        />
      </Section>

      <Section classes="what-i-can-do">
        <SectionHeading>What I can do:</SectionHeading>

        <CanDoLineGroup>
          <CanDoLineItem>Gather requirements, research and implement ideal solutions for projects.</CanDoLineItem>
          <CanDoLineItem>Design, develop and maintain scalable website front-end infrastructure and all aspects of corporate websites.</CanDoLineItem>
          <CanDoLineItem>Design and develop user friendly UX with React, SASS and/or Tailwind, HTML5, and other front end technologies, frameworks and CI/CD solutions.</CanDoLineItem>
          <CanDoLineItem>Quickly pick up new tech stacks and best practices.</CanDoLineItem>
          <CanDoLineItem>Work within existing codebases and conform to coding standards.</CanDoLineItem>
          <CanDoLineItem>Optimize React applications and efficiently manage state.</CanDoLineItem>
          <CanDoLineItem>Optimize website performance, load times and Page Speed Insight scores.</CanDoLineItem>
          <CanDoLineItem>Work alongside technical, non-technical, and creative/marketing teams while helping bridge technical communications.</CanDoLineItem>
          <CanDoLineItem>Work within Javascript frameworks or high-standards WordPress.</CanDoLineItem>
          <CanDoLineItem>Turn designs into semantic, responsive, scalable and maintainable websites.</CanDoLineItem>
          <CanDoLineItem>Deliver quality of work expected in large, publicly traded organizations.</CanDoLineItem>
          <CanDoLineItem>Manage team of engineers and developers, code reviews and standards enforcement.</CanDoLineItem>
        </CanDoLineGroup>
      </Section>

      <Section classes="about">
        <SectionHeading>A little about me:</SectionHeading>
        <p>I have a strong background in website development with a focus on marketing-driven B2B corporate websites. In my current role I manage a team of developers to work alongside marketing teams from just-funded (and maybe a bit overwhelmed) startups to CMOs of mature publicly traded companies to build, manage and maintain their web presence.</p>

        <p>I am adept at both the creative and technical aspects, enabling me to quickly conceptualize and execute solutions. I am adaptable and keen on learning to expand my skill sets and stay updated with evolving web technologies, allowing me to be comfortable researching and adopting new tools, methods, frameworks and tech stacks.</p>

        <p>I’m looking for a website to build and own with a marketing team or to work alongside a team of developers. My current role involves quickly relaunching sites and sending them off to clients, I feel my expertise could shine on fewer and more focused projects to utilize the culmination of my experience and implemented features. I can comfortably work alongside back-end, other front-end developers, designers and marketers.</p>
      </Section>

      <Section classes="portfolio bg-custom-dark-slate text-white py-16 text-center mt-10 text-lg">
        <h2 className="text-3xl uppercase mb-8">A note on my Portfolio:</h2>
        <p>For the last eight years I have been operating under <strong>Non Disclosure Agreements</strong> which limits my work examples, however the caliber of sites and clients I currently work with can be found at <a href="https://atre.net/clients" target="_blank" rel="noreferrer" className="underline">atre.net/clients</a>. As VP of Engineering I am still very hands-on with projects and had a heavy hand in many of our client sites. I was also utilized for any architecture concerns, complex front end builds and high visibility projects. On top of the B2B corporate sites, I’ve also had a hand in internal and private applications.</p>

        <p>This résumé itself can be viewed as an example via the source code on github <a href="https://github.com/adam-sch/2024/tree/main/src" target="_blank" rel="noreferrer" className="underline">here</a>. This app utilizes some straightforward core React examples, Tailwind, and a simple deploy-from-git. Of course there are many more elements and levels of detail that would go into a real production site that I am experienced with but outside the scope of this application. Please also note that the majority of my git contributions are outside of GitHub on private repositories like Pantheon.</p>
      </Section>

      <Section classes="work-history">
        <SectionHeading>Work History:</SectionHeading>

        <WorkHistory
          name="AtreNet"
          website="atre.net"
          url="https://atre.net"
          start="2016"
          end="present"
          title="Senior Engineer -> Director of Engineering -> VP of Engineering"
        >
          <p>At AtreNet I’ve been working as the leader of the engineering department as well as being actively involved with development work. As is the nature for smaller companies I’ve had to embrace performing across a spectrum of responsibilities and aspects of building and maintaining corporate websites.</p>

          <WorkHistoryLineGroup>
            <WorkHistoryLineItem>Creating, upgrading and maintaining WordPress-based platform that was the bread-and-butter for our clients. Enabled fast development while allowing clients to maintain without too much hands-on coding. Constant iterations and improvements over the years for functionality, performance and security. Allowed for high end designs to come to life. Balance of best practices, ease-of-use, client capabilities and developer efficiency.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Rapid relaunches, projects were generally started by myself to create a clean and scalable base site for other developers to quickly build-out the revamped site and eventual client maintenance</WorkHistoryLineItem>
            <WorkHistoryLineItem>Maintenance and quick projects - Constantly maintained client sites including managing wordpress and associated updates, occasionally performance and security review to catch any client mistakes. </WorkHistoryLineItem>
            <WorkHistoryLineItem>Developing strategies, processes and frameworks for managing scalable multi-thousand page sites.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Demoing platform and capabilities during sales pitches.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Requirements gathering and initial project infrastructure planning plus execution.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Project management and client relations.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Hiring and training engineers/developers.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Coordinating with other development, engineering and marketing teams.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Project costs and scoping.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Overcoming obstacles in limited-resource and time-constrained development.</WorkHistoryLineItem>
          </WorkHistoryLineGroup>

        </WorkHistory>

        <WorkHistory
          name="Freelance Design, Development and Consulting"
          start="2005"
          end="2018"
          title="Front-End Engineer"
        >
          <p>Worked for many years as a freelance developer for various clients, often being a one-man-shop to meet client’s needs and also working closely with back-end engineers or existing development teams.</p>

          <WorkHistoryLineGroup>
            <WorkHistoryLineItem>Web site concepting, building and maintenance.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Captive portals.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Logos and other graphic assets.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Brand management.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Analytics, reports and A/B testing.</WorkHistoryLineItem>
            <WorkHistoryLineItem>AdWord campaigns and landing pages.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Consulting and coordinating with back-end engineers.</WorkHistoryLineItem>
            <WorkHistoryLineItem>Performance optimization.</WorkHistoryLineItem>
            <WorkHistoryLineItem>SEO Support.</WorkHistoryLineItem>
          </WorkHistoryLineGroup>

        </WorkHistory>

        <WorkHistory
            name="Matrix Networks"
            start="2008"
            end="2015"
            title="Engineering Supervisor and Marketing Support"
        >
          <p>At Matrix Networks I helped build and maintain their customer facing website, many intranet projects for live monitoring of network assets, and captive portals for on-site equipment. Also acted as the engineering leader for the hospitality internet department.</p>

          <WorkHistoryLineGroup>
            <WorkHistoryLineItem>Web & print assets</WorkHistoryLineItem>
            <WorkHistoryLineItem>Engineer supervisor</WorkHistoryLineItem>
            <WorkHistoryLineItem>Project management</WorkHistoryLineItem>
            <WorkHistoryLineItem>Networking Tech/Engineer</WorkHistoryLineItem>
            <WorkHistoryLineItem>Website and portal analytics</WorkHistoryLineItem>
          </WorkHistoryLineGroup>

        </WorkHistory>
      </Section>

      <Section classes="footer bg-custom-dark-slate text-white py-16 text-center mt-10 text-lg !mb-0">
        <h2 className="text-3xl mb-0.5"><em>Thank You!</em></h2>
        <a href="#app" className="uppercase tracking-wider font-bold mt-0.5 text-sm opacity-75">Back to top</a>
      </Section>

    </div>
  );
}

export default App;


function Header({ children }) {
  return (
    <header className="header pt-10 text-custom-dark-blue">
      <div className="container mx-auto px-5">
        {children}
      </div>
    </header>
  )
}

function HeaderTitleGroup({ children }) {
  return (
    <div className="header__title-group flex flex-wrap justify-center text-center py-7 mb-2">
      {children}
    </div>
  )
}

function HeaderTitle({title}) {
  return (
    <div
      className="title uppercase px-2 sm:px-5 py-1 lg:py-0 lg:border-r-2 flex last-of-type:border-r-0 border-stone-400 font-extrabold text-sm tracking-wide [&:nth-of-type(2)>h3]:animation-delay-300 [&:nth-of-type(3)>h3]:animation-delay-500 [&:nth-of-type(4)>h3]:animation-delay-700">
      <h3 className="animate-bounceInFade opacity-0 animation-delay-100">{title}</h3>
    </div>
  );
}

function InfoBar({ children }) {
  return (
    <div className="infobar">
      <div className="container mx-auto">
        <div className="infobar__bar bg-custom-dark-slate py-5 lg:px-10 rounded-md size-full flex flex-wrap justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

function ProfileInfo({content, icon, url}) {
  return (
    <div className="info text-white px-5 my-2 lg:border-r-2 w-full sm:w-auto flex justify-center content-center last-of-type:border-r-0 border-slate-500">
      <div className="info__media max-w-8">
        <img src={icon} alt={content} className="size-full pr-2"/>
      </div>
      <h3 className="text-nowrap flex items-center font-bold tracking-wide">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          content
        )}
      </h3>
  </div>
);
}

function Skills( {filterType} ) {
  const primarySkills = skills.filter(skill => skill.type === filterType);
  const [listItems, setListItems] = useState(primarySkills);

  function sortByAlphabetically() {
    const sortedList = [...listItems].sort((a, b) => a.name.localeCompare(b.name));
    setListItems(sortedList);
  }

  function sortByID() {
    const sortedList = [...listItems].sort((a, b) => a.id - b.id);
    setListItems(sortedList);
  }

  return (
    <div className="skills mb-5 last-of-type:mb-0">
      <ul className={`flex flex-wrap ${filterType === 'primary' ? 'md:text-xl font-bold' : 'font-semibold text-sm sm:text-base'}`}>
        {listItems.map(skill => (
            <li key={skill.id} className="mr-5 ">{skill.name}</li>
        ))}
      </ul>
      <button className="uppercase tracking-wider text-xs font-bold opacity-70 mr-5" onClick={sortByAlphabetically}>Sort Alphabetically</button>
      <button className="uppercase tracking-wider text-xs font-bold opacity-70 mr-5" onClick={sortByID}>Sort by ID</button>
    </div>
  );
}

function Section({ children, classes }) {
  return (
    <section className={"mt-10 mb-14 " + classes}>
      <div className="container lg:max-w-screen-lg mx-auto px-5">{children}</div>
    </section>
  )
}

function SectionHeading({ children, classes }) {
  return (
    <h2 className={classes + " text-2xl font-bold py-2 mb-2 border-b-2 border-gray-400 font-serif text-custom-dark-slate"}>
      {children}
    </h2>
  )
}

function WorkHistory({ name, website, url, start, end, title, children }) {
  return (
    <div className="work-history__item mb-10">
      <div className="work-history__heading flex align-center content-end">
        <h3 className="text-2xl">{name}</h3>
        {website &&
          <h5 className="flex align-bottom content-end flex-wrap ml-2 mb-0.5">
            (<a href={url} target="_blank" rel="noreferrer" className="text-sky-600">{website}</a>)
          </h5>
        }
      </div>
      <h4 className="work-history__title uppercase font-extrabold text-slate-700">{title}</h4>
      <div className="work-history__timeline mb-3">
        <strong>{start} - {end}</strong>
      </div>
        {children}
    </div>
  )
}

function WorkHistoryLineGroup({ children }) {
  return (
    <ul className="work-history__line-items marker:text-sky-400 list-outside list-disc ml-6">
      {children}
    </ul>
  )
}
function WorkHistoryLineItem({ children }) {
  return (
    <li className="text-md mt-1 mb-1">{children}</li>
  )
}

function CanDoLineGroup({ children }) {
  return (
    <ul className="can-do__line-items marker:text-sky-400 list-outside list-disc ml-6">
      {children}
    </ul>
  )
}
function  CanDoLineItem({ children }) {
  return (
    <li className="text-lg mt-1 mb-1">{children}</li>
  )
}