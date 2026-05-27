# Informe Gonmau - Análisis Forense del Hack de Sony Pictures 2014

> Una aplicación React + Vite que presenta un análisis integral y detallado del hackeo de Sony Pictures Entertainment en 2014, titulado "Perdiste el Juego" (You Lost the Game).

## 📋 Descripción del Proyecto

**Informe Gonmau** es una aplicación web interactiva que combina:

- **Documentación forense** en español (8 secciones markdown estructuradas)
- **Interfaz React moderna** para navegar y presentar el análisis
- **Tema personalizable** con soporte para modo claro/oscuro usando CSS variables

El proyecto analiza aspectos legales, criminales y técnicos del incidente de seguridad más significativo de la década.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. La aplicación se recargará automáticamente al realizar cambios (HMR).

### Construcción para Producción

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

### Vista Previa de Producción

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

Ejecuta ESLint en todos los archivos `.js` y `.jsx`.

## 📁 Estructura del Proyecto

```
├── src/                              # Código React
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos del componente
│   ├── index.css                    # Estilos globales y variables CSS
│   ├── main.jsx                     # Punto de entrada React
│   ├── assets/                      # Imágenes y recursos
│   ├── components/                  # Componentes React reutilizables
│   │   ├── DocumentViewer.jsx       # Visor de documentos
│   │   ├── Sidebar.jsx              # Navegación lateral
│   │   └── Footer.jsx               # Pie de página
│   ├── config/
│   │   └── docs.js                  # Configuración de documentos
│   └── hooks/
│       └── useDocs.js               # Hook personalizado para docs
├── docs_gonmau/                      # Documentación del análisis (8 archivos)
│   ├── 01_resumen_gonmau.md         # Resumen ejecutivo del caso
│   ├── 02_marco_gonmau.md           # Contexto histórico y legal
│   ├── 03_delitos_gonmau.md         # Análisis de delitos
│   ├── 04_comparacion_gonmau.md     # Análisis comparativo
│   ├── 05_responsabilidades_gonmau.md # Responsabilidades
│   ├── 06_datos_gonmau.md           # Evidencia y datos
│   ├── 07_conclusiones_gonmau.md    # Conclusiones y hallazgos
│   └── 08_promps_gonmau.md          # Metodología e investigación
├── public/                           # Archivos estáticos
│   └── docs_gonmau/                 # Copia de documentación
├── vite.config.js                   # Configuración de Vite
├── tailwind.config.js               # Configuración de Tailwind CSS
├── eslint.config.js                 # Configuración de ESLint
└── package.json                     # Dependencias del proyecto
```

## 🛠️ Stack Tecnológico

| Herramienta | Versión |
|-------------|---------|
| React | 19.2.6 |
| Vite | 8.0.12 |
| Tailwind CSS | 4.3.0 |
| Lucide React | 1.14.0 |
| ESLint | 10.3.0 |
| PostCSS | 8.4.46 |

## 🎨 Sistema de Temas

El proyecto utiliza **CSS variables** para gestionar temas:

```css
--color-accent: #aa3bff         /* Color principal de interacción */
--color-accent-rgb: 170 59 255  /* Para transparencias */
--shadow-sm, --shadow-lg        /* Sombras predefinidas */
--radius-sm, --radius-md        /* Radios de borde */
```

**Fuentes**: Segoe UI / Roboto (sans), Consolas (monoespaciada)
**Punto de ruptura responsivo**: 1024px (mobile-first)

## 📚 Estructura de Documentación

Los 8 archivos markdown en `docs_gonmau/` siguen una estructura forense clara:

1. **Resumen** - Descripción general del caso
2. **Marco** - Contexto histórico y legal
3. **Delitos** - Análisis de violaciones y delitos
4. **Comparación** - Análisis comparativo con otros casos
5. **Responsabilidades** - Desglose de responsabilidades
6. **Datos** - Presentación de evidencia
7. **Conclusiones** - Hallazgos finales
8. **Prompts** - Metodología de investigación

## 🏗️ Patrones de Desarrollo

### Componentes

- Utiliza **React hooks** (useState, useEffect, etc.)
- Funciones componentes (sin componentes de clase)
- Estilos con **Tailwind CSS** + CSS personalizado

### Estilizado

- Preferencia por **utilidades Tailwind** para layouts responsivos
- **CSS variables** para valores de tema
- Iconos SVG desde `public/icons.svg` o **Lucide React**
- Diseño mobile-first

## 📦 Dependencias Principales

- **React 19** - Librería UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de utilidades CSS
- **Lucide React** - Librería de iconos
- **ESLint** - Linter de código JavaScript

## 🔗 Integración de Documentos

La documentación desde `docs_gonmau/` se puede importar en componentes React para su visualización interactiva. Considera usar librerías como `react-markdown` para renderizar contenido markdown.

## ✅ Estándares de Calidad

- **Linting**: Ejecuta `npm run lint` regularmente
- **HMR**: Hot Module Replacement activado durante desarrollo
- **Módulos ES**: Solo ES modules (type: "module" en package.json)
- **React**: Componentes funcionales con hooks

## 📝 Notas para Contribuidores

- La documentación en `docs_gonmau/` es el núcleo del proyecto
- El idioma principal es **español** - mantenerlo en toda la documentación
- Este es un proyecto **frontend-only** - sin backend
- Los temas CSS permiten fácil soporte dark/light mode
- El proyecto usa componentes modularizados para facilitar mantenimiento

## 📄 Licencia

Este proyecto contiene análisis de eventos públicos documentados.
