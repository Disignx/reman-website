"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = ".sr-fade, .sr-fade-up, .sr-stagger";

function scrollToHashTarget(reducedMotion: boolean): boolean {
  const hash = window.location.hash;
  if (!hash) {
    return false;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: reducedMotion ? "auto" : "instant",
    block: "start",
  });
  return true;
}

function revealIfInView(element: Element, observer: IntersectionObserver) {
  const rect = element.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.94 && rect.bottom > 0;

  if (!inView) {
    return;
  }

  element.classList.add("sr-visible");
  observer.unobserve(element);
}

function initScrollReveal(reducedMotion: boolean) {
  const targets = document.querySelectorAll(REVEAL_SELECTOR);

  if (reducedMotion) {
    targets.forEach((element) => element.classList.add("sr-visible"));
    return undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("sr-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  targets.forEach((element) => {
    element.classList.remove("sr-visible");
    observer.observe(element);
    revealIfInView(element, observer);
  });

  return observer;
}

export function MotionInit() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!scrollToHashTarget(reducedMotion)) {
          window.scrollTo(0, 0);
        }
      });
    });

    const body = document.body;

    body.classList.remove("dx-page-ready");
    body.classList.add("dx-page-enter");

    let enterTimer: number | undefined;
    let revealFrame = 0;
    let observer: IntersectionObserver | undefined;

    if (reducedMotion) {
      body.classList.remove("dx-page-enter");
      body.classList.add("dx-page-ready");
    } else {
      requestAnimationFrame(() => {
        body.classList.add("dx-page-ready");
      });
      enterTimer = window.setTimeout(() => {
        body.classList.remove("dx-page-enter");
      }, 900);
    }

    revealFrame = requestAnimationFrame(() => {
      revealFrame = requestAnimationFrame(() => {
        observer = initScrollReveal(reducedMotion);
      });
    });

    return () => {
      if (enterTimer !== undefined) {
        window.clearTimeout(enterTimer);
      }
      cancelAnimationFrame(revealFrame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
