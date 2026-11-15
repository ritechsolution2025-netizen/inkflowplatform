import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CalendarDays, Users, UserCog, Scissors, ClipboardSignature, Receipt, BarChart3, Store, DownloadCloud,
  Menu, X, ArrowRight, Check, ShieldCheck, Mail, Layers,
} from "lucide-react";
import { site } from "@/config/site";
import { DesktopMockup, MobileMockup } from "@/components/landing/Mockups";

const TITLE = "InkFlow | Tattoo Studio Management";
const DESC =
  "Manage appointments, clients, team, services, intake forms, consent forms, invoices, expenses, and reports for your tattoo or piercing studio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#studio", label: "For Your Studio" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
      <img src="/favicon.svg" alt="" className="size-7" width={28} height={28} />
      INK FLOW
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}><a className="transition-colors hover:text-foreground" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://inkflow-lu9s.vercel.app/" className="text-sm font-semibold hover:text-primary">Sign In</a>
          <a href="https://inkflow-lu9s.vercel.app/" className="btn-primary !py-2.5 text-sm">Create Your Studio Account</a>
        </div>
        <button
          className="grid size-10 place-items-center rounded-full border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t bg-background px-5 pb-6 pt-3 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block rounded-lg px-3 py-3 font-semibold hover:bg-secondary">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2">
            <a href="https://inkflow-lu9s.vercel.app/" className="btn-primary">Create Your Studio Account</a>
            <a href="https://inkflow-lu9s.vercel.app/" className="btn-ghost">Sign In</a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="ink-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <Eyebrow>INK FLOW BY RITECH</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-6xl">
            Spend less time managing the Studio. <span className="text-primary">more time making great work.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            InkFlow Platform Brings Appointments, Client Records, Team Details, Services, Consent Form, Invoices, Expenses, And Reports Into One Organized Workspace For Your Studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://inkflow-lu9s.vercel.app/" className="btn-primary">Create Your Studio Account <ArrowRight className="size-4" /></a>
            <a href="#features" className="btn-ghost">Explore the platform</a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Built for tattoo and piercing studio workflows.</p>
        </div>
        <figure className="relative mt-14">
          <div className="overflow-x-auto pb-2"><div className="min-w-[720px] md:pr-40"><DesktopMockup /></div></div>
          <MobileMockup className="absolute -bottom-8 right-0 hidden md:block" />
          <figcaption className="mt-4 text-xs text-muted-foreground">Preview — Manage Your Tattoo Studio Faster With INK FLOW.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function ValueStrip() {
  const items = ["Studio-scoped records", "Appointments and client workflows", "Team and service management", "Studio backup export"];
  return (
    <section aria-label="Highlights" className="border-y bg-ink text-ink-foreground">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-6 text-sm font-semibold md:grid-cols-4">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2"><Check className="size-4 shrink-0 text-primary" /> {i}</li>
        ))}
      </ul>
    </section>
  );
}

function Problem() {
  const pains = [
    "Appointment details spread across tools",
    "Client information difficult to find",
    "Team and service updates repeated manually",
    "Checkout and expense records hard to review",
    "Intake paperwork difficult to locate",
  ];
  return (
    <section id="studio" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>For your studio</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Your studio has a lot moving at once. Keep the essentials in one place.</h2>
          <p className="mt-5 text-muted-foreground">
            Between bookings, walk-ins, intake forms, and end-of-day checkout, details tend to scatter. InkFlow Studio gives your team a central workspace for the everyday tasks — so the information you need is easier to find when you need it.
          </p>
        </div>
        <ul className="space-y-3">
          {pains.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-soft">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><X className="size-3.5" /></span>
              <span className="font-medium">{p}</span>
            </li>
          ))}
          <li className="flex items-start gap-3 rounded-xl bg-ink p-4 text-ink-foreground">
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" /></span>
            <span className="font-semibold">One organized workspace for your studio's day-to-day work.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

