# Install this design into your existing repository

Your existing repository folder is:

`C:\Users\antho\Documents\antchristiana-site`

1. Download and extract `antchristiana-site-starter.zip`.
2. Open the extracted folder and your existing repository folder side by side.
3. Copy **everything inside** the extracted folder into the existing repository folder. Choose **Replace the files in the destination** if Windows asks.
4. Do not delete the existing repository folder itself. Its Git connection is stored there.
5. In PowerShell, run:

   ```powershell
   cd "$HOME\Documents\antchristiana-site"
   npm.cmd run dev
   ```

6. Open the local address Astro prints, usually `http://localhost:4321/antchristiana-site/`.
7. Stop the preview with `Ctrl+C`.
8. In GitHub Desktop, enter the summary `Build graphite site and add Pages CMS`, click **Commit to main**, then **Push origin**.

## Turn on GitHub Pages

On GitHub, open the repository and go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. The included workflow will deploy the site after each push.

## Edit with Pages CMS

Open `https://app.pagescms.org`, sign in with GitHub, install/authorize the Pages CMS GitHub app when prompted, and select `achristiana36/antchristiana-site`. The Writing, Creative work, Research, Teaching, and Site settings editors are configured in `.pages.yml`.

The included entries are sample material so the design has something to display. Replace or delete them in Pages CMS once you begin adding your real work.

## Connect antchristiana.com later

First confirm that the temporary GitHub Pages address works. Then add a file named `CNAME` inside `public` containing only:

```text
antchristiana.com
```

Change `astro.config.mjs` to use `site: 'https://antchristiana.com'` and remove the `base` line. Your Hostinger DNS records will also need to point to GitHub Pages.
