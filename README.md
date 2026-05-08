# Bright Future Academy Website

Basic static school website MVP with four pages:
- Home
- About
- Admissions
- Contact

## Local Preview

Open `index.html` directly in a browser, or run a static server in this folder.

## Deployment

### Netlify
1. Create a new Netlify site from this folder/repository.
2. Build command: none
3. Publish directory: `.`
4. Keep the contact form as-is (`data-netlify="true"` + hidden `form-name`).
5. Add custom domain and enable HTTPS in Netlify Domain settings.
6. `netlify.toml` is included for publish defaults.

### Vercel
1. Import the project.
2. Framework preset: Other
3. Output directory: `.`
4. For form handling, keep Netlify/Formspree or migrate to serverless endpoint.
5. `vercel.json` is included with clean URL settings.

### GitHub Pages
1. Push contents to a repository.
2. Enable Pages from default branch root.
3. If using form capture, use Formspree or another external form service.

## QA Checklist
- Verify navigation links on all pages.
- Verify responsive layout on mobile widths.
- Verify keyboard tab order and visible focus state.
- Verify contact form required-field validation.
- Verify success state by submitting and confirming `?submitted=true` message.
