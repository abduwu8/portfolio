import React from 'react'
import linked from '../assets/linked.png'
import { FiDownload, FiGithub } from 'react-icons/fi'
import jsLogo from '../assets/Logos/js.png'
import javaLogo from '../assets/Logos/java.png'
import tsLogo from '../assets/Logos/ts.png'
import pythonLogo from '../assets/Logos/py.png'
import reactLogo from '../assets/Logos/react.png'
import nodeLogo from '../assets/Logos/node.png'
import nextLogo from '../assets/Logos/next.png'
import mongoLogo from '../assets/Logos/mongo.png'
import awsLogo from '../assets/Logos/aws.png'
import firebaseLogo from '../assets/Logos/firebase.png'
import gitLogo from '../assets/Logos/git.png'
import githubLogo from '../assets/Logos/github.png'
import emailIcon from '../assets/Logos/email.png'
import twitterIcon from '../assets/Logos/twitter.png'
import githubIcon from '../assets/Logos/github.png'
import linkedinIcon from '../assets/Logos/linkedin.png'
import peerlistIcon from '../assets/Logos/donation.png'
import fladdraLogo from '../assets/Logos/fladdralogo.jfif'
import oviverseLogo from '../assets/Logos/oviverse.png'
import invoxusPreview from '../assets/Logos/invoxus.png'
import unoraPreview from '../assets/Logos/unora.png'

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0e0f10] text-slate-100">
      {/* UI guide lines (light white) */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center border-y border-white/25 pt-14 sm:pt-20">
        {/* UI guide lines (light white) - align to container on mobile, full width on larger screens */}
        <div className="pointer-events-none absolute top-[78px] left-0 right-0 z-10 h-px bg-white/25 sm:left-1/2 sm:right-auto sm:w-screen sm:-translate-x-1/2" />
        <div className="pointer-events-none absolute top-[152px] left-0 right-0 z-10 h-px bg-white/25 sm:left-1/2 sm:right-auto sm:w-screen sm:-translate-x-1/2" />
        {/* Vertical guide lines bound to container edges (mobile-safe) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px bg-white/25" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-px bg-white/25" />
        <section className="w-full">
          <div className="w-full px-6">
              <div className="mt-6 flex items-start gap-5 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/abdullahkhannn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10"
              aria-label="Open LinkedIn profile"
            >
              <img
                src={linked}
                alt="Profile"
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
            </a>

            <div className="min-w-0">
              <h1 className="font-mono text-3xl font-bold tracking-wide text-slate-50 sm:text-4xl">
                abdullah 
              </h1>
              <a
                href="https://twitter.com/abduwu08"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-mono text-sm text-slate-400 hover:text-slate-200"
              >
                @abduwu08
              </a>
            </div>
          </div>

          {/* Intro text */}
          <div className="mt-8 space-y-5 text-[15px] leading-7 text-slate-300 sm:text-base">
            <p>
              I&apos;m <span className="text-slate-50">Abdullah</span>, a 20yo
              developer living in Mumbai, India. I love to contribute to open source and building{' '}
              <span className="font-semibold text-slate-50"></span>{' '}
              random projects.
            </p>
            <p>
            I geek out on{' '}
              <span className="font-semibold text-slate-50">
              software development &amp; AI/ML experiments
              </span>
              . Front-end flair? Backend brains? Got both.{' '}
              <span className="font-semibold text-slate-50">
              And of course,  research work!
              </span>
            </p>
            <p>
            When code's on pause (rare, I know) , I'm usually exploring new tech stacks, reading programming books and blogs, sharpening interview skills, or building projects for fun and open source.
            </p>
            <p>
              Let&apos;s <span className="font-semibold text-slate-50">be real</span>
              : I&apos;m always hunting new challenges, advanced AI, open source collabs, or that breakthrough project. One day, my parents might even grasp this{' '}
              <span className="font-semibold text-slate-50">"software engineer" life!</span>
            </p>
          </div>

          {/* Single CTA icon link */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-transparent px-1 py-1 text-slate-200"
              aria-label="Resume"
              title="Resume"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 shadow-sm">
                <FiDownload className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-transparent" />

          {/* Social links */}
          <div className="mt-6 space-y-4">
            <p className="text-center text-sm text-slate-400">
            Find me around the <span className="text-slate-100">web</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="mailto:abdullah@example.com" aria-label="Email" title="Email">
                <img src={emailIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </a>
              <a
                href="https://twitter.com/abduwu08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <img src={twitterIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </a>
              <a
                href="https://github.com/abduwu8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <img src={githubIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahkhannn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </a>
              <a
                href="https://buymeacoffee.com/abduwu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Peerlist"
                title="Donate"
              >
                <img src={peerlistIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Skills section */}
          <div className="pointer-events-none mt-6 mb-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />
          <div className="mt-10 space-y-8">
            <div>
              <h2 className=" text-xl tracking-[0.3em] text-slate-200">
                Skills
                <span className="ml-3 text-xs font-normal tracking-normal text-slate-500">

                </span>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                These are the technologies I&apos;ve learned and worked with. This list is constantly
                evolving as I continue to learn and grow as a developer.
              </p>
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-slate-200">Languages</p>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'JavaScript', src: jsLogo },
                  { name: 'Java', src: javaLogo },
                  { name: 'TypeScript', src: tsLogo },
                  { name: 'Python', src: pythonLogo },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className="group flex flex-col items-center gap-1"
                  >
                    <img
                      src={lang.src}
                      alt={lang.name}
                      className="h-12 w-12 object-contain"
                    />
                    <span className="text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-slate-200">Technologies</p>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'React', src: reactLogo },
                  { name: 'Node.js', src: nodeLogo },
                  { name: 'Next.js', src: nextLogo },
                  { name: 'MongoDB', src: mongoLogo },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-1"
                  >
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-12 w-12 object-contain"
                    />
                    <span className="text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other skills */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-slate-200">Other skills</p>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'AWS', src: awsLogo },
                  { name: 'Firebase', src: firebaseLogo },
                  { name: 'Git', src: gitLogo },
                  { name: 'GitHub', src: githubLogo },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center gap-1"
                  >
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className="h-12 w-12 object-contain"
                    />
                    <span className="text-xs text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Work section */}
          <div className="mt-12">
            <div className="flex items-baseline gap-4">
              <h2 className=" text-xl tracking-[0.25em] text-slate-100">Work Experience</h2>
              <p className=" text-xs text-slate-500"></p>
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-900/70 ring-1 ring-white/10">
                    <img src={fladdraLogo} alt="Fladdra Tech." className="h-full w-full object-cover" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className=" text-sm font-semibold text-slate-100">
                        Fladdra Tech.
                      </p>
                      
                    </div>
                    <p className="mt-1 text-sm text-slate-100">Software Development (Intern)</p>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-100">
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Built a returns management platform: React Native app, React admin dashboard, Django + PostgreSQL backend.
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Implemented Oracle EBS sync and a multi-tenant architecture for multiple business units.
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Automated approvals + notifications to reduce manual work and speed up turnaround.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-mono text-sm text-slate-100">June 2025 - August 2025</p>
                  <p className="mt-1 text-xs text-slate-100/70">Remote / Pune</p>
                </div>
              </div>

              <div className="pointer-events-none mb-8 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

              <div className="mt-8 flex flex-col gap-4 pb-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-900/70 ring-1 ring-white/10">
                    <img src={oviverseLogo} alt="OviVerse Pvt Ltd." className="h-full w-full object-cover" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className=" text-sm font-semibold text-slate-100">
                        OviVerse Pvt Ltd.
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-slate-100">Full-Stack Developer (Intern)</p>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-100">
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Built and optimized RESTful APIs to improve performance and data flow.
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Shipped responsive React.js UIs with secure, efficient Node.js backend services.
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        Partnered across teams to align features with user needs and business goals.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-mono text-sm text-slate-100">February 2025 - April 2025</p>
                  <p className="mt-1 text-xs text-slate-100/70">Remote / Manipur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-2 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Projects section */}
          <div className="mt-12">
            <p className="text-center text-sm text-slate-300">Here are some of my <span className="text-slate-100">Projects</span></p>
            <div className="mt-8">
              <h2 className="text-2xl text-slate-100"></h2>
              <div className="mt-4 h-px w-full bg-white/10" />
            </div>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Invoxus',
                  desc: 'Invoxus is an AI‑powered email assistant that helps you process mail in minutes, prioritize important messages with concise summaries, draft replies in your tone, and safely clear clutter',
                  href: 'https://invoxus.email/',
                  repo: 'https://github.com/abduwu8/invoxus',
                  preview: invoxusPreview,
                },
                {
                  title: 'Unora',
                  desc: 'Explore real student reviews, compare universities, check realistic budgets, and see visa document checklists, all in one focused place.',
                  href: 'https://unora.cc/',
                  repo: 'https://github.com/abduwu8/unora',
                  preview: unoraPreview,
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="flex overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                >
                  <div className="w-40 shrink-0 bg-black/40 sm:w-56">
                    <img src={p.preview} alt="" className="h-full w-full object-contain p-3 opacity-90" />
                  </div>
                  <div className="flex min-w-0 flex-1 items-start justify-between gap-6 p-5 sm:p-6">
                    <div className="min-w-0">
                      <a
                        href={p.href}
                        className="block text-lg font-semibold text-slate-100"
                      >
                        {p.title}
                      </a>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{p.desc}</p>
                    </div>
                    <a
                      href={p.repo}
                      aria-label={`${p.title} GitHub`}
                      title="GitHub"
                      className="shrink-0 text-slate-300 hover:text-slate-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Blog / Articles section */}
          <div className="mt-12">
            <p className="text-center text-sm text-slate-300">
              Blog / <span className="text-slate-100">Articles</span>
            </p>

            <div className="mt-8 space-y-4">
              {[
                { title: 'How Far Has AI Been Adopted in Indian Higher Education?', href: 'https://medium.com/@abdullahhkhann/how-far-has-ai-been-adopted-in-indian-higher-education-558a1ba28dbe' },
                { title: 'From Data to Distress: Understanding Student Depression Indicators in Higher Education.', href: 'https://medium.com/@abdullahhkhann/from-data-to-distress-understanding-student-depression-indicators-in-higher-education-f13a3a73e941' },
              ].map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:border-white/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium">{post.title}</span>
                    <span className="text-xs text-slate-400">Read</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          </div>
          {/* Footer */}
          <div className="pointer-events-none mt-16 mb-8 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />
          <footer className="pb-12 text-center text-sm text-slate-400">
            Made with 💙 by <span className="text-slate-100">Abdullah</span>
          </footer>
        </section>
      </div>
    </main>
  )
}

export default Home

