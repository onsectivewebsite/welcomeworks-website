"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ww-cookie-consent";

type Prefs = { essential: true; analytics: boolean; marketing: boolean; ts: string };

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function save(prefs: Omit<Prefs, "essential" | "ts">) {
    const value: Prefs = { essential: true, ...prefs, ts: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* storage unavailable — dismiss anyway */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-copy">
          <strong>We use cookies</strong>
          <p>
            We use cookies to keep the site working and to understand how it&apos;s used. You can
            accept all, or personalize your choices. See our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          {customizing && (
            <div className="cookie-prefs">
              <label className="cookie-pref disabled">
                <input type="checkbox" checked readOnly />
                <span>
                  <b>Essential</b> — always on. Needed for the site to work.
                </span>
              </label>
              <label className="cookie-pref">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <b>Analytics</b> — helps us understand how the site is used.
                </span>
              </label>
              <label className="cookie-pref">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <b>Marketing</b> — used to make any future ads more relevant.
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="cookie-actions">
          {!customizing ? (
            <>
              <button className="btn btn-ghost" onClick={() => setCustomizing(true)}>
                Personalize
              </button>
              <button
                className="btn btn-primary"
                onClick={() => save({ analytics: true, marketing: true })}
              >
                Accept all cookies
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-ghost"
                onClick={() => save({ analytics: false, marketing: false })}
              >
                Reject non-essential
              </button>
              <button className="btn btn-primary" onClick={() => save({ analytics, marketing })}>
                Save preferences
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
