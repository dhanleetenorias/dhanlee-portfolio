import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { SITE } from "@/content/site";

/**
 * Server component. Renders public/portrait.jpg if present;
 * otherwise a designed DT monogram card of identical polish.
 * Drop portrait.jpg into public/ and rebuild — zero code change.
 */
export default function Portrait() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "portrait.jpg"),
  );

  return (
    <div className="relative">
      {/* Tri-venture gradient ring */}
      <div className="absolute -inset-[1px] rounded-[19px] bg-gradient-to-br from-pp via-hel to-good opacity-60" />
      <div className="relative overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_24px_64px_-24px_rgb(0_0_0/0.6)]">
        {hasPhoto ? (
          <Image
            src="/portrait.jpg"
            alt={SITE.name}
            width={1200}
            height={1200}
            priority
            quality={88}
            sizes="(min-width: 768px) 420px, 90vw"
            className="aspect-square w-full max-w-[420px] object-cover"
          />
        ) : (
          <div className="grid aspect-square w-full max-w-[420px] place-items-center">
            <div className="text-center">
              <span className="bg-gradient-to-br from-pp-t via-hel-t to-good-t bg-clip-text text-[96px] font-bold tracking-[-0.04em] text-transparent">
                {SITE.monogram}
              </span>
              <p className="mt-2 text-[13px] text-muted">{SITE.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
