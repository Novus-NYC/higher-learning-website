import Link from "next/link";

type Program = "sat" | "saturday" | "weekday";

const saturdayDates = ["Jan 23", "Jan 30", "Feb 13", "Feb 27", "Mar 6", "Mar 13", "Mar 20", "Apr 3", "Apr 10", "Apr 17", "May 1", "May 8", "May 15", "May 22"];

const saturdayClasses = [
  ["English Language Arts & Math", "英文和數學", "Grade 2", "10:00 am-12:30 pm"],
  ["NY State Test Preparation", "三年級州考試準備班", "Grade 3", "10:00 am-12:30 pm"],
  ["NY State Test Preparation", "三年級州考試準備班", "Grade 3", "1:30-4:00 pm"],
  ["NY State Test Preparation", "四年級州考試準備班", "Grade 4", "10:00 am-12:30 pm"],
  ["NY State Test Preparation", "四年級州考試準備班", "Grade 4", "1:30-4:00 pm"],
  ["English Writing & Grammar", "五年級英文寫作和文法", "Grade 5", "9:30-11:30 am"],
  ["NY State Test Prep - English Writing & Math", "五年級英文寫作和數學", "Grade 5", "9:30 am-12:30 pm"],
  ["NY State Test Preparation", "六年級州考試準備班", "Grade 6", "1:30-4:00 pm"],
  ["NY State Test Prep & SHSAT - ELA & Math", "七年級州考試準備班及特殊高中準備班", "Grade 7", "1:30-4:00 pm"],
] as const;

const weekdayClasses = [
  {
    grade: "Grade 5",
    subject: "NY State Test Preparation - ELA & Math",
    subjectZh: "五年級州考試加強班 - 英文和數學",
    day: "Thursday",
    time: "4:00-6:00 pm",
    dates: "Jan 28; Feb 4, 11, 25; Mar 4, 11, 18, 25; Apr 1, 8, 15; May 3 (Monday), 6, 13, 20",
  },
  {
    grade: "Grade 6",
    subject: "NY State Test Preparation - ELA & Math",
    subjectZh: "六年級州考試加強班 - 英文和數學",
    day: "Wednesday",
    time: "4:00-6:00 pm",
    dates: "Jan 27; Feb 3, 10, 24; Mar 3, 10, 17, 24, 31; Apr 7, 14, 21; May 5, 12, 19",
  },
  {
    grade: "Grade 7",
    subject: "NY State Test Preparation & SHSAT - ELA & Math",
    subjectZh: "七年級州考試加強班及特殊高中準備班 - 英文和數學",
    day: "Thursday",
    time: "4:00-6:00 pm",
    dates: "Jan 28; Feb 4, 11, 25; Mar 4, 11, 18, 25; Apr 1, 8, 15; May 3 (Monday), 6, 13, 20",
  },
] as const;

const programCopy = {
  sat: {
    title: "Spring 2027 SAT Prep",
    titleZh: "2027 年春季 SAT 大學考試準備班",
    eyebrow: "Grades 9-12",
    description: "A 14-session Saturday program in ELA and Math, beginning January 23, 2027.",
  },
  saturday: {
    title: "Spring 2027 Saturday Schedule",
    titleZh: "2027 年春季星期六課程時間表",
    eyebrow: "Grades 2-7",
    description: "Saturday ELA, Math, NY State Test, and SHSAT preparation classes from January 23 through May 22, 2027.",
  },
  weekday: {
    title: "Spring 2027 Weekday Schedule",
    titleZh: "2027 年春季平日課程時間表",
    eyebrow: "Grades 5-7",
    description: "After-school NY State Test and SHSAT preparation classes running January through May 2027.",
  },
} as const;

