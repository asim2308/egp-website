// @ts-nocheck
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, CheckCircle2, ChevronDown, Clock, Cpu, DollarSign, Landmark, MessageSquare, Play, Send, ShieldCheck, Target, Users, XCircle, Zap, BriefcaseBusiness, Phone } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Qualified sales conversations generated monthly" },
  { icon: DollarSign, value: "$10M+", label: "Pipeline influenced across outbound campaigns in the last 12 months" },
  { icon: BarChart3, value: "100K+", label: "Targeted prospects reached every month" },
  { icon: Clock, value: "48 Hours", label: "Average time to generate the first qualified sales meeting after campaign launch" },
];

const failures = ["Too broad of a market with no clear ICP", "Generic outreach that sounds identical to every other agency", "Poor data quality leading to wrong decision-makers", "Weak deliverability causing emails to miss the inbox", "Volume without relevance or personalization", "Treating outbound as a one-time campaign instead of an ongoing engine"];
const wins = ["Precision-targeted ideal buyer targeting", "Personalized outreach that gets replies", "Qualification process to ensure quality", "Qualified meetings booked, not just leads", "A scalable system for predictable pipeline"];

const process = [
  { icon: Target, title: "ICP & Market Research", text: "We identify your highest-converting industries, buyer personas, and decision-makers before outreach begins.", bullets: ["ICP segmentation", "Account research"] },
  { icon: ShieldCheck, title: "Deliverability Infrastructure", text: "We build the technical outbound infrastructure required to consistently land in inboxes at scale.", bullets: ["Secondary domains", "Inbox warmup", "SPF / DKIM / DMARC"] },
  { icon: Send, title: "Outbound Campaign Launch", text: "Personalized multi-touch campaigns are launched across email and LinkedIn with clear messaging angles.", bullets: ["Email copywriting", "Multi-touch sequencing"] },
  { icon: MessageSquare, title: "Qualified Meetings", text: "We qualify buying intent and convert engaged prospects into qualified sales meetings booked directly on your calendar.", bullets: ["Lead qualification", "Meeting booking"] },
  { icon: BarChart3, title: "Continuous Optimization & Scale", text: "Campaigns are refined and scaled based on reply quality, meeting conversion, and pipeline performance.", bullets: ["Performance optimization", "Campaign scaling"] },
];

const caseStudies = [
  ["AI Services", "25–30 qualified meetings/month", "Lead flow was inconsistent and reliant on referrals.", "Built targeted campaigns around agency partnerships and AI demand.", "Scaled to 25–30 qualified meetings per month and influenced $1M–$2M in pipeline."],
  ["AI / FinTech", "3–5 sales calls/week", "The company had no consistent sales call flow.", "Launched outbound for sales pipeline and VC outreach.", "Moved from 0 sales calls to 3–5 calls per week and generated investor meetings."],
  ["Healthcare", "30+ qualified conversations", "Outreach was unstructured and not creating enough qualified conversations.", "Replaced ad-hoc prospecting with segmented targeting and qualified follow-up.", "Generated 30+ qualified conversations in the first month and supported signed MSAs."],
  ["IT Services / MSP", "10–20 meetings/week", "Sales were inconsistent and lacked a predictable weekly meeting flow.", "Built structured outbound campaigns using workshop-led positioning.", "Created 10–20 meetings per week and supported a 6-figure monthly pipeline."],
  ["Tech & Design", "$253K+ pipeline", "Growth depended heavily on referrals.", "Built a targeted outbound engine around clear buyer problems.", "Booked 34 qualified meetings in 45 days and added $253K+ pipeline in 60 days."],
  ["Energy Advisory", "3–5 commercial leads/week", "Outbound was not yet a reliable commercial channel.", "Launched campaigns around energy cost and contract timing.", "Closed multiple energy contracts and averaged 3–5 commercial leads every week."],
];

const industries = [
  { icon: Cpu, title: "AI & Technology", items: ["AI companies", "SaaS platforms", "Developer tools", "Enterprise software"] },
  { icon: BriefcaseBusiness, title: "Professional Services", items: ["Consulting firms", "IT & MSP companies", "Agencies", "Advisory firms"] },
  { icon: Zap, title: "Energy & Industrial", items: ["Energy suppliers", "Manufacturing", "Industrial services", "Electrical suppliers"] },
  { icon: ShieldCheck, title: "Healthcare & Compliance", items: ["Healthcare companies", "EHS & compliance", "Medical operations", "Regulated industries"] },
  { icon: Landmark, title: "Finance & Investment", items: ["FinTech", "Capital raising", "Investment firms", "M&A advisory"] },
  { icon: Building2, title: "Traditional B2B", items: ["Logistics", "Construction", "Distribution", "Commercial services"] },
];

