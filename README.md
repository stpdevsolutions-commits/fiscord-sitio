# fiscord-sitio

Sitio público de **FiscoRD** — [fiscord.lat](https://fiscord.lat). Proyecto
Astro estático (SSG), separado de la aplicación (`stpdevsolutions-commits/fiscord`,
React + Vite + Capacitor).

## Por qué separado

El sitio es contenido (marketing + guías de la DGII) que debe posicionar en
Google. Un SPA de React entrega la página vacía al principio y la llena con
JavaScript — malo para SEO. Astro genera cada página como HTML terminado al
publicar.

## Reparto de fiscord.lat (opción B)

Los dos proyectos conviven en el mismo dominio. Este proyecto sirve `/` y las
páginas de contenido; `vercel.json` reenvía al proyecto de la app todo lo suyo:

| Ruta | Va a |
|------|------|
| `/`, `/funciones`, `/precios`, `/recursos/*`, `/contacto`, `/terminos`, `/privacidad` | este sitio (Astro) |
| `/app/*`, `/login`, `/register`, `/reset-password`, `/accept-invite`, `/auth/*`, `/pending`, `/suspended`, `/superadmin/*` | app (`fisco-rd` en Vercel) |
| `/assets/*`, `/manifest.json`, `/apple-touch-icon.png`, `/firebase-messaging-sw.js` | app (bundle + PWA) |
| `/terms`, `/privacy` | app (temporal, hasta migrar los legales) |

El navegador solo ve `fiscord.lat` en todo momento, así que el inicio de sesión
(Google OAuth, Supabase Auth) no cambia.

## Desarrollo

```
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run check      # typecheck de Astro
```

## Identidad

Portada del canvas de mockups (`~/fiscord-identidad-mockups/build.mjs`, `const STYLE`):
aguamarina `#0b7684`, fuentes Bricolage Grotesque / Instrument Sans / IBM Plex
Mono, borde troquelado, datos fiscales siempre en `.fiscal` (mono, tabular).
Tokens en `src/styles/tokens.css`.

## Estado

Scaffold + Home (FRD-27, FRD-28). Pendiente: Funciones, Para contadores, Precios,
guías DGII, legales, SEO, QA (FRD-29 a FRD-35). Ver etapa "FiscoRD · Sitio web
fiscord.lat" en tickets.stpsoluciones.com/roadmap.
