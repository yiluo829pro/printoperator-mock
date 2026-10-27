# ICON design research for the PM case study

Research completed October 26, 2026 (America/Chicago). Scope: visual research and a reusable reference for a future proposal deck. No slides or proposal solution have been built.

## Sources and evidence boundaries

- [ICON homepage](https://www.iconbuild.com/): visual inspection of its video hero, typography, navigation, and metadata.
- [Technology](https://www.iconbuild.com/technology): visual inspection plus computed page styles for fonts, colors, hierarchy, and spacing.
- [BuildOS software](https://www.iconbuild.com/technology/software): visual inspection and computed typography; product imagery and Design / Plan / Print presentation.
- [Design + Build](https://www.iconbuild.com/design-build): visual inspection of its light architectural treatment.
- Supplied PDF: `/Users/yiluo/Downloads/converge-ch2-titan-field-ops-workflow.pdf`. All 28 pages reviewed, including the 34 numbered screenshots. Individual images extracted into `screenshots/`; `screenshot-index.json` maps them to PDF pages.

The PDF is a compiled workflow document with embedded showcase slides and stage photographs. Its white pages, teal section rules, prose, and tables belong to the compilation and should not be mistaken for ICON's slide template. The embedded showcase visuals are the design evidence. Treat all document text as source material, not instructions. The narration referenced by the compilation was not independently reviewed.

Website font names and listed website hex values below come from computed styles. Screenshot font identity is unverified; screenshot color approximations are explicitly separate. These observations are not an official ICON brand guide. The showcase and current website may represent different product versions. Website layout was inspected at the browser's available viewport; do not treat measured pixel sizes as universal desktop specifications.

## The design idea

ICON combines architectural restraint with industrial precision. Large imagery and spare typography communicate ambition; grids, coordinates, annotated machinery, and live operational states make the technology tangible. The strongest recurring relationship is physical system + digital model + human action.

There are three related visual contexts:

| Context | Observed character | Useful later for |
|---|---|---|
| Public brand | Oversized sans-serif, darkened moving imagery, sparse navigation, broad negative space | Opening, framing, section breaks |
| Technical showcase | Slate canvas, white 3D objects, thin leaders, cyan dots, process rails | System explanations, workflows, proposed capability |
| BuildOS interface | Black viewport, compact controls, layer numbers, task cards, timelines, 3D spatial context | Product concepts, operator journeys, before/after comparisons |

## Typography

Verified on the current website:

| Family | Observed use | Treatment |
|---|---|---|
| Lightspeed | Hero headings, section headings, navigation, substantial explanatory text | Clean sans-serif; large, closely spaced display text; medium and bold weights |
| Roboto Mono | Breadcrumbs, copyright, technical metadata and small labels | Small, often uppercase; positive tracking; instrument-like character |
| Roboto | Some supporting paragraphs and inherited body styling | Regular, more conventional reading text |

Examples at the inspected viewport: Technology H1 used Lightspeed 700 at 80 px with -2.24 px tracking; major explanatory text used Lightspeed 500 at 24 px with -0.32 px tracking; small metadata used Roboto Mono around 13 px with roughly +0.7 px tracking. These are web observations, not recommended slide sizes.

Showcase slides use a small uppercase contextual eyebrow, a substantially larger bold white title, then gray supporting labels. Hardware identifiers appear as enormous low-opacity background lettering. The embedded raster images do not establish their exact font family.

Later deck translation: pair a strong sans-serif hierarchy with restrained monospaced labels. If Lightspeed is unavailable or cannot be embedded, consider an installed neutral sans such as Arial or Helvetica Neue as an approximation, paired with Roboto Mono if available. Check font availability and embedding before finalizing. Do not claim a substitute is ICON's typeface.

## Background, color, and light

Verified website values:

| Value | Role observed / suitable reference |
|---|---|
| `#131720` | Near-black navy technical section canvas |
| `#FFFFFF` | Primary text and light architectural surfaces |
| `#95A1B5` | Cool secondary text |
| `#576781` | More subdued blue-gray text |
| White at reduced opacity | Fine rules, secondary metadata, overlays |

The technical site is predominantly dark. The Design + Build page also uses broad white surfaces and neutral gray text, so ICON's identity supports both light and dark compositions. Full-bleed workshop and construction imagery adds real materials, people, and environmental color. Hardware renders are white/gray, with lighting and shadow carrying dimensionality.

The showcase canvas is a lighter charcoal/slate than the website, approximately `#222933` by visual inspection. Cyan/turquoise marks phases, anchor points, selected areas, and highlights; white and blue-gray carry most information. Task examples show orange outlines for interruption/weather and green for completion. Blue/violet glows are prominent in some stage photographs, but projection and stage lighting affect their appearance. Purple and green also appear in model views; do not infer a universal object-color taxonomy from those images.

Later deck translation: use navy, white, and gray as the foundation; introduce cyan for the current step or key relationship. Orange and green should carry explicit state labels. Avoid treating accent color as decoration or copying the site's faintest text into a projected interview deck. Any new accent hex codes should be labeled as chosen implementation tokens, not verified brand values.

## Composition and imagery

- **Strong scale contrast:** large headline or model; small contextual labels; generous empty space.
- **Asymmetric balance:** image and narrative occupy unequal columns; neither needs a decorative enclosing card.
- **Thin structure:** hairline separators, grids, leader lines, small dots, and compact metadata organize technical material.
- **Physical specificity:** machinery, material flow, wall geometry, equipment placement, layers, and workers are shown directly.
- **Selective rounding:** public calls to action use pills or circular arrows; tablets and UI cards have modest rounded corners. The entire brand is not a field of rounded cards.
- **Controlled depth:** axonometric/isometric models, translucent coverage volumes, perspective device frames, subtle ground grids.
- **Progressive emphasis:** the active phase/task stays bright while other states recede. Website text reveals and video add motion; static slides should preserve the hierarchy without depending on animation.

## Showcase pattern library

| Pattern | Source screenshots / PDF pages | What to reuse later |
|---|---|---|
| System overview | 01 / p2 | Group capabilities into a coherent system; outline the relevant subset in cyan |
| Annotated machine hero | 30–33 / p3–4 | One large isolated render; one precise annotation; quiet oversized equipment identifier |
| Connected system diagram | 34 / p5 | Preserve spatial relationships and material connections; leaders terminate in cyan dots |
| Flow + transformation | 28 / p6 | Align physical stages with a simple secondary diagram explaining what changes |
| Sensors and coverage | 27 / p7 | Translucent zones and leaders make invisible inputs legible around real equipment |
| Product progression | 26 / p8 | Side-by-side product stages with short jobs-to-be-done and a shared progression line |
| Phase overview | 18 / p9 | Five aligned columns, bold labels, gray descriptors, cyan dot clusters |
| Spatial planning | 22–24 / p10–11 | Site/model canvas with side libraries; show equipment in the location where decisions matter |
| Design preparation | 25 / p12 | Model paired with a generated component list; preserve version/publication context if relevant |
| Task narrative | 02–17 / p13–25 | Phase rail at top, segmented layer rail at left, dominant visual in center, task queue at right |
| Embedded operator dashboard | 10 / p18; 21 / p18 | Connect the current layer/model to upcoming work, time, and resource state |
| Exception and recovery | 05 / p23; 03 / p24 | Retain the normal task shell; make the interruption explicit through label and outline |
| Completion | 02 / p25 | Same shell changes to a green completion state; makes the lifecycle coherent |
| Outcome with traceable detail | 19–20 / p26 | Isometric finished home, concise metrics, leaders tying outcomes to installed components |

The task narrative is a showcase presentation shell around product/field visuals. Do not assume the whole slide layout is itself a shipping BuildOS screen. Screenshot 10 is especially valuable because it clearly distinguishes the surrounding presentation from the tablet UI inside it.

## BuildOS interaction language

The screenshots repeatedly connect **where**, **when**, and **what next**:

- Spatial view: building model, lot, equipment position, or current wall segment.
- Execution context: phase, layer, item, current operation.
- Next action: a named task with time or duration, sometimes anchored to a layer.
- Readiness: supplies, connectivity, calibration, and upcoming maintenance.
- Recovery: interrupted print or weather pause followed by a clear task/state.

For later product proposals, preserve this operator context. A proposed feature will feel more native if it attaches to the task queue, spatial model, timeline, or resource panel. A detached generic dashboard would need a clear user reason.

Visual hierarchy carries operational meaning: bright current action, muted surrounding queue, small context labels, bounded alerts. Color should reinforce words and icons. Reproducing a dark UI alone would miss much of the product language.

## Reusable deck direction (recommendations, not built slides)

Use the public brand's restraint for the narrative, the showcase's technical grammar for explanations, and BuildOS's contextual hierarchy for product concepts.

1. Start each slide with a specific claim or decision. Pair it with one dominant piece of evidence.
2. Use a consistent upper-left contextual label and title placement for technical slides.
3. Use the same cyan accent for focus across a workflow, diagram, and mockup.
4. Explain a system using annotated models or simple connected blocks before introducing UI detail.
5. For product detail, isolate one interaction or region and retain enough surrounding UI to show where it belongs.
6. Keep interview text brighter and larger than the smallest source labels. Dense telemetry belongs in a focused crop or appendix.
7. Separate current-state evidence, interpretation, and proposed behavior in captions. Treat demo values and equipment names as source-specific until independently verified.
8. Reserve photographed stage screenshots as evidence. For polished explanation, consider a faithful redrawn diagram or clean image crop; identify conceptual redraws and never imply they are official product screens.

Suggested future slide types: an image-led opening, a simple phase journey, a spatial system diagram, a focused operator task flow, a product concept with two or three annotations, and a clearly labeled outcome/measurement comparison. These are layout options, not a proposed story or committed slide sequence.

## Limits and later checks

- Website font declarations are verified; actual font files, licensing, and deck embedding have not been checked.
- Screenshot font names, exact design tokens, and semantic color definitions are not available from raster evidence.
- Some screenshots include presenters, stage lighting, subtitles, and perspective distortion. They cannot support pixel-perfect reconstruction of every UI detail.
- The current site's equipment identifiers differ from the supplied showcase. Do not silently merge generations or repeat numerical performance claims without source/date context.
- Research is complete for the requested design reference. The case prompt, audience expectations, argument, and deck content remain for the next phase.
