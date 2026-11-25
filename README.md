# Lokesh Sawai: Portfolio

A single-page personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Lucide icons**.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production check before deploying:

```bash
npm run build
npm run start
```

## Edit your content

Everything you see on the site comes from **`content/site.ts`**. You rarely need to touch a component.

| To change | Edit in `content/site.ts` |
| --- | --- |
| Name, role, SEO title and description | `site` |
| Site URL (used for social previews) | `site.url` |
| Profile photo | Put `photo.jpg` in `public/`, set `site.photo = "/photo.jpg"` |
| Hero text | `hero` |
| About text, goal, quick facts | `about` |
| Education timeline | `education` |
| Skills | `skills` |
| Projects (add GitHub / live links) | `projects` |
| Internships, volunteering, leadership | `experience` |
| Achievements, certifications | `achievements`, `certifications` |
| Interests | `interests` |
| Email, phone, LinkedIn, GitHub | `contact` |

### Placeholders to replace

- **Photo**: a monogram is shown until you set `site.photo`.
- **LinkedIn and GitHub** (`contact`): show "Coming soon" until you add URLs.
- **Projects**: your resume listed none. The first card is this portfolio itself (add its GitHub and live links). The dashed card is a template; replace or delete it.
- **Experience**: the second entry is a template; replace or delete it.
- **`site.url`**: set to your real Vercel URL after deploying.

## Update your resume

Replace `public/resume.pdf` with a new file of the same name. The "Download Resume" buttons use it.

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub and click **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically; keep the default settings and click **Deploy**.
4. When it finishes you get a URL like `your-project.vercel.app`. Set it as `site.url` in `content/site.ts`, commit and push. Vercel redeploys on every push.

Optional: add a custom domain under **Project → Settings → Domains**.

## Project structure

```
app/            layout (fonts, SEO metadata) and page
components/     one component per section, plus Navbar, Reveal, Section
content/        site.ts, all editable content
public/         resume.pdf (and your photo)
```
