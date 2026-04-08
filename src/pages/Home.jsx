import React, { useState } from 'react'
import { motion } from 'framer-motion'
import linked from '../assets/linked.png'
import { FiGithub } from 'react-icons/fi'
import CardSwap, { Card } from '../components/CardFlip'
import BlurText from '../components/BlurText'
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
import resumePdf from '../abduresume (7).pdf'
import bodyImage from '../body.png'
import recommendationTwoPdf from '../Recommendation2.pdf'
import recommendationJoodeiPdf from '../Recommendation Joodei.pdf'

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

const recommendationLetters = [
  {
    name: 'Uz Consulting International, Turkey',
    role: 'Baris UZ',
    org: 'Letter',
    href: recommendationTwoPdf,
  },
  {
    name: 'Joodei Consultancy, Saudi Arabia',
    role: 'Javed Ahmad Shah',
    org: 'Letter',
    href: recommendationJoodeiPdf,
  },
]

const projects = [
  {
    title: 'Invoxus',
    desc: 'Invoxus is an AI-powered email assistant that helps you process mail in minutes, prioritize important messages with concise summaries, draft replies in your tone, and safely clear clutter',
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
]

const Home = () => {
  const [expandedProjects, setExpandedProjects] = useState({})

  const toggleProjectDescription = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0e0f10] text-slate-100">
      {/* UI guide lines (light white) */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center pt-14 sm:pt-20">
        {/* UI guide lines (light white) - align to container on mobile, full width on larger screens */}
        <div className="pointer-events-none absolute top-[78px] left-0 right-0 z-10 h-px bg-white/25 sm:left-1/2 sm:right-auto sm:w-screen sm:-translate-x-1/2" />
        <div className="pointer-events-none absolute top-[152px] left-0 right-0 z-10 h-px bg-white/25 sm:left-1/2 sm:right-auto sm:w-screen sm:-translate-x-1/2" />
        {/* Vertical guide lines bound to container edges (mobile-safe) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px bg-white/25" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-px bg-white/25" />
        <section className="w-full">
          <div className="w-full px-6">
              <motion.div
                initial="hidden"
                animate="show"
                variants={sectionVariants}
                className="mt-6 flex items-start gap-5 sm:mt-0"
              >
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
              <motion.h1
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="font-mono text-3xl font-bold tracking-wide text-slate-50 sm:text-4xl"
              >
                abdullah 
              </motion.h1>
              <a
                href="https://twitter.com/abduwu08"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-mono text-sm text-slate-400 hover:text-slate-200"
              >
                @abduwu08
              </a>
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={listVariants}
            className="mt-8 space-y-5 text-[15px] leading-7 text-slate-300 sm:text-base"
          >
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
          </motion.div>

          {/* CV section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="mt-10"
          >
            <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500">Curriculum Vitae</p>
            <div className="relative mx-auto mt-5 flex h-[390px] w-full max-w-xs items-center justify-center overflow-hidden">
              <CardSwap
                width={250}
                height={320}
                cardDistance={20}
                verticalDistance={12}
                delay={4200}
                pauseOnHover
                skewAmount={1}
                easing="smooth"
                containerClassName="!left-1/2 !top-1/2 !right-auto !bottom-auto !-translate-x-1/2 !-translate-y-1/2 !origin-center !scale-100"
              >
                <Card customClass="bg-[#111214] border-white/15 p-3">
                  <div className="h-full w-full overflow-hidden rounded-lg border border-white/10 bg-black/30">
                    <iframe
                      src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                      title="CV preview"
                      className="h-full w-full"
                    />
                  </div>
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs text-slate-300 transition-colors hover:text-slate-100"
                  >
                    Open CV
                  </a>
                </Card>
                <Card customClass="bg-[#111214] border-white/15 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Resume / CV </p>
                      <h3 className="mt-2 text-lg text-slate-100">Career Snapshot</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        A quick walkthrough of my internships, impactful builds, technical stack, and the work I care about.
                      </p>
                    </div>
                    <a
                      href={resumePdf}
                      download="abdullah-resume.pdf"
                      className="inline-flex w-fit rounded-md border border-white/15 px-3 py-1.5 text-xs text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                    >
                      Download CV
                    </a>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-transparent" />

          {/* Social links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="mt-6 space-y-4"
          >
            <p className="text-center text-sm text-slate-400">
            Find me around the <span className="text-slate-100">web</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <motion.a whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.95 }} href="mailto:abdullahabdukhan@gmail.com" aria-label="Email" title="Email">
                <img src={emailIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/abduwu08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <img src={twitterIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/abduwu8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <img src={githubIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/abdullahkhannn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://buymeacoffee.com/abduwu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Peerlist"
                title="Donate"
              >
                <img src={peerlistIcon} alt="" className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100" />
              </motion.a>
            </div>
          </motion.div>

          {/* Skills section */}
          <div className="pointer-events-none mt-6 mb-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-10 space-y-8"
          >
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
              <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'JavaScript', src: jsLogo },
                  { name: 'Java', src: javaLogo },
                  { name: 'TypeScript', src: tsLogo },
                  { name: 'Python', src: pythonLogo },
                ].map((lang) => (
                  <motion.div
                    key={lang.name}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-slate-200">Technologies</p>
              <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'React', src: reactLogo },
                  { name: 'Node.js', src: nodeLogo },
                  { name: 'Next.js', src: nextLogo },
                  { name: 'MongoDB', src: mongoLogo },
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Other skills */}
            <div className="space-y-3">
              <p className="font-mono text-sm text-slate-200">Other skills</p>
              <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-wrap items-center gap-4">
                {[
                  { name: 'AWS', src: awsLogo },
                  { name: 'Firebase', src: firebaseLogo },
                  { name: 'Git', src: gitLogo },
                  { name: 'GitHub', src: githubLogo },
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Work section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-12"
          >
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
          </motion.div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-2 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Testimonials / References section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-12"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Social proof</p>
              <h2 className="mt-2 text-xl tracking-[0.12em] text-slate-100">Testimonials & References</h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              A couple of recommendations from people I&apos;ve worked with closely.
            </p>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 divide-y divide-white/10"
            >
              {recommendationLetters.map((letter) => (
                <motion.div
                  key={letter.name}
                  variants={itemVariants}
                  className="py-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-100">{letter.name}</p>
                    <span className="text-xs text-slate-500">{letter.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{letter.role}</p>

                  <a
                    href={letter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-3 block overflow-hidden rounded-xl border border-white/10 bg-black/20"
                    aria-label={`Open ${letter.name}`}
                  >
                    <iframe
                      src={`${letter.href}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                      title={`${letter.name} preview`}
                      className="h-44 w-full opacity-85 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e0f10] via-[#0e0f10]/80 to-transparent px-3 py-2">
                      <p className="text-xs text-slate-300">Preview</p>
                    </div>
                  </a>
                  <a
                    href={letter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-xs text-slate-400 transition-colors hover:text-slate-200"
                  >
                    View letter
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Projects section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-12"
          >
            <p className="text-center text-sm text-slate-300">Here are some of my <span className="text-slate-100">Projects</span></p>
            <div className="mt-8">
              <h2 className="text-2xl text-slate-100"></h2>
              <div className="mt-4 h-px w-full bg-white/10" />
            </div>

            <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 space-y-6">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  className="border-b border-white/10 pb-5"
                >
                  <div className="flex items-start gap-5">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:block w-40 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/30"
                    >
                      <img src={p.preview} alt={`${p.title} preview`} className="h-24 w-full object-cover" />
                    </a>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <a href={p.href} className="text-lg font-semibold text-slate-100">
                          {p.title}
                        </a>
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
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {expandedProjects[p.title] ? p.desc : `${p.desc.slice(0, 120)}...`}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleProjectDescription(p.title)}
                        className="mt-2 text-xs text-slate-400 transition-colors hover:text-slate-100"
                      >
                        {expandedProjects[p.title] ? 'Show less' : 'Read more'}
                      </button>
                      <div className="mt-3">
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-slate-400 transition-colors hover:text-slate-100"
                        >
                          Link to website
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Section separator (full width) */}
          <div className="pointer-events-none mt-12 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />

          {/* Blog / Articles section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-12"
          >
            <p className="text-center text-sm text-slate-300">
              Blog / <span className="text-slate-100">Articles</span>
            </p>

            <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 space-y-4">
              {[
                { title: 'How Far Has AI Been Adopted in Indian Higher Education?', href: 'https://medium.com/@abdullahhkhann/how-far-has-ai-been-adopted-in-indian-higher-education-558a1ba28dbe' },
                { title: 'From Data to Distress: Understanding Student Depression Indicators in Higher Education.', href: 'https://medium.com/@abdullahhkhann/from-data-to-distress-understanding-student-depression-indicators-in-higher-education-f13a3a73e941' },
              ].map((post) => (
                <motion.a
                  key={post.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:border-white/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium">{post.title}</span>
                    <span className="text-xs text-slate-400">Read</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          </div>
          {/* Footer */}
          <div className="pointer-events-none mt-3 mb-1 h-px w-full bg-white/25 sm:relative sm:left-1/2 sm:w-screen sm:-translate-x-1/2" />
          <footer className="pb-0 text-center text-sm text-slate-400">
          </footer>

        </section>
      </div>

      {/* Full-screen end section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative mt-0 flex min-h-screen w-full items-end overflow-hidden border-b border-white/15 px-6 pt-2 pb-2 sm:px-10 sm:pt-4 sm:pb-4 lg:px-20"
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-end justify-between gap-8">
          <div className="absolute top-[10%] left-1/2 z-0 w-[92%] -translate-x-1/2 px-4 text-center sm:hidden">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Summary</p>
              <BlurText
                text="I debug for fun, ship on optimism, and call it character development."
                delay={55}
                animateBy="words"
                direction="top"
                stepDuration={0.22}
                className="mt-4 text-5xl leading-[0.95] text-slate-100 justify-center"
              />
            </div>
          </div>

          <div className="hidden sm:block absolute top-[44%] left-6 z-0 w-[75%] -translate-y-1/2 sm:left-10 lg:left-20">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Summary</p>
            <BlurText
              text="I debug for fun, ship on optimism, and call it character development."
              delay={55}
              animateBy="words"
              direction="top"
              stepDuration={0.22}
              className="mt-4 text-4xl leading-[0.95] text-slate-100 sm:text-6xl lg:text-7xl"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[62%] overflow-hidden sm:hidden">
            <img
              src={bodyImage}
              alt="Abdullah"
              className="absolute right-0 -bottom-28 h-[185%] w-[220%] object-cover object-[88%_100%]"
            />
          </div>

          <div className="pointer-events-none hidden sm:block absolute top-0 right-0 bottom-0 z-10 w-[56%] overflow-hidden">
            <img
              src={bodyImage}
              alt="Abdullah"
              className="absolute right-0 -bottom-32 h-[115%] w-full object-cover object-right-bottom"
            />
            <div className="absolute bottom-0 left-0 h-56 w-[22rem] bg-gradient-to-r from-[#0e0f10] via-[#0e0f10]/99 via-58% to-transparent sm:h-[17rem] sm:w-[32rem]" />
          </div>
        </div>
      </motion.section>
    </main>
  )
}

export default Home