const features = [
  { icon: CalendarDays, t: "Appointments", d: "Create and manage bookings, assign artists, and track appointment status." },
  { icon: Users, t: "Client records", d: "Keep contact details and visit-related information available to the studio." },
  { icon: UserCog, t: "Team management", d: "Maintain artist and staff profiles, roles, specialties, availability, and booking settings." },
  { icon: Scissors, t: "Services and offerings", d: "Manage studio services, categories, prices, tax settings, and active status." },
  { icon: ClipboardSignature, t: "Client intake an Consent", d: "Collect intake details, health disclosures, consent forms, signature, and staff verification in a structured record." },
  { icon: Receipt, t: "Invoices and Checkout records", d: "Organize queue and transaction workflows, including recorded payment method and amounts. Records only — the app does not process payments." },
  { icon: BarChart3, t: "Expenses and Reports", d: "Record studio expenses and review reports based on available transaction and expense data." },
  { icon: Store, t: "Studio profile and Preferences", d: "Save studio details, logo, currency preferences, tax settings, and accepted payment methods." },
  { icon: DownloadCloud, t: "Backup", d: "Download a JSON backup containing records for the selected studio." },
];

function Features() {
  return (
    <section id="features" className="border-t bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Features</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">Everything the front desk and the floor need, in one workspace.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.t} className="bg-card p-7 transition-colors hover:bg-background">
              <f.icon className="size-6 text-primary" strokeWidth={1.6} aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { t: "Create your studio account.", icon: Store },
    { t: "Set up your studio profile, team, services, and preferences.", icon: UserCog },
    { t: "Manage appointments, clients, intake, invoices, expenses, and reports in your studio workspace.", icon: Layers },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <Eyebrow>How it works</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Up and running in three steps.</h2>
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-2xl border bg-card p-7 shadow-soft">
            <span className="font-display text-5xl font-extrabold text-stone">0{i + 1}</span>
            <s.icon className="absolute right-7 top-8 size-6 text-primary" strokeWidth={1.6} aria-hidden />
            <p className="mt-4 text-lg font-semibold leading-snug">{s.t}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Preview() {
  const callouts = ["Studio navigation", "Appointment and client workflows", "Team and services", "Expenses and reports", "Settings and studio profile"];
  return (
    <section aria-labelledby="preview-h" className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Product preview</p>
          <h2 id="preview-h" className="mt-3 text-3xl font-extrabold md:text-4xl">A calm workspace for a busy studio.</h2>
          <ul className="mt-8 space-y-3">
            {callouts.map((c) => (
              <li key={c} className="flex items-center gap-3 border-b border-ink-foreground/15 pb-3 font-medium">
                <ArrowRight className="size-4 text-primary" aria-hidden /> {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs opacity-70">Manage Your Tatto Studio with INK FLOW and Grow Faster</p>
        </div>
        <div className="flex items-end gap-6">
          <div className="min-w-0 flex-1 overflow-x-auto"><div className="min-w-[640px]"><DesktopMockup /></div></div>
          <MobileMockup className="hidden shrink-0 xl:block" />
        </div>
      </div>
      <div className="mt-10 flex justify-center xl:hidden"><MobileMockup /></div>
    </section>
  );
}

function DataSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-10 rounded-3xl border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-12">
        <div className="grid size-16 place-items-center rounded-2xl bg-accent text-accent-foreground"><ShieldCheck className="size-8" strokeWidth={1.6} aria-hidden /></div>
        <div>
          <h2 className="text-2xl font-extrabold md:text-3xl">Your studio's workspace, organized around your studio.</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Studio records are organized using the studio owner and studio identifiers. The backup feature exports the selected studio's available records as a JSON file.
          </p>
        </div>
      </div>
    </section>
  );
}

// function Plans() {
//    const plans = ["Silver", "Gold", "Diamond"];
//    return (
//      <section id="plans" className="border-t bg-card py-24">
//        <div className="mx-auto max-w-6xl px-5">
//          <Eyebrow>Plans</Eyebrow>
//          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Choose the Plan that fits your Studio.</h2>
//          <p className="mt-4 max-w-xl text-muted-foreground">Current plan details, pricing, an billing options are shown when you choose a plan.</p>
//          <div className="mt-12 grid gap-5 md:grid-cols-3">
//            {plans.map((p) => (
//              <article key={p} className="flex flex-col rounded-2xl border bg-background p-7 transition-shadow hover:shadow-soft">
//                <h3 className="text-2xl font-extrabold">{p}</h3>
//                <p className="mt-2 flex-1 text-sm text-muted-foreground">See what's included and current pricing for the {p} plan.</p>
//                <a href="https://inkflow-lu9s.vercel.app/" className="btn-ghost mt-8">View plans</a>
//              </article>
//            ))}
//          </div>
//        </div>
//      </section>
//   );
//  }
//new updated plans following code start 


function Plans() {
  const plans = [
    {
      id: "silver",
      name: "Silver",
      price: "₹599",
      annual: "₹5,999",
      artists: "1 Artist",
      audience: "Perfect for independent artists",
      description:
        "Start managing your tattoo business professionally with all the essential studio management tools.",
      popular: false,
      features: [
        "1 Artist Account",
        "1 Studio Workspace",
        "Appointment Management",
        "Client Management & Records",
        "Artist Profile Management",
        "Services & Price Management",
        "Digital Intake & Consent Forms",
        "Client Signature Records",
        "Invoices & Checkout Records",
        "Expense Management",
        "Basic Reports",
        "Studio Profile & Settings",
        "JSON Data Backup",
      ],
    },
    {
      id: "gold",
      name: "Gold",
      price: "₹999",
      annual: "₹9,999",
      artists: "Up to 5 Artists",
      audience: "Best for growing tattoo studios",
      description:
        "Manage your artists, customers, appointments and studio operations together in one organized workspace.",
      popular: true,
      features: [
        "Up to 5 Artist Accounts",
        "1 Studio Workspace",
        "Appointment Management",
        "Client Management & Records",
        "Artist & Team Management",
        "Services & Price Management",
        "Digital Intake & Consent Forms",
        "Client Signature Records",
        "Invoices & Checkout Records",
        "Expense Management",
        "Studio Reports & Analytics",
        "Studio Profile & Settings",
        "JSON Data Backup",
        "Staff Attendance",
        "Investment (Pigmi)",
        "Scan Adhar"
      ],
    },
    {
      id: "diamond",
      name: "Diamond",
      price: "₹1,499",
      annual: "₹14,999",
      artists: "Up to 10 Artists",
      audience: "For established tattoo studios",
      description:
        "Bring your larger tattoo team and daily business operations into one centralized studio management platform.",
      popular: false,
      features: [
        "Up to 10 Artist Accounts",
        "1 Studio Workspace",
        "Appointment Management",
        "Client Management & Records",
        "Advanced Team Management",
        "Services & Price Management",
        "Digital Intake & Consent Forms",
        "Client Signature Records",
        "Invoices & Checkout Records",
        "Expense Management",
        "Studio Reports & Analytics",
        "Studio Profile & Settings",
        "JSON Data Backup",
        "Staff Attendance",
        "Investment (Pigmi)",
        "Scan Adhar",
        "AI impliment",
        "Studio Website FREE"
      ],
    },
  ];

  return (
    <section id="plans" className="border-t bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">

        {/* Pricing Heading */}
        <div className="text-center">
          <Eyebrow>INK FLOW PRICING</Eyebrow>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Choose the Perfect Plan for Your Studio.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you are an independent tattoo artist or managing
            a growing tattoo studio, InkFlow has a plan to match your
            business needs. Manage your studio smarter, save time and
            focus more on your artwork.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border bg-background px-4 py-2 font-medium">
              Flexible Monthly Plans
            </span>
            <span className="rounded-full border bg-background px-4 py-2 font-medium">
              Save with Annual Billing
            </span>
            <span className="rounded-full border bg-background px-4 py-2 font-medium">
              Built for Tattoo Studios
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">

          {plans.map((p) => (
            <article
              key={p.id}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-soft ${
                p.popular
                  ? "border-primary bg-background shadow-soft"
                  : "bg-background"
              }`}
            >

              {/* Popular Badge */}
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-1.5 text-xs font-bold text-primary-foreground">
                  MOST POPULAR
                </span>
              )}

              {/* Plan Details */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {p.audience}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold">
                  {p.name}
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>

              {/* Pricing Details */}
              <div className="mt-7 border-b pb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Monthly Subscription
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {p.price}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    / month
                  </span>
                </div>

                <div className="mt-5 rounded-xl bg-secondary p-4">
                  <p className="text-xs font-semibold text-muted-foreground">
                    ANNUAL SUBSCRIPTION
                  </p>

                  <p className="mt-1 text-xl font-extrabold">
                    {p.annual}
                    <span className="ml-1 text-xs font-normal text-muted-foreground">
                      / year
                    </span>
                  </p>

                  <p className="mt-1 text-xs font-semibold text-primary">
                    Save approximately 2 months with annual billing
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-lg border px-4 py-3">
                  <Users className="size-5 text-primary" />

                  <div>
                    <p className="text-sm font-bold">{p.artists}</p>
                    <p className="text-xs text-muted-foreground">
                      Included artist capacity
                    </p>
                  </div>
                </div>
              </div>

              {/* Included Features */}
              <div className="flex-1 pt-6">
                <h4 className="mb-5 text-sm font-bold">
                  Everything included:
                </h4>

                <ul className="space-y-3">
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Choose Plan Button */}
              <a
                href="https://inkflow-lu9s.vercel.app/"
                className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                  p.popular
                    ? "btn-primary"
                    : "btn-ghost"
                }`}
              >
                Get Started with {p.name}
                <ArrowRight className="size-4" />
              </a>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure your studio workspace with InkFlow.
              </p>
            </article>
          ))}

        </div>

        {/* Customer Information */}
        {/* <div className="mt-12 rounded-2xl border bg-background p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <h3 className="font-bold">
                <ShieldCheck className="mr-2 inline size-5 text-primary" />
                Your Studio Data
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Organize your studio records using your studio workspace
                and access the available JSON backup feature.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                <Users className="mr-2 inline size-5 text-primary" />
                Grow Your Team
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Choose an artist capacity that matches your studio.
                Upgrade your subscription as your team grows.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                <Receipt className="mr-2 inline size-5 text-primary" />
                Transparent Billing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Choose monthly or annual pricing. Applicable taxes
                and final billing terms will be confirmed during checkout.
              </p>
            </div>

          </div>
        </div> */}

        {/* Pricing Note */}
        {/* <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
          All prices are in INR. Each plan includes one studio workspace.
          Artist limits apply according to the selected subscription.
          Payment processing is not included in the studio transaction
          recording features. Confirm applicable taxes and subscription
          terms before purchase.
        </p>  */}

      </div>
    </section>
  );
}

 
function Faq() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    { q: "What can I manage with InkFlow Studio?", a: "Appointments, client records, team members, services, intake forms and waivers, invoices and checkout records, expenses, reports, and your studio profile and preferences." },
    { q: "Can I manage more than one studio?", a: <>For questions about multiple studios on one account, please <a className="font-semibold text-primary underline underline-offset-4" href={site.supportHref}>contact support</a>.</> },
    { q: "Does the platform process card or online payments?", a: "The app records payment methods and transaction details for studio workflows. Payment processing is not included unless a payment integration is separately confirmed." },
    { q: "Can I export my studio data?", a: "The backup feature downloads a JSON file containing the selected studio's available records." },
    { q: "How do I get started?", a: <><a className="font-semibold text-primary underline underline-offset-4" href="https://inkflow-lu9s.vercel.app/">Create your studio account</a>, then set up your studio profile, team, and services.</> },
    { q: "How do I contact support?", a: <>Email us any time: <a className="font-semibold text-primary underline underline-offset-4" href={site.supportHref}>Contact Support</a>.</> },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Questions, answered.</h2>
      <div className="mt-10 divide-y rounded-2xl border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              {f.q}
              <span className="grid size-7 shrink-0 place-items-center rounded-full border text-lg transition-transform group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="ink-lines relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-5xl">Ready to bring your studio workflow together?</h2>
        <p className="mx-auto mt-5 max-w-xl opacity-80">Set up your studio workspace and keep the day-to-day details easier to manage.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://inkflow-lu9s.vercel.app/" className="btn-primary">Create Your Studio Account</a>
          <a href="https://inkflow-lu9s.vercel.app/" className="btn-invert">Sign In</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#plans", label: "Plans" },
    { href: "https://inkflow-lu9s.vercel.app/", label: "Sign In" },
    { href: "https://inkflow-lu9s.vercel.app/", label: "Create Account" },
    { href: site.supportHref, label: "Contact Support" },
    { href: site.privacyUrl, label: "Privacy Policy" },
    { href: site.termsUrl, label: "Terms" },
  ].filter((l) => l.href);
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <Wordmark />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <li key={l.label}><a href={l.href} className="inline-flex items-center gap-1 hover:text-foreground">{l.label === "Contact Support" && <Mail className="size-3.5" aria-hidden />}{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} InkFlow Studio. All rights reserved.</p>
    </footer>
  );
}

function Landing() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-card focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <ValueStrip />
        <Problem />
        <Features />
        <How />
        <Preview />
        <DataSection />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
