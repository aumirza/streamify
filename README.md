# Streamify

## Directory Structure

streamify-dashboard/
│── public/ # Static assets (e.g., images, favicon)
│── src/
│ ├── api/ # API layer using RTK Query
│ │ ├── apiSlice.js # RTK Query base API setup
│ │ ├── streamsApi.js # API endpoints for streams
│ │ ├── usersApi.js # API endpoints for users
│ │
│ ├── app/ # Redux store configuration
│ │ ├── store.js # Root store configuration
│ │
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Sidebar.jsx
│ │ ├── MetricsCard.jsx # Cards showing key stats
│ │ ├── Chart.jsx # Wrapper for different charts
│ │ ├── Table.jsx # Reusable table component
│ │
│ ├── features/ # Redux slices and related logic
│ │ ├── streams/ # Stream-related Redux logic
│ │ │ ├── streamsSlice.js # Slice for streams
│ │ │ ├── StreamsTable.jsx # Streams table component
│ │ ├── users/ # User-related Redux logic
│ │ │ ├── usersSlice.js # Slice for users
│ │ │ ├── UsersList.jsx # Users list component
│ │
│ ├── hooks/ # Custom hooks for fetching data
│ │ ├── useFetchStreams.js
│ │ ├── useFetchUsers.js
│ │
│ ├── mirage/ # Fake API server using MirageJS
│ │ ├── server.js # MirageJS setup
│ │ ├── factories.js # Mirage factories for generating data
│ │ ├── routes.js # API routes for MirageJS
│ │ ├── seeds.js # Initial data seeding for MirageJS
│ │
│ ├── pages/ # Page-level components
│ │ ├── Dashboard.jsx # Main dashboard page
│ │ ├── Streams.jsx # Streams analytics page
│ │ ├── Users.jsx # Users analytics page
│ │
│ ├── styles/ # Global styles and themes
│ │ ├── globals.css # Tailwind or custom styles
│ │
│ ├── utils/ # Utility functions
│ │ ├── formatDate.js # Function to format dates
│ │ ├── calculateMetrics.js # Helper for dashboard calculations
│ │
│ ├── App.jsx # Root component
│ ├── main.jsx # React entry point
│ ├── config.js # App configuration (e.g., API base URL)
│
├── .gitignore
├── package.json
├── README.md
