# LÚMINA Frontend - Copilot Instructions

Este archivo contiene instrucciones personalizadas para trabajar con el proyecto LÚMINA.

## Descripción del Proyecto

**LÚMINA** es una tienda online de joyería artesanal de lujo. Este es el frontend construido con **Next.js 14**.

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Package Manager**: npm (monorepo con Turbo)

## Estructura del Proyecto

```
apps/web/
├── app/                  # Next.js App Directory
│   ├── layout.tsx       # Layout raíz
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales
├── components/          # Componentes React
├── public/             # Assets estáticos
├── tailwind.config.js  # Configuración Tailwind
├── next.config.js      # Configuración Next.js
└── package.json        # Dependencias
```

## Estilo de Diseño

### Paleta de Colores

- **Primario**: Blanco y Crema (#FAF8F3)
- **Acentos**: Dorado (#D4AF37)
- **Texto**: Gris Oscuro (#2C2C2C)

### Tipografía

- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

### Principios de Diseño

1. **Minimalista**: Mucho espacio en blanco
2. **Elegante**: Líneas limpias y precisas
3. **Premium**: Sensación de lujo accesible
4. **Artesanal**: Énfasis en calidad y detalle

## Componentes Principales

1. **Navbar** - Navegación responsiva
2. **Hero** - Banner principal con CTA
3. **Collections** - Colecciones destacadas
4. **BestSellers** - Productos más vendidos
5. **BrandStory** - Historia de la marca
6. **Testimonials** - Reviews de clientes
7. **Footer** - Enlaces y newsletter

## Convenciones de Código

- Usar **TypeScript** para todos los componentes
- Nombrar componentes en **PascalCase**
- Usar **'use client'** en componentes interactivos
- Mantener nombres de archivos en **PascalCase** para componentes
- Comentarios en español cuando sea necesario
- Espacios en blanco generoso, sin amontonar elementos

## Estilo de Componentes

```typescript
// ✅ Usar nombres descriptivos y únicos
export default function NombreComponente() {
  return (
    <section className="py-24 px-6 bg-white">
      {/* Contenido */}
    </section>
  )
}
```

## Configuración de Tailwind

El proyecto incluye extensiones personalizadas:

- Colores: `cream`, `gold`, `gold-light`, `charcoal`
- Fuentes: `serif` (Playfair), default sans (Montserrat)
- Letter spacing: `wide`, `wider`

## Próximos Pasos

1. Instalar dependencias: `npm install`
2. Ejecutar desarrollo: `npm run dev`
3. Abrir http://localhost:3000
4. Las imágenes placeholders (emojis) deberán reemplazarse con fotos reales

## Notas Importantes

- Las imágenes son placeholders - reemplazar por fotos de alta calidad
- Usar Next.js Image Optimization cuando se añadan imágenes reales
- Mantener responsividad en mobile-first approach
- Los placeholders en emoji son temporales para desarrollo

## Links Útiles

- [Next.js Docs](https://nextjs.org)
- [TailwindCSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)

---

**Última actualización**: 19 de Marzo de 2026
**Versión**: 1.0.0
