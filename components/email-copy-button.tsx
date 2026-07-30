"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EMAIL = "facilityconnectmarkaj@gmail.com";

type EmailCopyButtonProps = {
  variant: "contact" | "footer";
};

export function EmailCopyButton({ variant }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setCopied(true);
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => setCopied(false), 2000);
  }

  const actionLabel = copied
    ? "E-Mail-Adresse kopiert"
    : `${EMAIL} in die Zwischenablage kopieren`;

  if (variant === "contact") {
    return (
      <button
        type="button"
        className="email-copy email-copy-contact"
        onClick={copyEmail}
        aria-label={actionLabel}
      >
        <Mail aria-hidden="true" />
        <span>
          <strong>E-Mail</strong>
          <span className="email-copy-value">
            {EMAIL}
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </span>
        </span>
        <span className="sr-only" aria-live="polite">
          {copied ? "E-Mail-Adresse kopiert." : ""}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className="email-copy email-copy-footer"
      onClick={copyEmail}
      aria-label={actionLabel}
    >
      <span>{EMAIL}</span>
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "E-Mail-Adresse kopiert." : ""}
      </span>
    </button>
  );
}
