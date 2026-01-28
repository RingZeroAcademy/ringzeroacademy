# Font Size

## 1. Screen Size Breakpoints

Having 3 tiers keeps complexity low while covering 95% of devices.

| Tier                   | Screen Width   |
| ---------------------- | -------------- |
| Mobile                 | ≤ 640px        |
| Tablet / Small Laptop  | 641px – 1024px |
| Desktop / Large Screen | ≥ 1025px       |

---

## 2. Body / Main Text (Core Reading Content)

| Screen Size | CSS Size    |
| ----------- | ----------- |
| Mobile      | `1rem`      |
| Tablet      | `1.0625rem` |
| Desktop     | `1.125rem`  |

**Rationale**

* Mobile stays at 16px to avoid zoom fatigue.
* Desktop increases slightly to reduce eye strain during long reading sessions.

```css
body {
  font-size: 1rem;
}
```

Override at breakpoints.

---

## 3. Headings (Clear Information Hierarchy)

### H1 – Page Title

| Screen  | Size      |
| ------- | --------- |
| Mobile  | `1.75rem` |
| Tablet  | `2.25rem` |
| Desktop | `2.75rem` |

### H2 – Section Headings

| Screen  | Size       |
| ------- | ---------- |
| Mobile  | `1.375rem` |
| Tablet  | `1.75rem`  |
| Desktop | `2rem`     |

### H3 – Subsections

| Screen  | Size       |
| ------- | ---------- |
| Mobile  | `1.125rem` |
| Tablet  | `1.375rem` |
| Desktop | `1.5rem`   |

### H4 – Minor Headings / Labels

| Screen | Size              |
| ------ | ----------------- |
| All    | `1rem`–`1.125rem` |

```css
h1 { font-size: 2.75rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.125rem; }
```

Scale down at smaller breakpoints.

---

## 4. Secondary Text (Meta Information)

Used for:

* Timestamps
* Author info
* Notes
* Descriptions under headings

| Screen  | Size        |
| ------- | ----------- |
| Mobile  | `0.875rem`  |
| Tablet  | `0.9375rem` |
| Desktop | `1rem`      |

This text should be **visually subordinate**, not hard to read.

```css
.secondary-text {
  font-size: 0.875rem;
}
```

---

## 5. Code Blocks and Inline Code

| Screen  | Size        |
| ------- | ----------- |
| Mobile  | `0.875rem`  |
| Tablet  | `0.9375rem` |
| Desktop | `1rem`      |

```css
code, pre {
  font-size: 0.9375rem;
}
```

---

## 6. Buttons (Action-Oriented Text)

| Screen  | Size        |
| ------- | ----------- |
| Mobile  | `0.875rem`  |
| Tablet  | `0.9375rem` |
| Desktop | `1rem`      |

Use **font-weight**, not size, to increase emphasis.

```css
button {
  font-size: 0.9375rem;
  font-weight: 600;
}
```

---

## 7. Navigation / Menu Text

| Screen  | Size        |
| ------- | ----------- |
| Mobile  | `0.875rem`  |
| Tablet  | `0.9375rem` |
| Desktop | `1rem`      |

Keep navigation compact to preserve content density.

---

## 8. Footnotes / Legal / Low-Priority Text

| Screen | Size                  |
| ------ | --------------------- |
| All    | `0.75rem`–`0.8125rem` |

```css
small {
  font-size: 0.8125rem;
}
```

---

## 9. Strategic Guidance (Direct and Practical)

* Do **not** shrink body text to fit content. Adjust layout instead.
* Use **line-height (1.5–1.7)** to improve comprehension.
* Avoid excessive heading levels. Three is enough for tutorials.
* Consistency beats creativity here.

---
