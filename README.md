#  AXIOM Clone Task - Eterna Labs

A high-performance, pixel-perfect replica of the **Axiom Trade Pulse** interface. Built with **Next.js 14**, **Redux Toolkit**, and **Tailwind CSS**, featuring real-time market data simulation and a strict Atomic Design architecture.

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)

 **Note regarding End-Semester Examinations**
>
> I am currently in the middle of my **end-semester examinations at IIT Kharagpur**. Due to strict academic time constraints, I was unable to implement every peripheral interaction feature.
>
> However, I prioritized the **Core Architectural Requirements**:
> * **Performance:** Extensive use of `React.memo` and optimized re-renders.
> * **Structure:** Strict Atomic Design (Atoms, Molecules, Organisms).
> * **Visual Fidelity:** Pixel-perfect matching of the Axiom dark UI.
---

## Project Previews

### Desktop Version

<img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/8cdd7da0-f91e-4737-b8e9-b593697977c3" />


*Full 3-column layout with real-time updates and interactive hover states.*

### Mobile Version
<img width="453" height="736" alt="image" src="https://github.com/user-attachments/assets/3d067215-02b1-448e-91e0-1a40ecf51ae5" />


*Optimized tab-based navigation with smooth transitions and touch-friendly controls.*

---

## Live Demo & Walkthrough

| Type | Link |
|:-----|:-----|
| **Video Walkthrough** | **[Watch on YouTube](https://youtu.be/1mfbM0K5yCU)** |
| **Live Deployment** | **[View on Vercel](https://eterna-labs-task.vercel.app/pulse)** |

---

##  Features Implemented

### 1. Core Pulse Interface
* **Responsive Hybrid Layout:** Seamlessly switches from a tab-based view on mobile (New Pairs / Final Stretch / Migrated) to a full 3-column grid on desktop.
* **Real-Time Data Simulation:** Custom `MockWebSocketService` pushes random price, volume, and market cap updates.
* **Visual Tic Updates:** Prices flash **Green** (up) or **Red** (down) in real-time without page reloads.
* **Discovery Engine:**
    * **Sorting:** Sort by Time, Market Cap, Volume, Price Change, and Holders (Asc/Desc).
    * **Filtering:** Functional P1/P2/P3 toggles for each column.

### 2. Complex UI & Interactions
* **Interactive Token Cards:**
    * Custom `horizontalPulse` hover animation.
    * **Bonding Curve:** Dynamic percentage badge with visual indicators.
    * **Smart Tooltips:** Radix UI tooltips for "Sniper Count", "Dev Cooked", and "Team Holding".
* **Advanced Navigation:**
    * **Sticky Header:** Features a `backdrop-blur-[10px]` glassmorphism effect.
    * **Bouncy Dropdowns:** Custom CSS animations for the Chain selector menu.
* **Dynamic Footer:**
    * Scrollable bottom bar for mobile.
    * **Live Connection Status:** Indicates WebSocket state (Connected/Connecting/Disconnected).

### 3. Technical Excellence
* **Atomic Design Architecture:** Codebase structured into `atoms`, `molecules`, `organisms`, and `templates` for maximum reusability.
* **State Management:**
    * **Redux Toolkit:** Handles high-frequency global state (WebSocket data, filters).
    * **React Query:** Efficient initial data fetching and caching.
* **Performance:**
    * **Memoization:** `TokenCard`, `AnimatedNumber`, and `MetricsRow` are memoized to prevent layout thrashing during price updates.
    * **CLS Optimization:** Implemented `Skeleton` and `Shimmer` loaders to maintain layout stability during load.

---

## Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS + Custom Animations
* **State:** Redux Toolkit + React Query
* **Components:** Radix UI (Dialogs, Tooltips, Popovers)
* **Icons:** Lucide React
* **Fonts:** Geist Sans & Geist Mono

---

## Architecture (Atomic Design)

The project follows a strict component hierarchy to ensure scalability:

```
src/
├── components/
│   ├── atoms/       # Base units (Badge, Button, AnimatedNumber, Skeleton)
│   ├── molecules/   # Compound units (TokenCard, MetricsRow, FilterChip)
│   ├── organisms/   # Complex sections (TokenColumn, PulseFooter)
│   └── template/    # Layout wrappers (Header, PulseLayout)
├── lib/
│   ├── redux/       # Global state slices
│   ├── websocket/   # Mock socket service
│   └── utils.ts     # Helpers
└── app/             # Next.js routes
```

---

##  Getting Started

### Clone the repository:

```bash
git clone https://github.com/jeevan10017/Eterna-Labs-Task.git
cd axiom-pulse-replica
```

### Install dependencies:

```bash
npm install
# or
yarn install
```

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Author

**Jeevan Kumar Korra**  
IIT Kharagpur
22MF10017

---
