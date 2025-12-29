# 🌟 Neon Icons Library

Una colección premium de **+80 iconos SVG con efectos neón** diseñados especialmente para interfaces en **modo oscuro (dark mode)**.

![Neon Icons](https://img.shields.io/badge/Icons-80+-00f5ff?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Optimized-ff00ff?style=for-the-badge)
![SVG](https://img.shields.io/badge/Format-SVG-39ff14?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-bf00ff?style=for-the-badge)

## 🔗 Demo en Vivo

👉 **[Ver Demo](https://yefferking.github.io/IconsNeon)**

---

## 📦 Instalación

### Método 1: CDN (Recomendado - Más fácil)

Simplemente agrega estas líneas en tu HTML:

```html
<!-- CSS - Estilos de los iconos neón -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/yefferking/IconsNeon@main/neon-icons.css"
/>

<!-- JavaScript - Definiciones de iconos (opcional) -->
<script src="https://cdn.jsdelivr.net/gh/yefferking/IconsNeon@main/icons.js"></script>
```

### Método 2: NPM (Próximamente)

```bash
npm install neon-icons-library
```

```javascript
// En tu archivo JavaScript
import "neon-icons-library/neon-icons.css";
import neonIcons from "neon-icons-library";
```

### Método 3: Descarga Directa

1. [Descargar ZIP](https://github.com/yefferking/IconsNeon/archive/refs/heads/main.zip)
2. Extrae los archivos
3. Incluye `neon-icons.css` y `icons.js` en tu proyecto

```html
<link rel="stylesheet" href="path/to/neon-icons.css" />
<script src="path/to/icons.js"></script>
```

---

## ✨ Características

- 🎨 **7 Colores Neón**: Cyan, Magenta, Verde, Naranja, Púrpura, Amarillo y Rojo
- 💫 **Efectos de Brillo**: Resplandor intenso optimizado para fondos oscuros
- 📐 **SVG Escalable**: Se ven perfectos en cualquier tamaño
- 🎭 **5 Animaciones**: Pulso, brillo, parpadeo, giro y rebote
- 📱 **Responsive**: Adaptados para cualquier dispositivo
- 🚀 **Ligero**: Solo CSS y SVG, sin dependencias
- 🌙 **Dark Mode**: Optimizado para interfaces oscuras

---

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

---

## 🚀 Uso Rápido

### Icono Básico

```html
<span class="neon-icon neon-cyan md">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
</span>
```

### Tamaños Disponibles

```html
<span class="neon-icon neon-magenta xs">...</span>
<!-- 16px -->
<span class="neon-icon neon-magenta sm">...</span>
<!-- 24px -->
<span class="neon-icon neon-magenta md">...</span>
<!-- 32px -->
<span class="neon-icon neon-magenta lg">...</span>
<!-- 48px -->
<span class="neon-icon neon-magenta xl">...</span>
<!-- 64px -->
<span class="neon-icon neon-magenta xxl">...</span>
<!-- 96px -->
```

### Animaciones

```html
<!-- Pulso -->
<span class="neon-icon neon-green md pulse">...</span>

<!-- Brillo intensificado -->
<span class="neon-icon neon-orange md glow">...</span>

<!-- Parpadeo neón -->
<span class="neon-icon neon-purple md flicker">...</span>

<!-- Rotación -->
<span class="neon-icon neon-yellow md spin">...</span>

<!-- Rebote -->
<span class="neon-icon neon-red md bounce">...</span>
```

---

## 💡 Uso con JavaScript

Si incluyes `icons.js`, puedes acceder a todos los iconos programáticamente:

```javascript
// Ver todos los iconos disponibles
console.log(neonIcons);

// Buscar un icono específico
const homeIcon = neonIcons.find((icon) => icon.name === "home");

// Insertar icono dinámicamente
document.getElementById("my-icon").innerHTML = `
  <span class="neon-icon neon-${homeIcon.color} md">
    ${homeIcon.svg}
  </span>
`;

// Filtrar por color
const cyanIcons = neonIcons.filter((icon) => icon.color === "cyan");
```

---

## 🎯 Categorías de Iconos

| Categoría         | Iconos                                     | Color Principal |
| ----------------- | ------------------------------------------ | --------------- |
| **UI/Navegación** | home, user, settings, search, menu, arrows | Cyan            |
| **Comunicación**  | mail, message, phone, bell, send           | Magenta         |
| **Acciones**      | check, plus, download, upload, save        | Verde           |
| **Media**         | play, pause, volume, camera, image         | Naranja         |
| **Social**        | heart, star, share, bookmark, thumbs-up    | Púrpura         |
| **Alertas**       | alert, info, help, lightbulb, zap          | Amarillo        |
| **Peligro**       | x, trash, lock, shield, ban                | Rojo            |
| **Tech**          | code, terminal, database, server, cpu      | Cyan/Magenta    |
| **E-commerce**    | shopping-cart, credit-card, dollar, tag    | Verde           |
| **Transporte**    | truck, car, plane, map-pin                 | Varios          |

---

## 🌙 Optimizado para Dark Mode

Todos los iconos están diseñados para brillar en fondos oscuros. Fondos recomendados:

```css
body {
  background: #0a0a0f;
}

/* O con gradiente */
body {
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
}
```

---

## 📁 Estructura del Proyecto

```
IconsNeon/
├── index.html       # Página de demostración
├── styles.css       # Estilos de la demo
├── neon-icons.css   # ⭐ CSS standalone (incluir en tu proyecto)
├── icons.js         # ⭐ Definiciones de iconos
├── app.js           # Lógica de la demo
├── package.json     # Configuración npm
└── README.md        # Documentación
```

---

## 🤝 Contribuir

¿Quieres agregar más iconos? ¡Las contribuciones son bienvenidas!

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nuevo-icono`)
3. Agrega tu icono en `icons.js`
4. Commit (`git commit -m 'Agregar icono X'`)
5. Push (`git push origin feature/nuevo-icono`)
6. Abre un Pull Request

---

## 📝 Licencia

MIT License - Úsalos libremente en tus proyectos personales y comerciales.

---

## ⭐ Apoya el Proyecto

Si te gusta Neon Icons, ¡dale una estrella al repositorio! ⭐

[![GitHub stars](https://img.shields.io/github/stars/yefferking/IconsNeon?style=social)](https://github.com/yefferking/IconsNeon)

---

Hecho con 💜 por [YefferKing](https://github.com/yefferking) para el modo oscuro
