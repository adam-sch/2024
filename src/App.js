import './App.css';
import { skills } from './skills.js';
import iconPhone from './images/square-phone-solid.svg'
import iconMail from './images/square-envelope-solid.svg'
import iconLinkedIn from './images/linkedin.svg'
import iconMap from './images/map-location-dot-solid.svg'
import iconGitHub from './images/square-github.svg'


function App() {
  return (
    <div className="main bg-gray-300 pb-10">

      <header className="header pt-10 text-gray-700">
        <div className="container mx-auto">
          <h1 className="header__heading text-5xl font-bold text-center font-serif mt-3">
            Adam Schlabach
          </h1>

          <div className="header__title-group flex justify-center py-7 mb-2">
            <ProfileTitle
              title="VP of Engineering"
            />
            <ProfileTitle
              title="Corporate Website Manager"
            />
            <ProfileTitle
              title="Front-end Developer"
            />
            <ProfileTitle
              title="All Things B2B Website"
            />
          </div>
        </div>
      </header>

      <div className="profile-info">
        <div className="container mx-auto">
          <div className="profile-info__bar bg-gray-700 py-5 px-10 rounded-md size-full flex justify-center">
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
          </div>
        </div>
      </div>

      <Section classes="skills">
        <SectionHeading>Skills and Technologies:</SectionHeading>
        <Skills />
        <SkillsSecondary />
      </Section>

      <Section classes="what-i-can-do">
        <SectionHeading>What I can do:</SectionHeading>

      </Section>

      <Section classes="about">
        <SectionHeading>A little about me:</SectionHeading>
        <p>I have a strong background in website development with a core focus on marketing-driven corporate websites. In my current role I work almost exclusively alongside marketing teams from just-funded and maybe a bit overwhelmed startups to CMOs of mature publicly traded companies to build, manage and maintain their web presence.</p>

        <p>My expertise spans both creative and technical aspects, enabling me to quickly conceptualize and execute solutions. I am adaptable and keen on learning to expand my skill sets and stay updated with evolving web technologies, allowing me to quickly research and adopt new tools, methods, frameworks and tech stacks.</p>

        <p>IM LOOKING FOR... Either a website to build and own with a marketing team or to work alongside a team of developers. My current role involves quickly relaunching sites and sending them off to clients, I feel my expertise could shine on fewer projects and utilize the culmination of my experience and implemented features. Marketing teams are where I’ve had the most experience but I can comfortably work alongside back-end and other front-end developers.</p>
      </Section>

      <Section classes="portfolio bg-stone-950 text-white py-16 text-center mt-10 text-lg">
        <h2 className="text-3xl uppercase font-bold mb-8">A note on my Portfolio:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Section>

      <Section classes="work-history">
        <SectionHeading>Work History:</SectionHeading>

        <WorkHistory
          name="AtreNet"
          website="atre.net"
          url="https://atre.net"
          start="2016"
          end="present"
          title="VP of Engineering"
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

    </div>
  );
}

export default App;


function ProfileTitle({ title, icon }) {
  return (
    <div className="title uppercase px-5 border-r-2 flex last-of-type:border-r-0 border-stone-400 font-extrabold text-sm tracking-wide">
      <h3>{title}</h3>
    </div>
  );
}

function ProfileInfo({ content, icon, url }) {
  return (
    <div className="info text-white px-5 border-r-2 flex content-center last-of-type:border-r-0 border-slate-500">
      <div className="info__media max-w-8">
        <img src={icon} alt={content} className="size-full pr-2" />
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

function Skills() {
  const primarySkills = skills.filter(skill =>
    skill.type === 'primary'
  );
  const listItems = primarySkills.map(skill =>
    <li key={skill.id} className="mr-5">{skill.name}</li>
  );
  return <ul className="text-xl font-semibold flex flex-wrap">{listItems}</ul>
}

function SkillsSecondary() {
  const secondarySkills = skills.filter(skill =>
    skill.type === 'secondary'
  );
  const listItems = secondarySkills.map(skill =>
    <li key={skill.id} className="mr-5">{skill.name}</li>
  );
  return <ul className="flex flex-wrap mt-5">{listItems}</ul>
}

function Section({ children, classes, container = true }) {
  return (
    <section className={classes + " mt-14"}>
      <div className="container max-w-screen-xl mx-auto px-5">{children}</div>
    </section>
  )
}

function SectionHeading({ children, classes }) {
  return (
    <h2 className={classes + " text-2xl font-bold py-2 mb-2 border-b-2 border-gray-400 font-serif text-gray-700"}>
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
    <li className="text-sm mt-1 mb-1">{children}</li>
  )
}