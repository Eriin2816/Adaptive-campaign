"use client";

import { useEffect } from "react";

/**
 * ScrollAnimations — mounts a single IntersectionObserver that watches
 * every element with a [data-anim] attribute and adds .is-visible when
 * the element enters the viewport. Drop this once into the page layout.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px", // trigger slightly before fully in view
      }
    );

    // Observe all animated elements on the page
    const observe = () => {
      document.querySelectorAll("[data-anim]").forEach((el) => {
        // Skip elements that are already visible (above the fold)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          // Elements already in view get a short entry animation
          setTimeout(() => el.classList.add("is-visible"), 100);
        } else {
          observer.observe(el);
        }
      });
    };

    // Run after a short delay so all DOM is ready
    const t = setTimeout(observe, 50);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return null; // renders nothing
}
