# Color Palette

## Core Philosophy

* **Surfaces** → small lightness differences (subtle contrast)
* **Text** → high contrast (readability)
* **Accent** → strong contrast (attention)
* **Borders** → barely visible
* **States** → systematic (hover, active, disabled)

```
Background → Surfaces → Borders → Text → Accent
(low contrast)                      (high contrast)
```

---

## Surface Colors (Layout & Containers)

These are “slightly brighter than background” variants.

### Background (base)

```
--bg-0: #080f18
```

Use for:

* main page background
* deepest layer

### Sidebar / Primary surface

```
--surface-1: #0f1b26
```

Use for:

* sidebar
* top navigation bar
* main panels

Why: subtle elevation above background.

### Cards / Panels / Sections

```
--surface-2: #132433
```

Use for:

* cards
* modals
* dropdowns
* content blocks

### Elevated surface (dialogs, popovers)

```
--surface-3: #172c3d
```

Use for:

* modals
* popovers
* floating UI

---

## Border Colors

Borders must be subtle, not loud.

### Default border

```
--border-1: #1c3242
```

Use for:

* card borders
* input borders
* sidebar separators

### Strong border (focus / emphasis)

```
--border-2: #274a5f
```

Use for:

* focused inputs
* active panels
* selected items

---

## Text Colors

### Primary text

```
--text-1: #e6f1f7
```

Use for:

* headings
* main content

High contrast on #080f18.

### Secondary text

```
--text-2: #a9c0cf
```

Use for:

* descriptions
* labels
* metadata

### Muted text

```
--text-3: #6f8fa3
```

Use for:

* placeholders
* disabled text
* hints

---

## Accent System

Accent:

```
--accent: #0dcaf0
```

### Accent hover (slightly brighter)

```
--accent-hover: #2dd6f5
```

### Accent active (slightly darker)

```
--accent-active: #0aa2c0
```

Use for:

* primary buttons
* links
* highlights
* toggles
* progress bars

### Accent subtle (background tint)

```
--accent-soft: rgba(13, 202, 240, 0.12)
```

Use for:

* selected rows
* badges
* hover backgrounds

---

## Semantic Colors (Status States)

These are tuned for dark UI.

### Success

```
--success: #2ecc71
```

### Warning

```
--warning: #f1c40f
```

### Error

```
--danger: #e74c3c
```

### Info (aligned with the accent)

```
--info: #0dcaf0
```

Usage:

* alerts
* validation
* badges
* notifications

---

## Button Color System

### Primary button

```
background: #0dcaf0
text: #06202a
```

### Secondary button

```
background: #132433
text: #e6f1f7
border: #1c3242
```

### Ghost button

```
background: transparent
text: #a9c0cf
hover background: #0f1b26
```

---
