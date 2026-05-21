# Events Page - Quick Reference Guide

## 🚀 Quick Start

### Access the Events Page
Navigate to: `/events`

### Add a New Event
Edit: `src/data/eventsData.ts`

Add to `upcomingEvents` array:
```typescript
{
  id: "unique-id",
  title: "Event Title",
  date: "Day, Month Date",
  day: "Day",
  time: "HH:MM - HH:MM",
  description: "Event description",
  artist: "Artist Name (optional)",
  category: "music" | "dining" | "cultural" | "special",
  image: "/image-name.jpg",
  banner: "/eventBannerUI/banner-name.jpg", // optional
  attendees: 50,
  featured: false, // set true to feature
}
```

## 📁 File Locations

| File | Purpose |
|------|---------|
| `src/routes/events.tsx` | Events page component |
| `src/data/eventsData.ts` | Events data |
| `src/styles.css` | Fonts and animations |
| `src/components/SiteHeader.tsx` | Navigation link |

## 🖼️ Image Locations

| Type | Path |
|------|------|
| Event Images | `src/assets/` |
| Event Banners | `src/assets/eventBannerUI/` |

## 🎨 Fonts

| Font | Class | Usage |
|------|-------|-------|
| Notable | `.notable-regular` | Event titles |
| Major Mono Display | `.major-mono-display-regular` | Main "EVENTS" title |

## 🎯 Event Categories

| Category | Icon | ID |
|----------|------|-----|
| All Events | 🎉 | all |
| Live Music | 🎵 | music |
| Dining | 🍽️ | dining |
| Cultural | 🎭 | cultural |
| Special | ✨ | special |

## 🎬 Animations

| Animation | Class | Effect |
|-----------|-------|--------|
| Bounce In | `.animate-bounce-in` | Cards bounce on load |
| Float | `.animate-float` | Subtle floating |
| Pulse Glow | `.animate-pulse-glow` | Featured badge glow |

## 📊 Event Properties

```typescript
id: string              // Unique identifier
title: string           // Event name
date: string            // Full date (e.g., "Friday, May 24")
day: string             // Day name (e.g., "Friday")
time: string            // Time range (e.g., "19:00 - 23:00")
description: string     // Event description
artist?: string         // Artist/performer name (optional)
category: string        // music | dining | cultural | special
image: string           // Event image path
banner?: string         // Featured banner image (optional)
attendees?: number      // Number of interested people (optional)
featured?: boolean      // Show as featured event (optional)
```

## 🔧 Customization

### Change Featured Event
```typescript
// Set featured: true on desired event
featured: true
```

### Add Event Banner
```typescript
// Include banner property
banner: "/eventBannerUI/your-banner.jpg"
```

### Update Attendee Count
```typescript
// Update attendees number
attendees: 75
```

### Change Category
```typescript
// Use one of: music, dining, cultural, special
category: "music"
```

## 🎨 Color Reference

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark | #151515 |
| Gold | Primary | #c9a07d |
| Gold Dark | Secondary | #b8935a |
| Featured | Red | #ef4444 |
| Text | White | #ffffff |

## 📱 Responsive Breakpoints

| Device | Columns | Width |
|--------|---------|-------|
| Mobile | 1 | < 640px |
| Tablet | 2 | 640px - 1024px |
| Desktop | 3 | > 1024px |

## 🔗 Navigation

Add events link to any page:
```typescript
import { Link } from "@tanstack/react-router";

<Link to="/events">Events</Link>
```

## 💡 Tips

1. **Use High-Quality Images**: 16:9 aspect ratio works best
2. **Keep Descriptions Short**: 2-3 sentences max
3. **Update Featured Event**: Change regularly for freshness
4. **Add Past Events**: Builds credibility
5. **Include Artist Names**: For music events
6. **Update Attendee Counts**: Shows popularity
7. **Use Consistent Formatting**: For dates and times

## 🚀 Build & Deploy

```bash
# Build the project
npm run build

# Check for errors
npm run lint

# Verify TypeScript
npm run type-check
```

## 📞 Support

For questions or issues:
1. Check `EVENTS_PAGE_DOCUMENTATION.md` for detailed info
2. Review component code in `src/routes/events.tsx`
3. Check data structure in `src/data/eventsData.ts`

## ✅ Checklist for Adding Events

- [ ] Event has unique ID
- [ ] Title is clear and engaging
- [ ] Date and time are formatted correctly
- [ ] Description is concise
- [ ] Category is selected
- [ ] Image is uploaded to `src/assets/`
- [ ] Image path is correct
- [ ] Artist name added (if applicable)
- [ ] Attendee count updated
- [ ] Featured status set (if applicable)
- [ ] Banner image added (if featured)
- [ ] Build tested successfully

## 🎉 You're Ready!

The events page is fully functional and ready to showcase AfriPot's exciting events!
