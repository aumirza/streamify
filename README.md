# Streamify

Dashboard to analyse the data of music streaming.

## Directory Structure

```bash

├── public/ # Static assets (e.g., images, favicon)
├── src/
│ ├── __test__/
│ ├── assets/
│ ├── components/ # Reusable components
│ │ ├── __test__/ # Test related to components
│ │ │ └── InfoCard.test.tsx
│ │ ├── ui/ # Reusable UI components
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ ├── chart.tsx
│ │ │ ├── home.tsx
│ │ │ ├── input.tsx
│ │ │ └── (......)
│ │ │
│ │ ├── Header.tsx
│ │ ├── InfoCard.tsx
│ │ ├── LoadingSpinner.tsx
│ │ ├── RevenueChart.tsx
│ │ ├── UserChart.tsx
│ │ └── (.......)
│ │
│ ├── features/
│ │
│ ├── hooks/ # Custom hooks
│ │ ├── use-mobile.tsx
│ │ ├── useBreadCrumb.tsx
│ │ └── (........)
│ │
│ ├── lib/
│ │ └── utils.ts
│ │
│ ├── pages/ # Page-level components
│ │ ├── Home.tsx # Main dashboard page
│ │ └── Streams.tsx # Streams analytics page
│ │
│ ├── router/ #
│ │ └── AppRoutes.tsx
│ │
│ ├── server/ # Fake API server
│ │ └── index.ts # MirageJS setup
│ │
│ ├── services/
│ │ ├── anlyticsApi.ts
│ │ ├── streamsApi.ts
│ │ └── usersApi.ts
│ │
│ ├── store/ # Redux store configuration
│ │ └── index.ts
│ │
│ ├── types/
│ │ ├── breadcrumb.d.ts
│ │ └── stream.d.ts
│ │
│ ├── utils/ # Utility functions
│ │
│ ├── App.tsx # Root component
│ ├── index.css # Tailwind styles
│ ├── main.tsx # React entry point
│ ├── setupTests.ts
│ └── vite-env.d.ts
│
├── README.md
├── index.html
├── components.json
├── eslint.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

# About

- This is streamify dashboard app to view and analyse music streams
- Buit using React with vite.

# It uses:

- **Redux toolit** for state management.
- **RTK query** for querying / data fetching.
- **React router** for routing.
- **Motion** for animation.
- **Recharts** for charts.
- **Shadcn** for integrating components.
- **Tailwind** for styling.
- **React testing Library** for component testing.
- **Vitest** for test runner and and testing framework.
- **MirageJs** for mocking api or data source.
