# Next.js 15 Client-Side Navigation Issue

This repository demonstrates an unexpected behavior in a Next.js 15 application involving `useEffect`, `setInterval`, and client-side navigation.  The counter in the '/about' page continues to increment even after navigating away from and back to the page.

## Bug Description

A simple counter implemented using `useState` and `setInterval` within a `useEffect` hook in the '/about' page. Navigating away from and back to this page results in the counter continuing its increment, ignoring the cleanup function in the `useEffect` hook.

## Reproduction

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Navigate to `/` (home page).
6. Navigate back to `/about`. Observe that the counter continues from where it left off, instead of restarting from 0.

## Solution
The solution involves ensuring proper cleanup of the interval in the `useEffect` hook. The provided solution clarifies and enhances the cleanup process to guarantee accurate counter behavior during client-side navigation within the Next.js application.
