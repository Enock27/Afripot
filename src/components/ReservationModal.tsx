import { useState, useEffect, useRef } from "react";
import { ChevronDown, X, Calendar, Clock, Users, Mail, Phone } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedTime, setSelectedTime] = useState<string>("19:30");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Time slots with availability status
  const timeSlots = [
    { time: "19:00", available: true },
    { time: "19:30", available: true },
    { time: "20:00", available: true },
  ];

  // Handle ESC key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle focus trap
  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;

    const focusableElements = sidebarRef.current.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Restaurant Reservation"
        className="fixed right-6 top-6 h-[calc(100vh-48px)] w-72 bg-gradient-to-b from-[#C4A84F] to-[#B8935A] shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out rounded-2xl"
        style={{
          boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/AfriPot_logo2.png"
              alt="AfriPot"
              className="h-8 w-auto"
            />
            <span className="text-sm font-serif text-white font-semibold">AfriPot</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-white text-xs font-bold px-3 py-1.5 hover:bg-white/20 rounded-full transition"
              aria-label="Switch to Dutch"
            >
              NL
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition"
              aria-label="Close reservation sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Welcome Text */}
          <div className="px-6 py-6">
            <p className="text-white text-sm leading-relaxed italic">
              Experience authentic African cuisine in an atmosphere of warmth and elegance. Reserve your table for an unforgettable evening.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mx-6" />

          {/* Guest Selector */}
          <div className="px-6 py-4 border-b border-white/20">
            <button
              onClick={() => toggleSection("guests")}
              className="w-full flex items-center justify-between text-white hover:opacity-80 transition"
            >
              <div className="flex items-center gap-3">
                <Users size={18} />
                <span className="font-serif text-base">{guests} guests</span>
              </div>
              <ChevronDown size={18} />
            </button>

            {expandedSection === "guests" && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setGuests(num);
                      setExpandedSection(null);
                    }}
                    className={`py-2 rounded-lg text-sm font-semibold transition ${
                      guests === num
                        ? "bg-white text-[#C4A84F]"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Selector */}
          <div className="px-6 py-4 border-b border-white/20">
            <button
              onClick={() => toggleSection("date")}
              className="w-full flex items-center justify-between text-white hover:opacity-80 transition"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} />
                <span className="font-serif text-base">{selectedDate}</span>
              </div>
              <ChevronDown size={18} />
            </button>

            {expandedSection === "date" && (
              <div className="mt-4 space-y-2">
                {["Today", "Tomorrow", "In 2 days"].map((date) => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      setExpandedSection(null);
                    }}
                    className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition ${
                      selectedDate === date
                        ? "bg-white text-[#C4A84F]"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Selector */}
          <div className="px-6 py-4 border-b border-white/20">
            <button
              onClick={() => toggleSection("time")}
              className="w-full flex items-center justify-between text-white hover:opacity-80 transition"
            >
              <div className="flex items-center gap-3">
                <Clock size={18} />
                <div className="text-left">
                  <div className="font-serif text-base">Time</div>
                  <div className="text-xs text-white/70">Dinner</div>
                </div>
              </div>
              <ChevronDown size={18} />
            </button>

            {expandedSection === "time" && (
              <div className="mt-4 space-y-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => {
                      setSelectedTime(slot.time);
                      setExpandedSection(null);
                    }}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition flex items-center gap-3 ${
                      selectedTime === slot.time
                        ? "bg-white text-[#C4A84F] border-2 border-white"
                        : "bg-white/20 text-white hover:bg-white/30 border-2 border-transparent"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>{slot.time}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Guest Information Section */}
          <div className="px-6 py-4 border-b border-white/20 space-y-3">
            {/* Name Input */}
            <div>
              <label className="block text-white text-xs font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-white focus:outline-none transition text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white text-xs font-semibold mb-2 flex items-center gap-2">
                <Mail size={14} />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-white focus:outline-none transition text-sm"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-white text-xs font-semibold mb-2 flex items-center gap-2">
                <Phone size={14} />
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:border-white focus:outline-none transition text-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/20 px-6 py-4">
          {/* Reserve Button */}
          <button className="w-full bg-white text-[#C4A84F] font-serif font-bold py-3 rounded-lg hover:bg-white/90 transition text-base shadow-lg">
            Reserveren
          </button>
        </div>
      </div>
    </>
  );
}
