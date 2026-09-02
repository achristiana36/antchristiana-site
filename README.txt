SAFE UPDATE INSTRUCTIONS

This archive contains the complete corrected site, but it intentionally does
not contain the hidden .git folder, node_modules, or generated build folders.
Do not delete or replace your existing repository folder.

1. Make a backup commit in the existing repository:
   git add .
   git commit -m "Backup before site update"

2. In the existing repository, delete these obsolete files (a drag-and-drop
   merge cannot remove files that no longer belong in the site):
   src/content/teaching/fibonacci-music-sonification.md
   src/content/research/fibonacci-music-sonification.md
   src/pages/creative/index.astro
   src/pages/creative/[...slug].astro

3. Extract this archive into a separate temporary location.

4. Open the extracted antchristiana-site folder, select its contents, and
   drag them into your existing antchristiana-site repository folder. Choose
   "Replace the files in the destination" when Windows asks. Merge into the
   existing folder; do not delete and recreate that folder. This preserves
   the existing hidden .git folder and your installed dependencies.

5. From the existing repository folder, run:
   npm.cmd install
   npm.cmd run build
   npm.cmd run dev

Fibonacci Music & Sonification now lives in Writing & Projects. The homepage
Selected section contains Yang-Baxter, Gram Determinants, and Knots &
Invariants in that order.
