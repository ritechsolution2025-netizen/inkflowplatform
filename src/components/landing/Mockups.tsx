import {
  CalendarDays, Users, UserCog, Scissors, ClipboardSignature, Receipt, Wallet, BarChart3, Settings, LayoutGrid,
} from "lucide-react";

const nav = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: CalendarDays, label: "Appointments" },
  { icon: Users, label: "Clients" },
  { icon: UserCog, label: "Team" },
  { icon: Scissors, label: "Services" },
  { icon: ClipboardSignature, label: "Forms" },
  { icon: Receipt, label: "Invoices" },
  { icon: Wallet, label: "Expenses" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const appts = [
  { time: "10:00", client: "Sample Client A", service: "Fine-line consult", artist: "Artist 1", status: "Confirmed" },
  { time: "12:30", client: "Sample Client B", service: "Blackwork session", artist: "Artist 2", status: "Checked in" },
  { time: "15:00", client: "Sample Client C", service: "Lobe piercing", artist: "Artist 3", status: "Pending" },
  { time: "17:15", client: "Sample Client D", service: "Touch-up", artist: "Artist 1", status: "Confirmed" },
];

function Status({ s }: { s: string }) {
  const cls =
    s === "Checked in" ? "bg-accent text-accent-foreground" : s === "Pending" ? "bg-secondary text-muted-foreground" : "bg-ink text-ink-foreground";
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${cls}`}>{s}</span>;
}

export function DesktopMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-lift" role="img" aria-label="Illustrative product preview of the studio dashboard with fictional sample appointments">
      <div className="flex items-center gap-1.5 border-b bg-secondary px-4 py-2.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-stone" /><span className="size-2.5 rounded-full bg-stone" /><span className="size-2.5 rounded-full bg-stone" />
        <span className="ml-3 text-[11px] text-muted-foreground">InkFlow For Tattoo Studios</span>
      </div>
      <div className="grid grid-cols-[150px_1fr] text-left" aria-hidden>
        <aside className="space-y-0.5 border-r bg-ink p-3 text-ink-foreground">
          <p className="mb-3 px-2 font-display text-sm font-bold">InkFlow</p>
          {nav.map((n, i) => (
            <div key={n.label} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${i === 1 ? "bg-primary text-primary-foreground" : "opacity-75"}`}>
              <n.icon className="size-3.5" /> {n.label}
            </div>
          ))}
        </aside>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-muted-foreground">Today</p>
              <p className="font-display text-lg font-bold">Appointments</p>
            </div>
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">+ New appointment</span>
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[50px_1.2fr_1.3fr_0.8fr_0.9fr] bg-muted px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              <span>Time</span><span>Client</span><span>Service</span><span>Artist</span><span>Status</span>
            </div>
            {appts.map((a) => (
              <div key={a.time} className="grid grid-cols-[50px_1.2fr_1.3fr_0.8fr_0.9fr] items-center border-t px-3 py-2.5 text-[11px]">
                <span className="font-semibold">{a.time}</span><span>{a.client}</span><span className="text-muted-foreground">{a.service}</span><span>{a.artist}</span><Status s={a.status} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[["Intake form", "Awaiting signature"], ["Invoice queue", "Ready for checkout"], ["Expenses", "Recorded this week"]].map(([t, d]) => (
              <div key={t} className="rounded-lg border bg-background p-3">
                <p className="text-[11px] font-semibold">{t}</p>
                <p className="text-[10px] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[200px] overflow-hidden rounded-[1.75rem] border-[6px] border-ink bg-card shadow-lift ${className}`} role="img" aria-label="Illustrative mobile preview of the client intake list">
      <div aria-hidden className="p-3 text-left">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-stone" />
        <p className="font-display text-sm font-bold">Clients</p>
        <div className="mt-2 rounded-md border bg-muted px-2 py-1.5 text-[10px] text-muted-foreground">Search clients…</div>
        {["Sample Client A", "Sample Client B", "Sample Client C", "Sample Client E"].map((c, i) => (
          <div key={c} className="mt-2 flex items-center gap-2 rounded-lg border p-2">
            <span className="grid size-6 place-items-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">{c.at(-1)}</span>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold">{c}</p>
              <p className="text-[9px] text-muted-foreground">{i % 2 ? "Intake on file" : "Upcoming visit"}</p>
            </div>
          </div>
        ))}
        <div className="mt-3 rounded-full bg-primary py-1.5 text-center text-[10px] font-semibold text-primary-foreground">Start intake</div>
      </div>
    </div>
  );
}
