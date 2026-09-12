# Brewtanist — editing and maintenance

## Owner entry points
- Website: https://pumplcrs-hub.github.io/brewtanist/
- Thai editing guide: https://pumplcrs-hub.github.io/brewtanist/admin/
- Content editor: https://app.pagescms.org/

First use requires the owner to sign in to Pages CMS with GitHub and grant its GitHub App access to this repository. ChatGPT's GitHub connection does not grant Pages CMS access. Select only this repository, not all repositories. Do not paste credentials into chat or commit tokens.

## Architecture
- Jekyll reads `_data/brewtanist/*.json` and renders `brewtanist/index.html` on the existing GitHub Pages build.
- `.pages.yml` defines seven Thai-labeled forms and a media library.
- Text is HTML-escaped by Liquid. External link output accepts HTTPS or local absolute paths only.
- Production content and JSON-LD are generated as HTML; website visitors do not need client-side JavaScript to read them.
- Images are served from `/brewtanist/assets/`. Do not hotlink private Drive URLs.
- Google Fonts are loaded externally. No font binaries are included.
- Save to `main` publishes through the existing Pages deployment. There is no independent draft system or one-click WYSIWYG live preview in this configuration.
- No checkout, user accounts, payment collection or analytics trackers were added.

## Content
`home.json`: hero, story, visit; optional `hero_image_side` = `left` or `right` (default).
`settings.json`: business info, hours, social links and SEO. Opening-hour FAQ and JSON-LD use the same values. `days` must match the human-readable `opening_days` label. The optional legacy `phone_link` key is unused; the call link is derived from `phone`.
`coffee.json`: menu/category cards; `products.json`: product renders; `roastery.json`: roasting narrative with optional real photo; `gallery.json`: image list; `faq.json`: additional questions.

Content defaults were adapted from the previous website and the owner's confirmed cash/PromptPay/QR payment information. Existing blend tasting profiles were carried over, not revalidated against live stock. The prior social collage remains in the gallery list with visibility off, and can be re-enabled. No roasting-process photo has been invented or substituted.

## Editing images
Use the CMS image picker to upload or reuse files. Do not delete an image used by another section. Use `position` / image position fields to change crop focus: center/top/bottom/left/right. Product renders use contain rather than cover. Uploaded images are public; only upload approved brand assets.

## Rollback
Pre-redesign snapshot: branch `backup/brewtanist-before-cms-20260912`, commit `eaa0bf79085471f9923b2f98136d204620d3325d`.
Prefer reverting only the affected content file through a new commit. Do not force-push or delete the repository. Root index and original assets were left in place.

## Legacy workflow caution
`.github/workflows/deploy-exact.yml` is the pre-existing ZIP mirror workflow. It only runs when that file changes and can replace repository contents with an older ZIP. Do not edit or rerun it for routine content work. It was left unchanged in this update.

## Verify after saving
Check the latest `pages build and deployment` run, load `/brewtanist/`, inspect the changed section, verify image paths, mobile layout, and Google Maps/phone/Shopee links. Pages CMS owner login and image-upload flow must be completed/tested in the owner's browser.

Docs: https://pagescms.org/docs/quick-start/ ; https://pagescms.org/docs/configuration/ ; https://jekyllrb.com/docs/datafiles/
