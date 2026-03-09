# Edu-Sense UI Documentation

## Overview
Edu-Sense is an intelligent lecture engagement analysis system that provides real-time classroom engagement monitoring for university lecturers through computer vision and data analytics. The application features a modern, clean, and professional minimalist academic interface with soft neutral colors (white, light gray, blue) and high contrast for readability.

## Technology Stack
- **Frontend Framework**: React.js 18.3.1
- **Routing**: React Router v7.13.0 (Data mode)
- **Styling**: Tailwind CSS v4.1.12
- **Build Tool**: Vite 6.3.5
- **Charts/Visualizations**: Recharts 2.15.2
- **Icons**: Lucide React 0.487.0
- **UI Components**: Radix UI (various components)
- **Animation**: Motion (Framer Motion) 12.23.24
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Design System

### Color Palette
- **Primary**: Blue (#3b82f6, blue-600)
- **Secondary**: Indigo (#4f46e5, indigo-600)
- **Success**: Green (#10b981, green-600)
- **Warning**: Yellow/Orange (#f59e0b, yellow-600 / #ea580c, orange-600)
- **Error/Critical**: Red (#ef4444, red-600)
- **Neutrals**: Gray scale (gray-50 to gray-900)
- **Background**: White (#ffffff) and Light Gray (#f9fafb, gray-50)

### Typography
- **Headings**: 
  - h1: text-2xl (24px)
  - h2: text-lg (18px)
  - h3: text-lg (18px)
- **Body Text**: text-sm (14px), text-xs (12px)
- **Font Family**: System default (Tailwind base)

### Spacing & Layout
- **Base Spacing**: p-6 (24px padding) for main containers
- **Card Padding**: p-6 (24px)
- **Section Gaps**: space-y-6 (24px vertical spacing)
- **Grid Gaps**: gap-4 (16px) and gap-6 (24px)

### Components Style
- **Border Radius**: rounded-lg (8px) for most components
- **Borders**: border border-gray-200 (1px solid light gray)
- **Shadows**: shadow-lg for elevated surfaces (login form)
- **Transitions**: transition-colors for hover states

## Application Structure

### Routing Configuration
**File**: `/src/app/routes.ts`

```
/ (Root)
├── LoginScreen
└── /dashboard (DashboardLayout)
    ├── / (index) → LiveDashboard
    ├── /analytics → AnalyticsScreen
    └── /settings → SettingsScreen
```

## Screen Specifications

### 1. Login Screen
**File**: `/src/app/screens/LoginScreen.tsx`

**Layout**: Split-screen design (desktop), single column (mobile)

**Desktop Layout** (≥1024px):
- **Left Side** (50% width):
  - Hero image with blue gradient overlay
  - University campus photo (Unsplash)
  - Gradient: `from-blue-900/90 to-indigo-900/90`
  - Centered branding:
    - GraduationCap icon (80x80px)
    - "Edu-Sense" heading (text-4xl)
    - Tagline: "Intelligent Lecture Engagement Analysis" (text-xl)

- **Right Side** (50% width):
  - Background: `bg-gray-50`
  - White card container with shadow
  - Maximum width: 448px (max-w-md)
  
**Login Form Elements**:
1. **Header**:
   - "Welcome Back" (text-2xl)
   - Subtitle: "Sign in to access your dashboard" (text-gray-600)

2. **Input Fields**:
   - Email input with Mail icon (left-aligned)
   - Password input with Lock icon (left-aligned)
   - Input styling: `border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500`
   - Icon size: w-5 h-5, positioned left-3 from edge

3. **Additional Controls**:
   - Remember me checkbox
   - Forgot password link (text-blue-600)

4. **Submit Button**:
   - Full width
   - Blue background (`bg-blue-600 hover:bg-blue-700`)
   - Text: "Login as Lecturer"
   - Loading state: "Signing in..."

5. **Footer**:
   - Help link: "Contact IT Support"
   - Copyright notice: "© 2026 Edu-Sense. All rights reserved."

**Mobile Layout** (<1024px):
- Full-width single column
- Logo displayed at top (GraduationCap icon + text)
- Same form in white card container

**Functionality**:
- Form validation (required fields)
- Simulated 1-second login delay
- Redirects to `/dashboard` on success

---

### 2. Dashboard Layout
**File**: `/src/app/components/DashboardLayout.tsx`

**Layout**: Fixed sidebar + main content area

**Sidebar** (256px width):
- Background: white
- Fixed height (h-screen)
- Border: `border-r border-gray-200`

**Sidebar Sections**:

1. **Logo Area** (top):
   - Padding: p-6
   - Border bottom: `border-b border-gray-200`
   - GraduationCap icon (32x32px) + Text
   - App name: "Edu-Sense" (text-xl)
   - Subtitle: "Engagement Analysis" (text-xs text-gray-500)

2. **Navigation Menu** (middle):
   - Padding: p-4
   - Vertical spacing: space-y-2
   - Nav items:
     - Live Dashboard (LayoutDashboard icon)
     - Analytics (BarChart3 icon)
     - Settings (Settings icon)
   
   **Nav Item Styles**:
   - Active: `bg-blue-50 text-blue-600`
   - Inactive: `text-gray-700 hover:bg-gray-50`
   - Full width buttons with left-aligned icon + text
   - Rounded: rounded-lg
   - Padding: px-4 py-3

3. **User Info & Logout** (bottom):
   - Border top: `border-t border-gray-200`
   - User name: "Dr. Sarah Johnson" (text-sm)
   - Department: "Computer Science Dept." (text-xs text-gray-500)
   - Logout button: `hover:bg-red-50 hover:text-red-600`

**Main Content Area**:
- Flex-1 width (fills remaining space)
- Scrollable: `overflow-auto`
- Renders child routes via `<Outlet />`

---

### 3. Live Dashboard
**File**: `/src/app/screens/LiveDashboard.tsx`

**Layout**: Full-width container with responsive grid

**Header Section**:
- **Left Side**:
  - Course title: "CS301: Advanced Algorithms" (text-2xl)
  - Date/Time: "Thursday, February 5, 2026 • 10:00 AM - 11:30 AM" (text-gray-600)

- **Right Side**:
  - Live status badge:
    - Live: `bg-red-100 text-red-700` with pulsing red dot
    - Offline: `bg-gray-100 text-gray-700`
  - Control button:
    - Live → "Stop Recording" (gray button)
    - Offline → "Start Recording" (blue button)

**Main Grid Layout** (grid grid-cols-1 xl:grid-cols-3):

#### Left Column (xl:col-span-2):

1. **Video Preview Card**:
   - Component: `<VideoPreview />`
   - White card with padding and border
   - Aspect ratio: 16:9
   - Features:
     - Live classroom feed (Unsplash image when active)
     - Face detection overlays (colored rectangles)
     - Real-time emotion labels
     - Face count display
     - Color coding:
       - Green border: Attentive
       - Yellow border: Neutral
       - Red border: Confused
     - Legend at bottom showing color meanings

2. **Summary Cards** (grid grid-cols-1 md:grid-cols-3):
   
   **Card 1 - Students Present**:
   - Icon: Users (blue)
   - Large number: 42
   - Label: "Students Present"
   - Badge: "Detected"
   
   **Card 2 - Attentive Students**:
   - Icon: CheckCircle (green)
   - Large number: 35 (dynamic)
   - Label: "Attentive Students"
   - Badge: "Active"
   
   **Card 3 - Overall Engagement**:
   - Icon: TrendingUp (color-coded by level)
   - Large number: 78% (dynamic)
   - Label: "Overall Engagement"
   - Badge: High/Moderate/Low (color-coded)

3. **Engagement Over Time Chart**:
   - Component: `<EngagementChart />`
   - White card container
   - Title: "Engagement Over Time"
   - Area chart with dual metrics:
     - Engagement (blue line with gradient fill)
     - Attention (green line with gradient fill)
   - X-axis: Time stamps (HH:MM:SS format)
   - Y-axis: Score 0-100%
   - Updates every 3 seconds
   - Displays last 21 data points
   - Tooltip on hover

#### Right Column:

1. **Emotion Distribution**:
   - Component: `<EmotionDistribution />`
   - Donut chart (pie chart with inner radius)
   - Shows 4 emotion categories:
     - Attentive (green, ~65%)
     - Neutral (orange, ~20%)
     - Confused (red, ~10%)
     - Distracted (gray, ~5%)
   - Legend list below chart with percentages
   - Updates every 4 seconds

2. **Teaching Recommendations**:
   - Component: `<TeachingRecommendations />`
   - Gradient background: `from-blue-50 to-indigo-50`
   - Icon: Lightbulb
   - Dynamic recommendations based on engagement:
     - **Low (<60%)**: High priority actions
       - "Pause and ask a question"
       - "Increase student interaction"
       - "Consider changing pace"
     - **Moderate (60-75%)**: Medium priority suggestions
       - "Consider a brief Q&A session"
       - "Try a quick poll or activity"
     - **High (>75%)**: Positive feedback
       - "Engagement is excellent!"
       - "Continue current approach"
   - Color-coded priority badges (red/yellow/green backgrounds)

3. **Real-Time Alerts**:
   - Component: `<AlertPanel />`
   - Shows current status alerts
   - Alert types:
     - Critical: `bg-red-50 border-red-200 text-red-700` (AlertTriangle icon)
     - Warning: `bg-yellow-50 border-yellow-200 text-yellow-700` (AlertCircle icon)
     - Success: `bg-green-50 border-green-200 text-green-700` (CheckCircle icon)
   - Each alert shows:
     - Icon
     - Message
     - Timestamp

**Real-Time Behavior**:
- Engagement score updates every 3 seconds
- Attentive count fluctuates randomly
- Face detection simulates every 2 seconds
- All charts auto-update with live data

---

### 4. Analytics Screen
**File**: `/src/app/screens/AnalyticsScreen.tsx`

**Header Section**:
- **Left Side**:
  - Title: "Engagement Analytics"
  - Subtitle: "Detailed analysis of student engagement patterns"

- **Right Side**:
  - Time range selector dropdown:
    - Last 7 Days
    - Last 30 Days
    - This Semester
  - Export PDF button (blue, primary)
  - Export CSV button (white with border, secondary)

**Summary Stats Cards** (grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4):

1. **Average Engagement**:
   - Icon: TrendingUp (blue)
   - Value: 74%
   - Metric: "Average Engagement"
   - Trend: "+5% from last period" (green text)

2. **Total Sessions**:
   - Icon: Calendar (purple)
   - Value: 12
   - Metric: "Total Sessions"
   - Note: "In selected period" (gray text)

3. **Avg Session Duration**:
   - Icon: Clock (orange)
   - Value: 85min
   - Metric: "Avg Session Duration"
   - Note: "Per lecture"

4. **Peak Attention**:
   - Icon: Users (green)
   - Value: 88%
   - Metric: "Peak Attention"
   - Note: "Best performance" (green text)

**Charts Grid** (grid grid-cols-1 xl:grid-cols-2):

1. **Engagement Trends**:
   - Component: `<HistoricalEngagementChart />`
   - Line/area chart showing historical data
   - Shows engagement patterns over selected time period

2. **Emotion Trends Over Time**:
   - Component: `<EmotionTrendsChart />`
   - Multi-line chart tracking emotion changes
   - Different colors for each emotion type

**Session Comparison**:
- Component: `<SessionComparison />`
- Full-width card
- Compares multiple lecture sessions
- Bar chart or comparison table

**Attention Heatmap**:
- Component: `<AttentionHeatmap />`
- Full-width card
- Title: "Attention Heatmap by Time of Day"
- Visual heatmap showing when students are most attentive

**Export Functionality**:
- PDF export simulation
- CSV export simulation
- Alert dialog confirms export action

---

### 5. Settings Screen
**File**: `/src/app/screens/SettingsScreen.tsx`

**Header Section**:
- Title: "Settings"
- Subtitle: "Configure your Edu-Sense system preferences"
- Save button (blue, top-right): "Save Changes"

**Success Notification** (appears after save):
- Green background: `bg-green-50 border-green-200`
- Text: "Settings saved successfully!"
- Auto-dismisses after 3 seconds

**Settings Grid** (grid grid-cols-1 xl:grid-cols-2):

#### 1. Camera Settings Card:
- Icon: Camera (blue)
- **Camera Selector**:
  - Dropdown with options:
    - Main Classroom Camera
    - Rear Classroom Camera
    - Side View Camera
  - Full-width select input

- **Enable Recording Toggle**:
  - Custom toggle switch
  - Label: "Enable Recording"
  - Description: "Automatically record lectures"
  - Switch colors: `peer-checked:bg-blue-600`

#### 2. Detection Settings Card:
- Icon: Sliders (purple)
- **Detection Sensitivity Slider**:
  - Range input: 0-100
  - Current value displayed: "{value}%"
  - Purple accent color
  - Help text: "Adjust how sensitive face detection should be"

- **Emotion Detection Toggle**:
  - Toggle switch
  - Label: "Emotion Detection"
  - Description: "Analyze student emotions"

#### 3. Alert Settings Card:
- Icon: Bell (orange)
- **Low Engagement Threshold Slider**:
  - Range input: 0-100
  - Current value: "{value}%"
  - Orange accent color
  - Help text: "Trigger alerts when engagement drops below this level"

- **Alert Toggles**:
  1. **Real-Time Alerts**:
     - Description: "Show live notifications"
  2. **Email Notifications**:
     - Description: "Send alerts via email"
  3. **Weekly Reports**:
     - Description: "Receive summary emails"

#### 4. Privacy & Data Card:
- Icon: Shield (green)
- **Face Blurring Toggle**:
  - Label: "Face Blurring"
  - Description: "Blur faces in recordings"

- **Data Retention Dropdown**:
  - Options:
    - 7 days
    - 30 days
    - 90 days
    - 6 months
    - 1 year

- **Privacy Notice**:
  - Blue information box: `bg-blue-50 border-blue-200`
  - Icon: Info (blue)
  - Title: "Privacy Notice"
  - Text: "All data is processed in compliance with GDPR and institutional privacy policies. Student consent is required for engagement tracking."

**System Information Card** (full width):
- **Version**: Edu-Sense v2.1.0
- **Last Updated**: February 1, 2026
- **License**: Educational Institution
- Grid layout: grid-cols-1 md:grid-cols-3

---

## Component Library

### Core Components

#### VideoPreview
**File**: `/src/app/components/VideoPreview.tsx`

**Props**:
- `isLive: boolean` - Controls active/offline state

**Features**:
- 16:9 aspect ratio container
- Background: `bg-gray-900` when active
- Displays classroom feed image (Unsplash)
- Overlays face detection boxes:
  - Border colors: green (attentive), yellow (neutral), red (confused)
  - 2px borders
  - Label above box showing emotion and attention %
  - Position and size randomized but realistic
- Simulates 3-5 faces detected
- Updates every 2 seconds
- Shows face count: "{n} faces detected"
- Legend at bottom explaining color codes
- Offline state shows VideoOff icon with message

#### EngagementChart
**File**: `/src/app/components/EngagementChart.tsx`

**Type**: Real-time area chart (Recharts)

**Features**:
- Dual metrics: Engagement (blue) and Attention (green)
- Gradient fills under lines
- Height: 300px, responsive width
- X-axis: Time (HH:MM format)
- Y-axis: 0-100% with label
- Grid lines: dashed, light gray
- Updates every 3 seconds
- Maintains last 21 data points (rolling window)
- Tooltip shows values on hover
- Smooth transitions between data points

#### EmotionDistribution
**File**: `/src/app/components/EmotionDistribution.tsx`

**Type**: Donut chart (Recharts pie chart)

**Features**:
- Inner radius: 50px, outer radius: 80px
- Height: 200px
- 4 emotion categories with colors:
  - Attentive: #10b981 (green)
  - Neutral: #f59e0b (orange)
  - Confused: #ef4444 (red)
  - Distracted: #6b7280 (gray)
- Legend list below chart
- Percentage values displayed
- Updates every 4 seconds
- Tooltip on hover

#### AlertPanel
**File**: `/src/app/components/AlertPanel.tsx`

**Props**:
- `engagementScore: number`

**Features**:
- Dynamic alerts based on engagement level
- Three alert types with distinct styling:
  - Critical (<60%): Red background, AlertTriangle icon
  - Warning (60-75%): Yellow background, AlertCircle icon
  - Success (>75%): Green background, CheckCircle icon
- Each alert displays:
  - Icon (20x20px)
  - Message text
  - Timestamp
- Alerts stack vertically with 12px spacing

#### TeachingRecommendations
**File**: `/src/app/components/TeachingRecommendations.tsx`

**Props**:
- `engagementScore: number`

**Features**:
- Gradient background: `from-blue-50 to-indigo-50`
- Blue border: `border-blue-100`
- Header with Lightbulb icon
- Dynamic recommendations (2-3 items) based on score
- Priority-based color coding:
  - High priority: `text-red-600 bg-red-50`
  - Medium priority: `text-yellow-600 bg-yellow-50`
  - Low priority: `text-green-600 bg-green-50`
- Each recommendation shows icon + text
- Recommendations change based on engagement thresholds

#### HistoricalEngagementChart
**File**: `/src/app/components/HistoricalEngagementChart.tsx`

**Type**: Historical trend chart

**Features**:
- Shows engagement data over selected time period
- Similar styling to EngagementChart
- Static historical data (no real-time updates)

#### EmotionTrendsChart
**File**: `/src/app/components/EmotionTrendsChart.tsx`

**Type**: Multi-line chart

**Features**:
- Tracks multiple emotions over time
- Different colored lines for each emotion
- Historical view (not real-time)

#### SessionComparison
**File**: `/src/app/components/SessionComparison.tsx`

**Type**: Comparison chart/table

**Features**:
- Compares metrics across different lecture sessions
- Side-by-side or overlaid visualization

#### AttentionHeatmap
**File**: `/src/app/components/AttentionHeatmap.tsx**

**Type**: Heatmap visualization

**Features**:
- Shows attention patterns by time of day
- Color-coded cells indicating engagement levels
- Grid layout representing time slots

### UI Primitive Components

The application uses Radix UI components with custom styling:

- **Buttons**: `/src/app/components/ui/button.tsx`
- **Cards**: `/src/app/components/ui/card.tsx`
- **Inputs**: `/src/app/components/ui/input.tsx`
- **Selects**: `/src/app/components/ui/select.tsx`
- **Switches**: `/src/app/components/ui/switch.tsx`
- **Sliders**: `/src/app/components/ui/slider.tsx`
- **Alerts**: `/src/app/components/ui/alert.tsx`
- **Tooltips**: `/src/app/components/ui/tooltip.tsx`
- **And many more...**

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: 1024px - 1280px (lg)
- **Large Desktop**: ≥ 1280px (xl)

### Responsive Patterns

#### Login Screen:
- **Desktop (≥1024px)**: Split-screen layout
- **Mobile (<1024px)**: Single column, logo at top

#### Dashboard Layout:
- **Desktop**: Fixed 256px sidebar + flex content area
- **Mobile**: Consider adding hamburger menu (not currently implemented)

#### Live Dashboard Grid:
- **Extra Large (≥1280px)**: 3-column grid (2-column left + 1-column right)
- **Large (1024-1280px)**: 2-column grid
- **Small (<1024px)**: Single column stack

#### Analytics Stats:
- **Extra Large (≥1280px)**: 4-column grid
- **Medium (768-1280px)**: 2-column grid
- **Small (<768px)**: Single column

#### Settings Grid:
- **Extra Large (≥1280px)**: 2-column grid
- **Small (<1280px)**: Single column stack

---

## Interactive States

### Buttons
- **Default**: Solid background color
- **Hover**: Slightly darker shade (`hover:bg-{color}-700`)
- **Active/Pressed**: Not explicitly defined (browser default)
- **Disabled**: `opacity-50 cursor-not-allowed`
- **Loading**: Shows loading text, disabled state

### Form Inputs
- **Default**: `border border-gray-300`
- **Focus**: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- **Error**: Not currently implemented (could use red border)
- **Disabled**: Not currently implemented

### Navigation Items
- **Default**: `text-gray-700 hover:bg-gray-50`
- **Active**: `bg-blue-50 text-blue-600`
- **Hover**: `hover:bg-gray-50` (inactive items)

### Toggle Switches
- **Off**: `bg-gray-200`
- **On**: `bg-blue-600`
- **Focus**: `peer-focus:ring-4 peer-focus:ring-blue-300`
- **Transition**: Smooth slide animation on toggle

### Cards
- **Default**: White background, light gray border
- **Hover**: Not explicitly defined (static cards)
- **Active**: Not explicitly defined

---

## Data Visualization Patterns

### Chart Color Scheme
- **Primary Metric** (Engagement): Blue (#3b82f6)
- **Secondary Metric** (Attention): Green (#10b981)
- **Neutral**: Yellow/Orange (#f59e0b)
- **Negative**: Red (#ef4444)
- **Inactive**: Gray (#6b7280)

### Chart Styling Conventions
- **Grid Lines**: Dashed, light gray (#e5e7eb)
- **Axis Labels**: 12px, gray-600 color
- **Tooltips**: White background, gray border, rounded corners
- **Data Points**: No dots on lines (clean area charts)
- **Gradients**: 5% opacity at top, 0% at bottom

### Real-Time Updates
- **Engagement Chart**: Every 3 seconds
- **Emotion Distribution**: Every 4 seconds
- **Face Detection**: Every 2 seconds
- **Engagement Score**: Every 3 seconds

---

## Icons

### Icon Library
**Package**: lucide-react v0.487.0

### Icon Usage Patterns
- **Size**: Typically w-5 h-5 (20x20px) for inline icons
- **Larger Icons**: w-8 h-8 (32x32px) for logos
- **Hero Icons**: w-12 h-12 or w-16 h-16 for empty states
- **Color**: Inherits text color or has explicit color class

### Icon Inventory by Context

**Navigation/UI**:
- GraduationCap (logo)
- LayoutDashboard (dashboard nav)
- BarChart3 (analytics nav)
- Settings (settings nav)
- LogOut (logout)

**Metrics/Stats**:
- Users (student count)
- CheckCircle (attentive)
- TrendingUp (engagement)
- Calendar (sessions)
- Clock (duration)

**Video/Media**:
- Video (live feed active)
- VideoOff (feed offline)
- Camera (camera settings)

**Alerts/Notifications**:
- AlertTriangle (critical alert)
- AlertCircle (warning alert)
- Bell (alert settings)
- Info (information)

**Actions**:
- Download (export)
- Save (save settings)
- Mail (email input)
- Lock (password input)

**Recommendations**:
- Lightbulb (teaching tips)
- MessageSquare (Q&A suggestions)
- Gauge (pace adjustment)

**Settings**:
- Sliders (detection settings)
- Shield (privacy settings)

---

## Accessibility Considerations

### Current Implementation
- Semantic HTML elements used throughout
- Form labels associated with inputs
- Icon-only buttons may need aria-labels (not currently implemented)
- Color contrast appears to meet WCAG guidelines for most text
- Focus states visible on interactive elements

### Recommendations for Improvement
1. Add aria-labels to icon-only buttons
2. Implement skip-to-content link
3. Add aria-live regions for real-time updates
4. Ensure all images have descriptive alt text
5. Test with screen readers
6. Add keyboard navigation for charts
7. Implement focus trap in modals (if added)
8. Add aria-describedby for form inputs with help text

---

## Performance Optimization

### Current Patterns
- React component memoization not explicitly used
- Real-time updates use setInterval (consider WebSocket in production)
- Charts re-render on data updates
- No virtual scrolling for long lists

### Recommended Optimizations
1. Use React.memo for complex chart components
2. Implement useMemo for expensive calculations
3. Add useCallback for event handlers
4. Consider virtualization for large data lists
5. Lazy load route components with React.lazy
6. Optimize images (use WebP, proper sizing)
7. Add loading skeletons for async data
8. Implement request debouncing for settings saves

---

## Future Enhancement Ideas

### Features
1. **Mobile Responsive Sidebar**: Hamburger menu for mobile devices
2. **Dark Mode**: Toggle between light/dark themes
3. **Multi-Language Support**: i18n implementation
4. **Advanced Filtering**: Date range pickers, course filters
5. **Export Options**: More formats (Excel, PNG charts)
6. **Notifications Center**: Toast notifications for alerts
7. **Help/Onboarding**: Tutorial overlays for first-time users
8. **Customizable Dashboard**: Drag-and-drop widgets
9. **Comparison Mode**: Compare multiple sessions side-by-side
10. **AI Insights**: Automated teaching insights and recommendations

### Technical Improvements
1. **State Management**: Redux or Zustand for global state
2. **API Integration**: Connect to real FastAPI backend
3. **WebSocket Connection**: True real-time data streaming
4. **Error Boundaries**: Graceful error handling
5. **Testing**: Unit tests, integration tests, E2E tests
6. **Analytics Tracking**: User behavior analytics
7. **Progressive Web App**: Offline support, installable
8. **Performance Monitoring**: Real-time performance metrics

---

## File Structure Summary

```
/src
├── /app
│   ├── App.tsx                          # Main app component
│   ├── routes.ts                        # Routing configuration
│   │
│   ├── /screens
│   │   ├── LoginScreen.tsx              # Login page
│   │   ├── LiveDashboard.tsx            # Real-time dashboard
│   │   ├── AnalyticsScreen.tsx          # Historical analytics
│   │   └── SettingsScreen.tsx           # System settings
│   │
│   └── /components
│       ├── DashboardLayout.tsx          # Main layout with sidebar
│       ├── VideoPreview.tsx             # Live video with face detection
│       ├── EngagementChart.tsx          # Real-time engagement chart
│       ├── EmotionDistribution.tsx      # Emotion pie chart
│       ├── AlertPanel.tsx               # Alert notifications
│       ├── TeachingRecommendations.tsx  # AI-powered suggestions
│       ├── HistoricalEngagementChart.tsx
│       ├── EmotionTrendsChart.tsx
│       ├── SessionComparison.tsx
│       ├── AttentionHeatmap.tsx
│       │
│       ├── /figma
│       │   └── ImageWithFallback.tsx    # Protected image component
│       │
│       └── /ui                          # Radix UI components
│           ├── button.tsx
│           ├── card.tsx
│           ├── input.tsx
│           ├── select.tsx
│           └── ... (40+ UI components)
│
└── /styles
    ├── index.css                        # Main styles
    ├── tailwind.css                     # Tailwind imports
    ├── theme.css                        # Design tokens
    └── fonts.css                        # Font imports
```

---

## Design Principles

1. **Minimalist Academic Aesthetic**: Clean, professional, no unnecessary decoration
2. **Data-First**: Visualizations are prominent and easy to understand
3. **High Readability**: Strong contrast, clear typography hierarchy
4. **Consistent Spacing**: Predictable rhythm (4px base unit)
5. **Color Meaning**: Colors convey information (green=good, red=alert)
6. **Responsive by Default**: Mobile-first thinking, desktop-optimized
7. **Real-Time Feedback**: Live updates keep users informed
8. **Contextual Help**: Descriptions and labels guide users
9. **Progressive Disclosure**: Complex settings organized in clear sections
10. **Trustworthy**: Professional appearance builds confidence

---

## Browser Support

**Recommended Browsers**:
- Chrome/Edge (90+)
- Firefox (88+)
- Safari (14+)

**Dependencies**:
- Modern JavaScript (ES6+)
- CSS Grid & Flexbox
- CSS Custom Properties
- SVG support

---

## Deployment Notes

**Build Command**: `npm run build` (Vite production build)

**Environment**:
- Node.js 18+ recommended
- Modern browser with JavaScript enabled
- Desktop-first experience (1280px+ optimal)

**Assets**:
- External images loaded from Unsplash
- Icons loaded from lucide-react package
- No custom fonts (system fonts used)

---

## Version Information

- **Application Version**: Edu-Sense v2.1.0
- **Last Updated**: February 1, 2026
- **Documentation Version**: 1.0
- **Documentation Date**: March 7, 2026

---

## Contact & Support

For implementation questions or UI/UX feedback:
- Development Team: [Your contact info]
- Design System Maintainer: [Your contact info]
- IT Support: As displayed in login screen

---

**End of Documentation**
