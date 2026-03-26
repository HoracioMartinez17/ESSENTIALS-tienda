# Essentials A&L - Joyería de Lujo Online

## 📋 Descripción

Essentials A&L es una tienda online de joyería artesanal de lujo. El proyecto es un **monorepo** que contiene:

- **Frontend** (apps/web): Aplicación Next.js con diseño minimalista y elegante
- **Backend** (próximamente): API con Node.js/Express o Prisma

## 🎨 Diseño

### Paleta de Colores
- **Blanco**: Base principal
- **Crema** (#FAF8F3): Acentos cálidos
- **Dorado** (#D4AF37): Acentos premium
- **Gris Oscuro** (#2C2C2C): Texto principal

### Tipografía
- **Serif**: Playfair Display (Headings)
- **Sans**: Montserrat (Body)

### Características de Diseño
- Minimalista y elegante
- Mucho espacio en blanco
- Líneas limpias y precisas
- Sensación premium y accesible
- Responsive design

## 🏗️ Estructura del Proyecto

```
joyas-web/
├── apps/
│   └── web/                    # Frontend Next.js
│       ├── app/               # App directory
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   └── globals.css
│       ├── components/        # Componentes React
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── Collections.tsx
│       │   ├── BestSellers.tsx
│       │   ├── BrandStory.tsx
│       │   ├── Testimonials.tsx
│       │   └── Footer.tsx
│       ├── public/
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── tsconfig.json
│       └── package.json
├── packages/                  # Librerías compartidas (futuro)
├── package.json              # Root package.json (workspaces)
├── turbo.json               # Configuración Turbo
└── README.md
```

## 🚀 Secciones Implementadas

1. **Navbar** - Navegación principal con logo y menú responsive
2. **Hero** - Imagen principal con texto elegante y CTAs
3. **Collections** - Colecciones destacadas (Anillos, Collares, Pendientes)
4. **Best Sellers** - Productos más vendidos con ratings
5. **Brand Story** - Historia y valores de la marca
6. **Testimonials** - Reseñas de clientes
7. **Footer** - Enlaces, newsletter y redes sociales

## 📦 Instalación

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# 1. Navegar a la carpeta web
cd apps/web

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

## 🔨 Scripts Disponibles

### Desde apps/web:

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm start        # Ejecuta build de producción
npm run lint     # Ejecuta linter
```

### Desde raíz (usando Turbo):

```bash
npm run dev      # Inicia todos los apps en paralelo
npm run build    # Compila todos los apps
npm run lint     # Lint en todos los apps
```

## 🎯 Próximos Pasos

- [ ] Crear Backend API (Node.js + Prisma)
- [ ] Integrar base de datos
- [ ] Implementar carrito de compras
- [ ] Setup de pagos (Stripe)
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Optimización de imágenes
- [ ] Analytics e SEO

## 🖼️ Placeholders de Imágenes

Actualmente, las imágenes están como placeholders (emojis). Para producción, reemplazar con:
- Fotos de alta calidad en formatos modernas (WebP)
- Usar Next.js Image Optimization
- Considerar CDN para assets

## 📝 Notas de Desarrollo

- El proyecto usa **Tailwind CSS** para estilos
- **TypeScript** para type safety
- Componentes funcionales con hooks
- Responsive design grid-based
- Seguir las convenciones de nombres en camelCase

## 📄 Licencia

Licencia privada - Todos los derechos reservados © 2026 Essentials A&L

## 👥 Equipo

- Desarrollo Frontend: En progreso
- Diseño: Minimalista Premium
- Próximas fases: Backend y DevOps
