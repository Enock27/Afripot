import { useState } from "react";
import { ChevronDown, ChevronUp, X, Calendar, Clock, Users } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [guests, setGuests] = useState(3);
  const [selectedDate, setSelectedDate] = useState<string>("2026-05-21");
  const [selectedTime, setSelectedTime] = useState<string>("19:30");
  const [expandedSection, setExpandedSection] = useState<string>("guests");

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Available dates
  const availableDates = [
    { date: "2026-05-21", label: "Thu 21", daysAway: "In 3 days" },
    { date: "2026-05-22", label: "Fri 22", daysAway: "In 4 days" },
  ];

  // Time slots with availability status
  const timeSlots = {
    Lunch: [
      { time: "12:00", available: true, waitlist: false },
      { time: "12:30", available: true, waitlist: false },
      { time: "13:00", available: true, waitlist: false },
    ],
    Dinner: [
      { time: "19:00", available: false, waitlist: true },
      { time: "19:30", available: true, waitlist: false },
      { time: "20:00", available: true, waitlist: false },
    ],
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:w-96 bg-gradient-to-b from-[#c9a07d] to-[#b8935a] rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-b from-[#c9a07d] to-[#b8935a] px-6 py-4 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-2">
            <img
              src="/AfriPot_logo2.png"
              alt="AfriPot"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-white text-sm font-semibold px-3 py-1 hover:bg-white/10 rounded">
              NL
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2 rounded"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="px-6 py-6 text-center">
          <p className="text-white/90 text-sm leading-relaxed">
            Welcome to AfriPot, where authentic African cuisine meets warm hospitality. Our kitchen celebrates the rich culinary traditions of Rwanda and across Africa, honoring time-tested recipes while embracing modern techniques. Every dish tells a story of heritage, passion, and craftsmanship. Here, flavors, cultures, and memories blend together in a welcoming atmosphere where genuine hospitality and memorable dining experiences are at the heart of everything we do. We warmly welcome you to our table.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Guests Section */}
          <div className="border border-white/30 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("guests")}
              className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 flex items-center justify-between text-white font-semibold transition"
            >
              <div className="flex items-center gap-3">
                <Users size={20} />
                <span>{guests} guests</span>
              </div>
              {expandedSection === "guests" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expandedSection === "guests" && (
              <div className="bg-white/5 p-4">
                <div className="grid grid-cols-5 gap-2">
                  {guestOptions.map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setGuests(num);
                        setExpandedSection("");
                      }}
                      className={`py-3 rounded-lg font-semibold transition ${
                        guests === num
                          ? "bg-white text-[#c9a07d]"
                          : "border border-white/30 text-white hover:bg-white/10"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Date Section */}
          <div className="border border-white/30 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("date")}
              className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 flex items-center justify-between text-white font-semibold transition"
            >
              <div className="flex items-center gap-3">
                <Calendar size={20} />
                <span>
                  {availableDates.find((d) => d.date === selectedDate)?.label ||
                    "Select date"}
                </span>
              </div>
              {expandedSection === "date" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expandedSection === "date" && (
              <div className="bg-white/5 p-4 space-y-3">
                <div className="text-white/70 text-xs font-semibold">
                  Next availability
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {availableDates.map((dateOption) => (
                    <button
                      key={dateOption.date}
                      onClick={() => {
                        setSelectedDate(dateOption.date);
                        setExpandedSection("time");
                      }}
                      className={`py-3 px-2 rounded-lg font-semibold text-sm transition text-center ${
                        selectedDate === dateOption.date
                          ? "bg-white text-[#c9a07d]"
                          : "border border-white/30 text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="font-bold">{dateOption.label}</div>
                      <div className="text-xs">{dateOption.daysAway}</div>
                    </button>
                  ))}
                  <button className="border border-white/30 text-white hover:bg-white/10 py-3 px-2 rounded-lg font-semibold text-sm transition">
                    <Calendar size={16} className="mx-auto" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Time Section */}
          <div className="border border-white/30 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("time")}
              className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 flex items-center justify-between text-white font-semibold transition"
            >
              <div className="flex items-center gap-3">
                <Clock size={20} />
                <span>{selectedTime}</span>
              </div>
              {expandedSection === "time" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {expandedSection === "time" && (
              <div className="bg-white/5 p-4 space-y-4">
                {Object.entries(timeSlots).map(([mealType, slots]) => (
                  <div key={mealType}>
                    <div className="text-white font-semibold text-sm mb-2">
                      {mealType}
                    </div>
                    <div className="space-y-2">
                      {slots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => {
                            if (slot.available || slot.waitlist) {
                              setSelectedTime(slot.time);
                              setExpandedSection("");
                            }
                          }}
                          disabled={!slot.available && !slot.waitlist}
                          className={`w-full py-3 px-4 rounded-lg font-semibold transition flex items-center gap-3 ${
                            selectedTime === slot.time
                              ? "bg-white text-[#c9a07d]"
                              : slot.available
                              ? "border border-white/30 text-white hover:bg-white/10"
                              : "border border-white/20 text-white/50 cursor-not-allowed"
                          } ${slot.waitlist ? "border-dashed" : ""}`}
                        >
                          <div className={`w-2 h-2 rounded-full ${slot.available ? "bg-current" : "bg-white/30"}`} />
                          <span>{slot.time}</span>
                          {slot.waitlist && (
                            <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded">
                              Waitlist
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reserve Button */}
          <button className="w-full bg-white text-[#c9a07d] font-bold py-4 rounded-lg hover:bg-white/90 transition text-lg">
            Reserve
          </button>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs pt-2">
            <span>🚀</span>
            <span>Made possible by Zenchef</span>
            <span>🎁</span>
          </div>
        </div>
      </div>
    </div>
  );
}
