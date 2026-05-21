import { useState } from "react";
import { ReservationModal } from "./ReservationModal";

export function FixedReservationButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 z-40 flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-gold text-gold-foreground pl-2.5 sm:pl-3 md:pl-4 lg:pl-5 pr-2 sm:pr-2.5 md:pr-3 lg:pr-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-amber-600 transition-colors shadow-elegant hover:shadow-lg"
        aria-label="Open reservation sidebar"
      >
        <span>Reserve a table</span>
        <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gold-foreground/20 rounded-full flex items-center justify-center text-xs sm:text-sm">🎟</span>
      </button>
      <ReservationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
