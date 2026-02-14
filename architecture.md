# RingZeroAcademy Architecture

## 1. Overview

This platform will primarily deliver operating system development tutorials.
Most pages will consist of instructional content written in Markdown and rendered as structured HTML.

Core requirements:

* Deliver tutorial content efficiently.
* Support user accounts and paid plans in the future.
* Maintain clean repository organization.
* Avoid unnecessary architectural complexity.

Two architectural approaches were evaluated:

1. Modern Single Page Application (SPA) with REST API backend
2. Django server-rendered architecture (MVC pattern)

This document explains both approaches and justifies the selected solution.

---

## 2. Option 1: Modern SPA Architecture

### Description

In a modern SPA architecture:

* The frontend is a separate application (e.g., React, Vue).
* The backend (Django) acts as a REST API.
* The backend returns JSON data only.
* The frontend handles routing and page rendering in the browser.

Flow:

```
Browser → Frontend (SPA) → REST API → Backend → Database
```

### Repository Structure

Typically:

```
os-backend/
os-frontend/
os-tutorials/
```

Or a monorepo with logical separation:

```
/backend
/frontend
```

### Advantages

* Clear separation of concerns.
* Highly interactive user interfaces.
* Independent frontend and backend deployment.
* Suitable for large teams.

### Disadvantages

* Increased architectural complexity.
* Requires token-based authentication handling.
* Requires CORS configuration.
* Requires multiple deployment pipelines.
* Higher maintenance overhead.
* SEO optimization requires additional configuration.
* More JavaScript execution in the browser.

### Relevance to This Platform

This platform will primarily serve tutorial pages. These pages:

* Do not require real-time updates.
* Do not require heavy client-side state management.
* Do not require dynamic UI interactions.
* Do not require complex frontend logic.

Since the majority of pages are static tutorial content, the benefits of a modern SPA architecture do not justify its complexity.

For this reason, the modern SPA approach is not suitable for the current requirements.

---

## 3. Option 2: Server-Rendered Architecture (Selected)

### Description

In the Django rendering model:

* Django handles routing.
* Django renders HTML using templates.
* Django serves static assets (CSS, JavaScript, images).
* The browser receives fully rendered HTML pages.

Flow:

```
Browser → Django → Database / Markdown Files → Rendered HTML → Browser
```

This follows the traditional MVC pattern:

* Model: Database layer.
* View: Django view logic.
* Template: HTML rendering layer.

### Repository Structure

A single repository will contain both backend and frontend code:

```
os-website/
   manage.py
   /apps
   /templates
   /static
   /settings
```

Frontend assets are stored inside the Django project:

* HTML templates → `/templates`
* CSS, JavaScript → `/static`

There is no separate frontend repository.

---

## 4. Tutorial Content Management

Tutorials will be stored in a separate repository:

```
os-tutorials/
```

This repository will contain only Markdown files and related assets.

It will be included inside the Django project using a Git submodule.

Example structure:

```
os-website/
   /tutorials  (Git submodule)
```

Django will:

1. Read Markdown files from the submodule.
2. Convert them to HTML.
3. Render them inside Django templates.
4. Deliver the final page to the user.

This provides:

* Clean separation of content and platform.
* Independent version control of tutorials.

---

## 5. Future Feature Support

The Django rendering architecture fully supports:

* User authentication
* Paid subscription plans
* Role-based access control
* Administrative dashboards
* Advertising integration
* Analytics
* Content permissions
* Stripe billing integration
* Feature flag systems

Django is well-suited for content-driven platforms and SaaS systems.

The absence of a SPA does not limit future platform capabilities.

If interactive features are required later, they can be added selectively using JavaScript without converting the entire platform into a SPA.

---