const faqs = [
  [
    "How long does it take to see results from outbound?",
    "We launch campaigns within 7–10 days. Most clients start seeing initial conversations within the first week after launch. On average, clients generate 5–10 new sales conversations during the first month depending on market, offer, and targeting quality."
  ],

  [
    "How much does it cost?",
    "Our partnership starts at $3,000/month. Pricing varies based on outreach volume, targeting complexity, and overall scope. We tailor engagement based on your goals, requirements and growth stage."
  ],

  [
    "What does “done-for-you” mean?",
    "We manage the entire outbound process end-to-end from targeting and list building to copywriting, infrastructure, campaign management, and booking meetings. Your team focuses on closing while we handle pipeline generation."
  ],

  [
    "We’ve tried other outbound agencies before and it never worked. How are you different?",
    "Most outbound fails because of poor targeting, weak messaging, bad deliverability, and inconsistent execution. We take a very different approach. We intentionally work with only 10 clients at a time so every engagement gets hands-on attention, fast iteration, and true 1-1 focus instead of being passed around to junior account managers. We also offer a 30-day pilot so you can validate the process, campaign quality, and conversations before making any further investment. There are no long-term contracts, you continue only if you’re genuinely satisfied with the results and overall partnership. Our approach is extremely execution-heavy. We continuously test new messaging angles, monitor campaign performance daily, refine targeting based on real reply data, rotate infrastructure when needed, and optimize campaigns week-over-week until we identify winning angles that can be scaled further instead of launching campaigns once and letting them run untouched for months."
  ],

  [
    "Do we get to see what messaging scripts and data you’ll be using?",
    "Absolutely. Every piece of messaging, targeting criteria, and lead data is shared with you for approval before we launch any campaign. You’ll have complete visibility into the strategy, copy, lead lists, and campaign direction at every stage so nothing goes live without your alignment and approval."
  ],

  [
    "Do you offer guarantees?",
    "We don’t guarantee a fixed number of meetings because outbound performance depends on multiple variables like your market, offer, positioning, pricing, and sales process. What we do guarantee is that we put all the right inputs in place like highly targeted lists, strong messaging, deliverability infrastructure, continuous optimization, and consistent execution to give campaigns the highest probability of success. We’re also highly selective about the clients we work with and only take on partnerships where we genuinely believe we can generate meaningful results."
  ],

  [
    "If we decide to part ways, what happens to the data & infrastructure?",
    "You retain full ownership of all domains, inboxes, lead data, campaigns, and infrastructure built during the engagement. Nothing is locked in, and we ensure a smooth handover if we ever part ways."
  ],
];

