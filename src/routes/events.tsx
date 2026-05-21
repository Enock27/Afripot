import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState, useEffect } from "react";
import { upcomingEvents, pastEvents, Event } from "@/data/eventsData";
import { Music, Calendar, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events — AfriPot Restaurant" },
      { name: "description", content: "Discover upcoming events at AfriPot Restaurant. Live music, cultural celebrations, and special dining experiences." },
    ],
  }),
});

function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate carousel every 10 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentCarouselIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentCarouselIndex((prev) => (prev + 1) % upcomingEvents.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentCarouselIndex(index);
  };

  const categories = [
    { id: "all", label: "All Events", icon: "🎉" },
    { id: "music", label: "Live Music", icon: "🎵" },
    { id: "dining", label: "Dining", icon: "🍽️" },
    { id: "cultural", label: "Cultural", icon: "🎭" },
    { id: "special", label: "Special", icon: "✨" },
  ];

  const filteredEvents = selectedCategory === "all"
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const EventCard = ({ event }: { event: Event }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#c9a07d] to-[#b8935a] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-bounce-in">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {event.category}
        </div>

        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse-glow">
            🔥 Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 notable-regular group-hover:text-gold transition-colors">
          {event.title}
        </h3>

        {event.artist && (
          <p className="text-sm text-white/80 mb-3 flex items-center gap-2">
            <Music size={16} />
            {event.artist}
          </p>
        )}

        <p className="text-sm text-white/90 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-white/80">
            <Calendar size={16} />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center gap-2 text-white/80">
              <Users size={16} />
              <span>{event.attendees} people interested</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a07d]/20 to-[#b8935a]/20 blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 major-mono-display-regular text-gold">
            EVENTS
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-2 notable-regular">
            Experience the Rhythm of AfriPot
          </p>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Join us for unforgettable evenings filled with live music, cultural celebrations, and culinary excellence
          </p>
        </div>
      </section>

      {/* Featured Event Carousel - Colossal */}
      <section className="px-4 sm:px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentCarouselIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {/* Banner Image */}
                  <img
                    src={event.banner || event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                </div>
              ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-3xl animate-slide-up">
                {/* Featured Badge */}
                <div className="inline-block mb-6 sm:mb-8">
                  <div className="bg-red-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider animate-pulse-glow">
                    🔥 Featured Event
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-block mb-4 ml-4">
                  <div className="bg-gold text-gold-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {upcomingEvents[currentCarouselIndex].category}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 notable-regular text-white leading-tight">
                  {upcomingEvents[currentCarouselIndex].title}
                </h2>

                {/* Artist */}
                {upcomingEvents[currentCarouselIndex].artist && (
                  <p className="text-lg sm:text-xl md:text-2xl text-gold mb-4 sm:mb-6 flex items-center gap-3">
                    <Music size={24} />
                    {upcomingEvents[currentCarouselIndex].artist}
                  </p>
                )}

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                  {upcomingEvents[currentCarouselIndex].description}
                </p>

                {/* Event Details */}
                <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 text-white">
                    <Calendar size={24} className="text-gold" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">Date</p>
                      <p className="text-lg sm:text-xl font-semibold">{upcomingEvents[currentCarouselIndex].date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Clock size={24} className="text-gold" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">Time</p>
                      <p className="text-lg sm:text-xl font-semibold">{upcomingEvents[currentCarouselIndex].time}</p>
                    </div>
                  </div>
                  {upcomingEvents[currentCarouselIndex].attendees && (
                    <div className="flex items-center gap-3 text-white">
                      <Users size={24} className="text-gold" />
                      <div>
                        <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">Interested</p>
                        <p className="text-lg sm:text-xl font-semibold">{upcomingEvents[currentCarouselIndex].attendees} people</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className="bg-gold text-gold-foreground px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold uppercase tracking-wider text-base sm:text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                  Reserve Your Spot
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
              aria-label="Previous event"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-110"
              aria-label="Next event"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
              {upcomingEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentCarouselIndex
                      ? "bg-gold w-8 sm:w-10 h-3 sm:h-4"
                      : "bg-white/40 hover:bg-white/60 w-3 sm:w-4 h-3 sm:h-4"
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm border ${
                  isAutoPlay
                    ? "bg-gold/80 text-gold-foreground border-gold"
                    : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                }`}
              >
                {isAutoPlay ? "⏸ Auto" : "▶ Manual"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 md:px-12 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 text-sm ${
                  selectedCategory === cat.id
                    ? "bg-gold text-gold-foreground shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4 sm:px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center notable-regular text-gold">
            Upcoming Events
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <div key={event.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-white/60 notable-regular">
                No events in this category yet
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Toggle */}
      <section className="px-4 sm:px-6 md:px-12 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowPastEvents(!showPastEvents)}
            className="mx-auto block px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 border border-white/20"
          >
            {showPastEvents ? "Hide" : "Show"} Past Events
          </button>

          {showPastEvents && (
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-8 text-center notable-regular text-white/80">
                Past Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map(event => (
                  <div key={event.id} className="opacity-75">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-12 py-20 bg-gradient-to-r from-[#c9a07d]/10 to-[#b8935a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 notable-regular text-gold">
            Have an Event Idea?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We love hosting special events and celebrations. Contact us to discuss your vision for an unforgettable evening at AfriPot.
          </p>
          <button className="bg-gold text-gold-foreground px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-amber-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
