# Aura Nova (React + Tailwind)

## Requisitos
- Node.js (se recomienda 18+)

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Deploy en Vercel (React Router)
Para evitar 404 al refrescar rutas como `/galeria`, el repo incluye `vercel.json` con un rewrite a `index.html`.

## Dónde editar la información
- Datos generales / WhatsApp / ubicación / precios: `src/data/site.js`
- Colores del tema (paleta basada en el logo): `src/styles/theme.css`
- Rutas y páginas: `src/App.jsx` y `src/pages/*`

## Imágenes
Se usan rutas públicas para que sea sencillo reemplazar archivos:
- Logos: `public/brand/*`
- Fotos: `public/media/exterior/*`, `public/media/interior/*`, `public/media/amenidades/*`

Si agregas nuevas fotos, mantén nombres simples (sin acentos) y actualiza `src/data/media.js`.