function ProgramNavigation({ current }: { current: Program }) {
  const links: { key: Program; label: string; href: string }[] = [
    { key: "sat", label: "SAT Prep", href: "/pages/class-schedules/spring-2027-sat" },
    { key: "saturday", label: "Saturday", href: "/pages/class-schedules/spring-2027-saturday" },
    { key: "weekday", label: "Weekday", href: "/pages/class-schedules/spring-2027-weekday" },
  ];

  return (
    <nav aria-label="Spring 2027 schedules" className="mt-8 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          aria-current={current === link.key ? "page" : undefined}
          className={`rounded-[8px] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] ${current === link.key ? "bg-[#e8b84b] text-[#02014a]" : "border border-white/45 text-white hover:bg-white/10"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Spring2027ProgramPage({ program }: { program: Program }) {
  const copy = programCopy[program];

  return (
    <main className="bg-[#f6fbff] pb-16 text-[#02014a]">
      <section className="bg-[#02014a] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e8b84b]">Higher Learning Tutoring Center</p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-white/80">{copy.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-normal sm:text-5xl">{copy.title}</h1>
          <p className="zh mt-3 text-base text-white/85">{copy.titleZh}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{copy.description}</p>
          <ProgramNavigation current={program} />
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="inline-flex items-center justify-center rounded-[8px] bg-[#e8b84b] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#02014a]" href="/downloads/higher-learning-spring-2027-schedule.pdf" target="_blank" rel="noreferrer">Download Full PDF</a>
            <Link className="inline-flex items-center justify-center rounded-[8px] border border-white/45 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white hover:bg-white/10" href="/pages/contact">Ask About Enrollment</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:px-12">
        <aside className="border-l-4 border-[#e8b84b] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(2,1,74,0.08)]">
          <p className="text-base font-semibold">Sibling Discount: Families with more than one enrolled student receive a 5% discount.</p>
          <p className="mt-1 text-sm text-[#02014a]/75">Register by December 22, 2026 to receive $60 off the regular rate.</p>
        </aside>

        {program === "saturday" && (
          <section className="mt-12" aria-labelledby="saturday-program-heading">
            <h2 id="saturday-program-heading" className="font-serif text-3xl font-bold tracking-normal">Saturday Classes</h2>
            <p className="mt-4 text-base leading-7 text-[#02014a]/80">All classes meet for 14 sessions from January 23 through May 22, 2027.</p>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Saturday class dates">{saturdayDates.map((date) => <span key={date} className="rounded-[6px] border border-[#02014a]/15 bg-white px-3 py-2 text-sm font-semibold">{date}</span>)}</div>
            <div className="mt-7 overflow-x-auto border border-[#02014a]/12 bg-white shadow-[0_8px_24px_rgba(2,1,74,0.06)]">
              <table className="w-full min-w-[700px] border-collapse text-left"><caption className="sr-only">Spring 2027 Saturday class schedule</caption><thead className="bg-[#02014a] text-white"><tr><th className="px-5 py-4">Class</th><th className="px-5 py-4">Grade</th><th className="px-5 py-4">Time</th></tr></thead><tbody>{saturdayClasses.map(([subject, subjectZh, grade, time]) => <tr key={`${subject}-${grade}-${time}`} className="border-t border-[#02014a]/10"><td className="px-5 py-4 font-semibold">{subject}<span className="zh mt-1 block text-sm font-normal text-[#02014a]/70">{subjectZh}</span></td><td className="px-5 py-4">{grade}</td><td className="px-5 py-4">{time}</td></tr>)}</tbody></table>
            </div>
          </section>
        )}

        {program === "weekday" && (
          <section className="mt-12" aria-labelledby="weekday-program-heading">
            <h2 id="weekday-program-heading" className="font-serif text-3xl font-bold tracking-normal">Weekday Classes</h2>
            <p className="mt-4 text-base leading-7 text-[#02014a]/80">NY State ELA testing runs April 6-16. NY State Math testing runs May 4-14.</p>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">{weekdayClasses.map((item) => <article key={item.grade} className="border border-[#02014a]/12 bg-white p-6 shadow-[0_8px_24px_rgba(2,1,74,0.06)]"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#c8922a]">{item.grade}</p><h3 className="mt-3 font-serif text-2xl font-bold tracking-normal">{item.subject}</h3><p className="zh mt-2 text-sm leading-6 text-[#02014a]/75">{item.subjectZh}</p><dl className="mt-5 space-y-3 text-sm leading-6"><div><dt className="font-bold">Day and time</dt><dd>{item.day}, {item.time}</dd></div><div><dt className="font-bold">15 sessions</dt><dd>{item.dates}</dd></div></dl></article>)}</div>
            <p className="mt-5 text-sm leading-6 text-[#02014a]/75">May 3 is a Monday class scheduled for Math test review.</p>
          </section>
        )}

        {program === "sat" && (
          <section className="mt-12 border border-[#02014a]/12 bg-white p-7 shadow-[0_8px_24px_rgba(2,1,74,0.06)] sm:p-9" aria-labelledby="sat-program-heading">
            <h2 id="sat-program-heading" className="font-serif text-3xl font-bold tracking-normal">SAT Prep Test Program</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3"><div><p className="font-bold">Begins</p><p className="mt-1 text-[#02014a]/80">Saturday, January 23, 2027</p></div><div><p className="font-bold">Subject</p><p className="mt-1 text-[#02014a]/80">ELA and Math</p></div><div><p className="font-bold">Time</p><p className="mt-1 text-[#02014a]/80">1:00-4:00 pm</p></div></div>
            <p className="mt-6 text-base leading-7 text-[#02014a]/80">14 Saturday sessions: {saturdayDates.join(", ")}.</p>
          </section>
        )}
      </div>
    </main>
  );
}