export default function EGPWebsiteMockup() {
  const [lightTheme] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const bg = lightTheme ? "bg-[#F4F7FB] text-slate-950" : "bg-[#02040A] text-white";
  const soft = lightTheme ? "text-slate-600" : "text-white/70";
  const heading = lightTheme ? "text-slate-950" : "text-white";
  const card = lightTheme ? "border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)]" : "border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,.96),rgba(5,10,22,.98))] shadow-[0_25px_70px_rgba(0,0,0,.45)]";

  return (
    <div className={`min-h-screen overflow-hidden ${bg}`}>
      <div className={lightTheme ? "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(59,130,246,.12),transparent_28%),linear-gradient(180deg,#F8FBFF,#EEF4FF,#F4F7FB)]" : "pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(59,130,246,.40),transparent_28%),linear-gradient(180deg,#02040A,#040816,#02040A)]"} />
      <div className="relative z-10">
        <header className="mx-auto flex max-w-[1320px] items-center justify-between px-8 py-5">
          <div className="text-[34px] font-black tracking-[0.22em]">EGP</div>
          <nav className={`hidden items-center gap-10 text-sm font-medium md:flex ${lightTheme ? "text-slate-700" : "text-white/80"}`}>
            <a href="#how">How It Works</a><a href="#case-studies">Case Studies</a><a href="#industries">Industries</a><a href="#pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            
            <Button className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-8 py-6 font-bold text-white">Book a Strategy Call</Button>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-7 px-8 pb-14 pt-14 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-6 py-3 shadow-[0_0_30px_rgba(37,99,235,.12)] backdrop-blur-sm">
              <p className="text-sm font-black uppercase tracking-[0.08em] text-blue-300">
                Exclusively for B2B Companies looking to scale their Sales Pipeline
              </p>
            </div>
            <h1 className={`max-w-4xl text-[52px] font-black leading-[0.98] tracking-[-0.055em] md:text-[72px] ${heading}`}>Get Qualified<br />Sales Conversations<br />With Your Ideal Buyer</h1>
            <p className={`mt-6 max-w-2xl text-[19px] leading-[34px] ${soft}`}>We build and run outbound systems that engage your ideal prospects, capture their interest, and get your team more high-quality sales conversations.</p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row"><Button size="lg" className="h-20 rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-8 text-lg font-bold text-white">Book a Strategy Call <ArrowRight className="ml-4 h-6 w-6" /></Button><Button size="lg" variant="outline" className="h-20 rounded-xl border-white/15 bg-white/[0.03] px-8 text-lg font-bold text-white">See How It Works <Play className="ml-4 h-5 w-5 fill-white" /></Button></div>
          </motion.div>

          <div className="relative h-[460px]">
            {[620,500,365,230].map((w) => <div key={w} className="absolute left-1/2 top-1/2 rounded-full border border-blue-500/20" style={{ width: w, height: w * 0.68, transform: "translate(-50%,-50%)" }} />)}
            <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-950 shadow-[0_30px_90px_rgba(37,99,235,.45)]"><div className="flex h-36 w-36 items-center justify-center rounded-full bg-blue-100"><div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-700"><div className="h-11 w-11 rounded-full bg-white" /></div></div><div className="absolute -right-8 -top-7 h-36 w-3 rotate-45 rounded-full bg-blue-300" /><div className="absolute -right-16 -top-16 h-10 w-10 rotate-45 bg-blue-400 [clip-path:polygon(0_0,100%_50%,0_100%,25%_50%)]" /></div>
            <div className="absolute left-[12%] top-[8%] flex w-64 -rotate-3 items-center gap-4 rounded-[20px] border border-blue-400/20 bg-[#0b1830]/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/25"><Users className="h-5 w-5 text-blue-200" /></div>
              <div><p className="text-lg font-bold text-white">Target</p><p className="text-base text-white/75">Ideal Accounts</p></div>
            </div>
            <div className="absolute right-[2%] top-[10%] flex w-64 rotate-[5deg] items-center gap-4 rounded-[20px] border border-blue-400/20 bg-[#0b1830]/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/25"><Send className="h-5 w-5 text-blue-200" /></div>
              <div><p className="text-lg font-bold text-white">Personalized</p><p className="text-base text-white/75">Outreach</p></div>
            </div>
            <div className="absolute bottom-[7%] left-[7%] flex w-64 -rotate-3 items-center gap-4 rounded-[20px] border border-blue-400/20 bg-[#0b1830]/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/25"><MessageSquare className="h-5 w-5 text-blue-200" /></div>
              <div><p className="text-lg font-bold text-white">Engage &</p><p className="text-base text-white/75">Qualify</p></div>
            </div>
            <div className="absolute bottom-[5%] right-0 flex w-64 rotate-[3deg] items-center gap-4 rounded-[20px] border border-blue-400/20 bg-[#0b1830]/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600/25"><Phone className="h-5 w-5 text-blue-200" /></div>
              <div><p className="text-lg font-bold text-white">Book Sales</p><p className="text-base text-white/75">Conversations</p></div>
            </div>
          </div>
        </section>

        <SectionTitle title="Proven Outbound Performance" headline="Results Built Through" accent="Scalable Outbound Systems" light={lightTheme} />
        <section className="mx-auto max-w-[1280px] px-8 pb-18"><div className={`grid overflow-hidden rounded-2xl md:grid-cols-4 ${card}`}>{stats.map((stat) => { const Icon = stat.icon; return <div key={stat.value} className="flex gap-5 border-white/10 p-7 md:border-r"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-blue-500/60 bg-blue-600/15"><Icon className="h-8 w-8 text-blue-400" /></div><div><p className="text-3xl font-black">{stat.value}</p><p className={`mt-3 text-lg leading-7 ${soft}`}>{stat.label}</p></div></div>; })}</div></section>

        <section className="border-y border-white/5 bg-[#081426]/80 px-8 py-16"><div className="mx-auto grid max-w-[1120px] gap-20 md:grid-cols-2"><ListBlock title="Why Outbound Fails" eyebrow="The Challenge" items={failures} icon={XCircle} /><ListBlock title="We Build Outbound That Works" eyebrow="Our Solution" items={wins} icon={CheckCircle2} /></div></section>

        <SectionTitle id="how" title="How It Works" headline="A Proven 5-Step" accent="Outbound System" light={lightTheme} sub="A complete outbound growth engine designed to consistently generate qualified sales conversations with your ideal buyers." />
        <section className="mx-auto max-w-[1280px] px-8 pb-20"><div className="grid gap-8 lg:grid-cols-5">{process.map((item, index) => { const Icon = item.icon; return <Card key={item.title} light={lightTheme}><div className="mb-6 flex items-center justify-between"><Icon className="h-10 w-10 text-blue-300" /><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-black text-white">{index + 1}</span></div><h3 className={lightTheme ? "text-2xl font-black text-slate-950" : "text-2xl font-black text-white"}>{item.title}</h3><p className={`mt-5 min-h-[110px] text-base leading-7 ${soft}`}>{item.text}</p><Bullets items={item.bullets} light={lightTheme} /></Card>; })}</div></section>

        <section id="case-studies" className="px-8 py-20"><div className="mx-auto max-w-[1280px]"><SectionTitle title="Case Study Highlights" headline="Real Outbound Wins," accent="Across Different Markets" light={lightTheme} compact /><div className="overflow-hidden"><motion.div className="flex gap-5" animate={{ x: [0, -1750] }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }}>{[...caseStudies, ...caseStudies].map(([cat, hi, problem, solution, outcome], index) => <div key={cat + index} className={`min-w-[460px] rounded-[32px] p-7 ${card}`}><div className="mb-6 flex items-center justify-between gap-5"><span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-300">{cat}</span><span className="text-right text-2xl font-black text-blue-400">{hi}</span></div><Mini label="Problem" text={problem} light={lightTheme} /><Mini label="Solution" text={solution} light={lightTheme} /><div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5"><Mini label="Outcome" text={outcome} light={lightTheme} bold /></div></div>)}</motion.div></div></div></section>

        <SectionTitle id="industries" title="Industries We Support" headline="Built For Modern" accent="B2B Companies" light={lightTheme} sub="We have delivered outbound campaigns across AI, technology, healthcare, energy, industrial, professional services, and traditional B2B sectors." />
        <section className="mx-auto max-w-[1280px] px-8 pb-18"><div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">{industries.map((industry) => { const Icon = industry.icon; return <Card key={industry.title} light={lightTheme}><Icon className="mb-6 h-10 w-10 text-blue-300" /><h3 className={lightTheme ? "text-3xl font-black text-slate-950" : "text-3xl font-black text-white"}>{industry.title}</h3><Bullets items={industry.items} light={lightTheme} /></Card>; })}</div></section>

        <SectionTitle id="pricing" title="Pricing" headline="Outbound Infrastructure" accent="Built To Scale Pipeline" sub="Tailored Flexible Engagement Options designed for B2B companies looking to build a predictable flow of qualified sales conversations." light={lightTheme} />
        <section className="mx-auto max-w-[1120px] px-8 pb-18"><div className={`overflow-hidden rounded-[32px] ${card}`}><div className="border-b border-blue-400/15 bg-gradient-to-r from-blue-600/40 via-blue-500/25 to-cyan-500/20 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.28em] text-blue-100">Done-For-You Outbound</div><div className="grid gap-7 p-7 md:p-9 lg:grid-cols-[.9fr_1.1fr]"><div><h2 className={lightTheme ? "text-4xl font-black leading-tight text-slate-950" : "text-4xl font-black leading-tight text-white"}>Build a Predictable <span className="block text-blue-300">Outbound Pipeline</span></h2><p className={`mt-5 text-xl leading-8 ${soft}`}>End-to-end outbound execution without building an internal team from scratch.</p><div className="mt-6 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6"><p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Starting At</p><div className="mt-2"><span className="text-4xl font-black text-blue-300">$3,000</span><span className="text-2xl font-black text-blue-200">/month</span></div><p className={`mt-4 text-sm ${soft}`}>* Price varies depending on scale and complexity.</p></div><div className="mt-6 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6"><p className="text-xs font-black uppercase tracking-widest text-blue-300">30-Day Pilot Available</p><h3 className={lightTheme ? "mt-2 text-3xl font-black text-slate-950" : "mt-2 text-3xl font-black text-white"}>No Long-Term Lock-In</h3><p className={`mt-3 ${soft}`}>Validate messaging, targeting, and market response before scaling further.</p></div></div><div><p className="mb-5 text-sm font-black uppercase tracking-widest text-blue-400">What’s Included</p><div className="grid gap-4 sm:grid-cols-2">{["ICP research & account mapping","Decision-maker identification","Secondary domain infrastructure","Inbox warmup & deliverability","SPF / DKIM / DMARC","Cold email copywriting","Multi-touch sequencing","LinkedIn outreach","Reply handling","Qualified meeting booking","Campaign reporting","Weekly optimization"].map((item) => <div key={item} className={lightTheme ? "flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4" : "flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"}><CheckCircle2 className="h-5 w-5 shrink-0 text-blue-300" /><span className={lightTheme ? "text-slate-700" : "text-white/82"}>{item}</span></div>)}</div><Button className="mt-6 h-16 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-lg font-black text-white">Book Intro Call</Button></div></div></div></section>

        <SectionTitle id="faq" title="Frequently Asked Questions" headline="Everything You Need" accent="To Know About Working With Us" light={lightTheme} sub="Common questions around outbound execution, deliverability, engagement structure, and expected outcomes." />
        <section className="mx-auto max-w-[1100px] px-8 pb-20"><div className="space-y-5">{faqs.map(([question, answer], index) => <div key={question} className={`overflow-hidden rounded-3xl ${card}`}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between px-8 py-5 text-left"><span className={lightTheme ? "text-2xl font-bold text-slate-950" : "text-2xl font-bold text-white"}>{question}</span><ChevronDown className={`h-6 w-6 text-blue-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <div className={lightTheme ? "border-t border-slate-200 px-8 pb-8 pt-6" : "border-t border-white/10 px-8 pb-8 pt-6"}><p className={`text-lg leading-8 ${soft}`}>{answer}</p></div>}</div>)}</div></section>

        <section className="px-8 pb-20">
          <div className="mx-auto max-w-[1220px] overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(4,10,24,.98),rgba(2,6,18,1))] shadow-[0_25px_80px_rgba(0,0,0,.5)]">
            <div className="grid items-center gap-10 px-8 py-12 lg:grid-cols-[1.1fr_.8fr] lg:px-12">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-blue-400">Ready To Scale?</p>
                <h2 className="max-w-3xl text-[42px] font-black leading-[1.04] tracking-[-0.055em] text-white md:text-[58px]">
                  Build A Predictable Flow Of Qualified Sales Conversations
                </h2>
                <p className="mt-6 max-w-2xl text-[18px] leading-[34px] text-white/68">
                  If you're looking to build a more predictable flow of qualified sales conversations, let’s discuss your market, messaging, and how we can build a scalable outbound acquisition engine for your team.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Button className="h-20 w-full max-w-[420px] rounded-[22px] bg-gradient-to-r from-blue-500 to-blue-700 px-8 text-xl font-black text-white shadow-[0_20px_60px_rgba(37,99,235,.4)] hover:opacity-95">
                  Book A Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ id, title, headline, accent, sub, light, compact = false }) {
  return <section id={id} className={compact ? "pb-12" : "px-8 py-16"}><div className="mx-auto max-w-[1120px] text-center"><p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-blue-400">{title}</p><h2 className={`${light ? "text-slate-950" : "text-white"} text-4xl font-black leading-tight tracking-[-0.05em]`}>{headline}<span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{accent}</span></h2>{sub && <p className={`${light ? "text-slate-600" : "text-white/65"} mx-auto mt-7 max-w-4xl text-lg leading-8`}>{sub}</p>}</div></section>;
}

function ListBlock({ title, eyebrow, items, icon: Icon }) {
  return (
    <div>
      <p className="mb-4 text-sm font-black uppercase tracking-wide text-blue-400">{eyebrow}</p>
      <h2 className="mb-7 text-3xl font-black text-white">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-4 text-lg text-white/80">
            <Icon className="h-6 w-6 shrink-0 text-blue-400" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ children, light }) {
  return <div className={`${light ? "border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)]" : "border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,.96),rgba(5,10,22,.98))] shadow-[0_25px_70px_rgba(0,0,0,.45)]"} rounded-[28px] p-6`}>{children}</div>;
}

function Bullets({ items, light }) {
  return <div className={light ? "mt-6 space-y-4 border-t border-slate-200 pt-7" : "mt-6 space-y-4 border-t border-white/10 pt-7"}>{items.map((item) => <div key={item} className={light ? "flex items-center gap-3 text-base text-slate-700" : "flex items-center gap-3 text-base text-white/80"}><span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.9)]" />{item}</div>)}</div>;
}

function Mini({ label, text, light, bold }) {
  return <div className="mt-5"><p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-blue-400">{label}</p><p className={`${bold ? "text-xl font-bold" : "text-lg"} ${light ? "text-slate-700" : "text-white/72"} leading-8`}>{text}</p></div>;
}


function Button({ children, className = "", ...props }: any) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
