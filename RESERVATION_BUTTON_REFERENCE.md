# Reservation Button - HTML Reference

## Button HTML (From Your Requirements)

The exact button you requested is implemented on the home page:

```html
<div class="flex items-end justify-end pb-2 sm:pb-3 md:pb-4 lg:pb-6">
  <a href="/reservation" class="flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-gold text-gold-foreground pl-2.5 sm:pl-3 md:pl-4 lg:pl-5 pr-2 sm:pr-2.5 md:pr-3 lg:pr-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-amber-600 transition-colors shadow-elegant">
    <span>Reserveer een tafel</span>
    <span class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gold-foreground/20 rounded-full flex items-center justify-center text-xs sm:text-sm">🎟</span>
  </a>
</div>
```

## Button Features

### Layout
- **Container**: Flex with end alignment
- **Padding**: Responsive (pb-2 to pb-6)
- **Direction**: Horizontal flex with gap

### Button Styling
- **Background**: Gold color
- **Text Color**: Gold foreground
- **Padding**: Responsive horizontal and vertical
- **Border Radius**: Fully rounded (rounded-full)
- **Hover**: Amber-600 background
- **Transition**: Smooth color transition
- **Shadow**: Elegant shadow effect

### Text Content
- **Text**: "Reserveer een tafel" (Reserve a table)
- **Font Size**: Responsive (0.65rem to sm)
- **Letter Spacing**: 0.2em (uppercase tracking)
- **Transform**: Uppercase

### Icon Badge
- **Size**: Responsive (w-5 h-5 to w-7 h-7)
- **Background**: Gold foreground with 20% opacity
- **Shape**: Circular (rounded-full)
- **Content**: 🎟 (ticket emoji)
- **Alignment**: Centered flex

## Responsive Behavior

### Mobile (< 640px)
```
Gap: 0.5rem (gap-2)
Padding: 0.375rem (pb-2)
Font: 0.65rem
Icon: 20px × 20px
```

### Small (640px - 768px)
```
Gap: 0.625rem (gap-2.5)
Padding: 0.75rem (pb-3)
Font: 0.75rem (xs)
Icon: 24px × 24px
```

### Medium (768px - 1024px)
```
Gap: 0.75rem (gap-3)
Padding: 1rem (pb-4)
Font: 0.875rem (sm)
Icon: 28px × 28px
```

### Large (> 1024px)
```
Gap: 0.75rem (gap-3)
Padding: 1.5rem (pb-6)
Font: 0.875rem (sm)
Icon: 28px × 28px
```

## Color Values

| Property | Value | Usage |
|----------|-------|-------|
| Background | `bg-gold` | Button background |
| Text | `text-gold-foreground` | Text color |
| Icon BG | `bg-gold-foreground/20` | Icon background |
| Hover | `hover:bg-amber-600` | Hover state |
| Shadow | `shadow-elegant` | Drop shadow |

## Tailwind Classes Breakdown

```
flex                    - Display flex
items-end              - Vertical alignment
justify-end            - Horizontal alignment
pb-2 sm:pb-3 md:pb-4 lg:pb-6  - Responsive padding-bottom

bg-gold                - Background color
text-gold-foreground   - Text color
pl-2.5 sm:pl-3 md:pl-4 lg:pl-5  - Responsive left padding
pr-2 sm:pr-2.5 md:pr-3 lg:pr-4   - Responsive right padding
py-1.5 sm:py-2 md:py-2.5 lg:py-3 - Responsive vertical padding

text-[0.65rem] sm:text-xs md:text-sm  - Responsive font size
tracking-[0.2em]       - Letter spacing
uppercase              - Text transform
rounded-full           - Border radius

hover:bg-amber-600     - Hover background
transition-colors      - Smooth transition
shadow-elegant         - Box shadow

gap-2 sm:gap-2.5 md:gap-3  - Responsive gap

w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7  - Responsive icon size
bg-gold-foreground/20  - Icon background with opacity
rounded-full           - Circular shape
flex items-center justify-center  - Center content
text-xs sm:text-sm     - Responsive text size
```

## Implementation Location

**File**: `src/routes/index.tsx`
**Section**: Hero section, bottom-right area
**Route**: `/` (home page)
**Link Target**: `/reservation`

## Interaction Flow

1. User sees button on home page hero
2. Clicks "Reserveer een tafel" button
3. Navigates to `/reservation` route
4. Reservation modal automatically opens
5. User completes reservation
6. Modal can be closed to return to page

## Accessibility

- ✅ Semantic link element
- ✅ Clear text label
- ✅ Icon provides visual context
- ✅ High contrast colors
- ✅ Hover state for feedback
- ✅ Responsive sizing
- ✅ Touch-friendly on mobile

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ Responsive design verified

## Performance

- ✅ No external dependencies
- ✅ Pure CSS styling
- ✅ Smooth transitions
- ✅ GPU-accelerated animations
- ✅ Minimal bundle impact

## Notes

- The button uses TanStack Router's `Link` component
- Styling is handled entirely with Tailwind CSS
- No JavaScript required for button functionality
- Modal opens automatically on `/reservation` route
- Button is fully responsive across all devices
