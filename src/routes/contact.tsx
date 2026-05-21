import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Reserve — AfriPot Restaurant" },
      { name: "description", content: "Reserve a table at AfriPot Restaurant." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-16 px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Reserve · Contact</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          Be our <em className="text-gradient-gold">guest</em>
        </h1>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8">Find us</h2>
            <div className="space-y-6 sm:space-y-8 text-muted-foreground">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Address</p>
                <p className="text-base sm:text-lg text-foreground/90">Ridderplein 49<br />5421 CV Gemert<br />The Netherlands</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Reservations</p>
                <p className="text-base sm:text-lg text-foreground/90">+31 (0)492 36 16 21</p>
                <p className="text-base sm:text-lg text-foreground/90">reserve@restaurantgem.com</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Hours</p>
                <p className="text-base sm:text-lg text-foreground/90">Wed – Sat<br />Lunch 12:00 – 14:00<br />Dinner 18:30 – 21:00</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 border border-border/50"
          >
            <h2 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Request a reservation</h2>

            {sent ? (
              <div className="py-12 text-center">
                <div className="text-5xl text-gold mb-4">✦</div>
                <p className="font-serif text-2xl">Thank you</p>
                <p className="text-muted-foreground mt-2">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input required placeholder="First name" className="bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none" />
                  <input required placeholder="Last name" className="bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none" />
                </div>
                <input required type="email" placeholder="Email" className="w-full bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none" />
                <input required placeholder="Phone" className="w-full bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input required type="date" className="bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none text-foreground" />
                  <select required className="bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none">
                    <option className="bg-background">2 guests</option>
                    <option className="bg-background">3 guests</option>
                    <option className="bg-background">4 guests</option>
                    <option className="bg-background">5+ guests</option>
                  </select>
                </div>
                <textarea placeholder="Special requests (optional)" rows={3} className="w-full bg-transparent border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:border-gold outline-none resize-none" />
                <button type="submit" className="w-full bg-gold text-gold-foreground px-6 sm:px-8 py-3 sm:py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground transition-colors">
                  Request reservation
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Quick Reservation Button */}
      <section className="px-4 sm:px-6 md:px-12 pb-16">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-muted-foreground mb-6">Or use our quick reservation system:</p>
          <button
            onClick={() => setIsReservationModalOpen(true)}
            className="inline-block bg-gold text-gold-foreground px-8 py-3 text-sm tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
          >
            Open Reservation Modal
          </button>
        </div>
      </section>

      <ReservationModal isOpen={isReservationModalOpen} onClose={() => setIsReservationModalOpen(false)} />

      <SiteFooter />
    </div>
  );
}
