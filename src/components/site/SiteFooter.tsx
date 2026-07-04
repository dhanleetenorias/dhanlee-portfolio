import { SITE } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          Contact
        </p>
        <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
          Let&rsquo;s build something.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-[10px] bg-accent px-5 py-2.5 text-[14.5px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="rounded-[10px] border border-line bg-surface px-5 py-2.5 text-[14.5px] font-medium text-soft transition-colors hover:border-accent/40 hover:text-accent-t"
          >
            {SITE.phone}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[13px] text-muted">
            {SITE.location}
            {SITE.github && (
              <>
                {" · "}
                <a
                  href={SITE.github}
                  className="underline-offset-4 hover:text-ink hover:underline"
                >
                  GitHub
                </a>
              </>
            )}
            {SITE.linkedin && (
              <>
                {" · "}
                <a
                  href={SITE.linkedin}
                  className="underline-offset-4 hover:text-ink hover:underline"
                >
                  LinkedIn
                </a>
              </>
            )}
          </p>
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} {SITE.name} · Built with Next.js,
            deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
