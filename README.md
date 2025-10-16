# Schoova Dashboard & Recommendations

A modern, accessible React web application showcasing the Dashboard & Recommendations feature for Schoova—an accountability tool for young adults that integrates automated scheduling with social challenges to boost engagement and long-term retention.

## Features

### 📊 Dashboard
- **Quick KPI Tiles**: Scan progress at a glance with metrics for Today, Last 7 Days, and Last 30 Days
  - Study Minutes
  - Tasks Completed
  - Breaks Taken
  - Focus Score
- **Trend Indicators**: Visual trending up/down with percentage changes

### 🔥 Streak Card
- Current streak tracking
- All-time best streak
- Next milestone with progress bar
- Motivational gradient design

### 📈 Analytics Visualizations
- **Line Chart**: Daily study minutes over time
- **Bar Chart**: Tasks completed by category
- **Donut Chart**: Work-to-break ratio visualization

### 💡 AI-Powered Recommendations Drawer
- Three personalized suggestions grounded in mock stats
- Each recommendation includes:
  - Title and rationale
  - Expected impact metrics
  - Time slot information
  - Accept, Modify, or Decline actions
- Recommendations persist via localStorage
- Toast notifications confirm actions

### 📱 Accessibility & Inclusion
- **WCAG 2.1 Compliant**: Semantic HTML, ARIA labels, keyboard navigation
- **Color Contrast**: All text meets AA standards
- **Responsive Design**: Mobile-first approach works on all screen sizes
- **Clear Typography**: Large, readable fonts with proper hierarchy
- **Icons + Text**: All actions labeled with both icons and text
- **Focus Indicators**: Clear focus states for keyboard users
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

### 🎨 Modern UI
- **Creative Color Scheme**: Indigo, pink, emerald, and amber palette
- **Material Design 3**: Google's latest design system
- **Smooth Animations**: Hover effects and transitions
- **Clean Layout**: Whitespace and proper spacing throughout

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.js                      # Main application component
├── theme.js                    # Material Design theme configuration
├── mockData.js                 # Mock data for dashboard
├── components/
│   ├── KPITile.js             # KPI metric card component
│   ├── StreakCard.js          # Streak visualization component
│   ├── Charts.js              # Chart components (line, bar, donut)
│   ├── RecommendationCard.js  # Individual recommendation card
│   ├── RecommendationsDrawer.js # Recommendations sidebar
│   └── Toast.js               # Toast notification component
└── index.js                    # React entry point
```

## Key Features Implementation

### localStorage Persistence
- Accepted recommendations are saved to localStorage
- Planned blocks persist across page reloads
- "What Changed" section displays accepted recommendations

### Toast Notifications
- Success message when accepting a recommendation
- Info messages for modify/decline actions
- Auto-dismisses after 4 seconds
- Survives page reload (message shown on next interaction)

### Responsive Design
- Mobile: Single column layout
- Tablet: Two column layout
- Desktop: Multi-column grid with full visualizations

## Mocked Data

All data is mocked for demonstration purposes:
- **Daily Study Data**: 7 days of study minutes
- **Tasks by Category**: 5 categories with task counts
- **Work-Break Ratio**: 65% work, 35% breaks
- **Streak Data**: Current (12), All-time best (47), Next milestone (15)
- **KPIs**: Metrics for today, 7 days, and 30 days
- **Recommendations**: 3 AI-powered suggestions with rationale and impact

## Accessibility Features

✅ **Semantic HTML**: Proper heading hierarchy, landmark regions
✅ **ARIA Labels**: Descriptive labels for all interactive elements
✅ **Keyboard Navigation**: Full keyboard support for all features
✅ **Color Not Alone**: Information conveyed through text and icons
✅ **Focus Management**: Clear focus indicators and logical tab order
✅ **Motion**: Respects user's motion preferences
✅ **Text Sizing**: Readable fonts with proper contrast ratios
✅ **Error Prevention**: Clear messaging for all actions

## Technologies Used

- **React 18**: UI library
- **Material-UI (MUI) 5**: Component library with Material Design
- **Recharts**: Data visualization library
- **date-fns**: Date utilities
- **Emotion**: CSS-in-JS styling

## Future Enhancements

- Integration with Google Calendar API
- Real user data instead of mocks
- Backend API for recommendations
- Social features (friend streaks, challenges)
- Push notifications
- Dark mode toggle
- Multi-language support

## License

This project is part of the Schoova accountability platform.

---

**Built for Schoova's Software Engineering with Generative AI class project** 🚀
