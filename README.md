# 🌟 Neon Icons Library

Una colección premium de **iconos SVG con efectos neón** diseñados especialmente para interfaces en **modo oscuro (dark mode)**.

![Neon Icons](https://img.shields.io/badge/Icons-55+-00f5ff?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Optimized-ff00ff?style=for-the-badge)
![SVG](https://img.shields.io/badge/Format-SVG-39ff14?style=for-the-badge)

## ✨ Características

- 🎨 **7 Colores Neón**: Cyan, Magenta, Verde, Naranja, Púrpura, Amarillo y Rojo
- 💫 **Efectos de Brillo**: Resplandor intenso optimizado para fondos oscuros
- 📐 **SVG Escalable**: Se ven perfectos en cualquier tamaño
- 🎭 **Animaciones**: Pulso, brillo, parpadeo, giro y rebote
- 📱 **Responsive**: Adaptados para cualquier dispositivo
- 🚀 **Ligero**: Solo CSS y SVG, sin dependencias

## 🎨 Paleta de Colores Neón

| Color       | Código Hex | Clase CSS       |
| ----------- | ---------- | --------------- |
| 🔵 Cyan     | `#00f5ff`  | `.neon-cyan`    |
| 🔴 Magenta  | `#ff00ff`  | `.neon-magenta` |
| 🟢 Verde    | `#39ff14`  | `.neon-green`   |
| 🟠 Naranja  | `#ff6600`  | `.neon-orange`  |
| 🟣 Púrpura  | `#bf00ff`  | `.neon-purple`  |
| 🟡 Amarillo | `#ffff00`  | `.neon-yellow`  |
| ❤️ Rojo     | `#ff0040`  | `.neon-red`     |

## 📦 Instalación

### Opción 1: Incluir directamente

```html
<!-- Incluir los estilos -->
<link rel="stylesheet" href="neon-icons.css" />
```

### Opción 2: Copiar solo lo que necesitas

Copia las variables CSS y las clases de color que vayas a usar.

## 🚀 Uso Básico

### Icono Simple

```html
<span class="neon-icon neon-cyan">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="7" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  </svg>
</span>
```

### Con Tamaño

```html
<span class="neon-icon neon-magenta lg">
  <!-- SVG aquí -->
</span>
```

Tamaños disponibles: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

### Con Animación

```html
<!-- Pulso -->
<span class="neon-icon neon-green pulse">...</span>

<!-- Brillo -->
<span class="neon-icon neon-orange glow">...</span>

<!-- Parpadeo -->
<span class="neon-icon neon-purple flicker">...</span>

<!-- Giro -->
<span class="neon-icon neon-yellow spin">...</span>

<!-- Rebote -->
<span class="neon-icon neon-red bounce">...</span>
```

## 📁 Estructura del Proyecto

```
Libreria de icons/
├── index.html       # Página de demostración
├── styles.css       # Estilos de la demo
├── neon-icons.css   # ⭐ Archivo CSS standalone
├── icons.js         # Definiciones de iconos
├── app.js           # Lógica de la demo
└── README.md        # Documentación
```

## 🎯 Categorías de Iconos

- **UI/Navegación**: home, user, settings, search, menu, arrows
- **Comunicación**: mail, message, phone, bell, send
- **Acciones**: check, plus, download, upload, save
- **Media**: play, pause, volume, camera, image
- **Social**: heart, star, share, bookmark, thumbs-up
- **Alertas**: alert, info, help, lightbulb, zap
- **Peligro**: x, trash, lock, shield, ban
- **Tech**: code, terminal, database, server, cpu, git-branch

## 🌙 Optimizado para Dark Mode

Todos los iconos están diseñados para brillar en fondos oscuros. Recomendamos usar estos colores de fondo:

```css
/* Fondos recomendados */
--bg-dark: #0a0a0f;
--bg-darker: #12121a;
--bg-card: rgba(20, 20, 30, 0.8);
```

## 📝 Licencia

MIT License - Úsalos libremente en tus proyectos personales y comerciales.

---
