"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Flash() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const status = params.get("sent"); // "1" | "0" | null
  const isSuccess = status === "1";
  const isError = status === "0";

  const message = useMemo(() => {
    if (isSuccess)
      return "Message sent successfully. I’ll get back to you soon.";
    if (isError)
      return "Sending failed. Please try again or email me directly.";
    return "";
  }, [isSuccess, isError]);

  // Show on load if present
  useEffect(() => {
    if (!status) return;
    setOpen(true);

    // remove ?sent=... from the URL to avoid re-triggering on refresh
    const url = new URL(window.location.href);
    url.searchParams.delete("sent");
    router.replace(url.pathname + url.search);

    // auto-hide after 5s
    // const t = setTimeout(() => setOpen(false), 5000);
    // return () => clearTimeout(t);
  }, [status, router]);

  if (!open || !message) return null;

  return (
    <div className="fixed inset-x-0 top-4 z-60 flex justify-center px-4">
      <div
        className={`max-w-xl w-full rounded-xl border px-4 py-3 text-sm shadow-xl transition
        ${
          isSuccess
            ? "border-emerald-700 bg-emerald-950/70 text-emerald-50"
            : ""
        }
        ${isError ? "border-red-700 bg-red-950/70 text-red-50" : ""}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start justify-between gap-3">
          <p>{message}</p>
          <button
            className="shrink-0 rounded-md border border-neutral-700/50 px-2 py-1 hover:bg-neutral-900"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
