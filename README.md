This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes on implementation
- Icons are incorrect, as for speed I used https://react-icons.github.io/react-icons/
- For speed I used `create-next-app`. I have not removed much of the default install of React/Next.js created with `create-next-app`
- Individual project cards and other page elements could be separate components. As it is ProjectList and ToggleView are the only two I created.
- Intentional lack of  alt text on images in cards as images are treated as deconration not content in this implementation.

## Assumptions



## Todo:
- [] Add <section> for accessbility in cards
- [] Dividing line missing below elements in mobile view
- [] Font sizing and line-height to match figma designs
- [] Image ratios to match figma designs
- [] Make images responsive
- [] Replace icons with designed icons
- [] Add header to page
- [] bug: fix focus styles
- [x] bug: misaligned progress bar in list view, add aria role