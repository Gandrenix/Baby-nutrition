# 📐 Resumen de Arquitectura, Código, Lenguajes y Entorno de Desarrollo

**Proyecto**: NutriBebé - Aplicación Web de Alimentación Complementaria Infantil  
**Ubicación del Proyecto**: `C:\Users\Asus\Desktop\💻 Development Projects\Prototipo`  
**Repositorio GitHub**: [https://github.com/Gandrenix/Baby-nutrition](https://github.com/Gandrenix/Baby-nutrition)  

---

## 🛠️ 1. Entorno de Desarrollo (Environment)

* **Entorno de Ejecución (Runtime)**: Node.js (v18+ / v20+)
* **Gestor de Paquetes**: `npm` (Node Package Manager)
* **Servidor de Desarrollo & Empaquetador**: [Vite v8.1.5](https://vitejs.dev/) (Build ultrarrápido basado en ES Modules nativos)
* **Sistema Operativo**: Windows 11 / Windows Server
* **Persistencia de Datos**: Almacenamiento local del navegador (`Window.localStorage`) para garantizar cero dependencia de servidor backend y total privacidad de los datos familiares.
* **Puerto Local de Desarrollo**: `http://localhost:5173/`

---

## 💻 2. Lenguajes de Programación y Tecnologías Web

1. **JavaScript (ES6+ / JSX)**:
   - Sintaxis moderna con `async/await`, desestructuración de objetos, métodos inmutables de arrays (`filter`, `map`, `reduce`, `some`) y módulos ES6 (`import/export`).
   - Componentes funcionales de React 18 con Hooks (`useState`, `useEffect`, `useContext`).

2. **HTML5 Semántico**:
   - Elementos semánticos (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<table>`, `<blockquote>`).
   - Etiquetas metadatos para SEO y diseño responsivo (`<meta name="viewport">`, `<title>`, `<meta name="description">`).

3. **Vanilla CSS3 (Diseño & Sistema de Tokens)**:
   - **Variables CSS (`:root`)**: Paleta pastel cálida (`--primary`, `--secondary`, `--dark-navy`, `--card-bg`, etc.).
   - **Layout Systems**: CSS Grid (`grid-template-columns: repeat(auto-fit, ...)`), Flexbox responsivo.
   - **Técnicas Modernas**: Glassmorphism (`backdrop-filter: blur()`), Sombras elevadas (`box-shadow`), Animaciones de transición suave (`cubic-bezier`).
   - **Reglas de Impresión (`@media print`)**: Formato automático para exportación a PDF del informe pediátrico.

4. **Markdown & HTML Dinámico**:
   - Procesamiento de textos educativos con `marked` para renderizar tablas, negritas, encabezados e ítems de lista alineados a la izquierda (`.markdown-body`).

---

## 🏗️ 3. Arquitectura del Proyecto (SPA - Single Page Application)

La aplicación está diseñada bajo el patrón de arquitectura **Single Page Application (SPA)** basada en componentes modulares reutilizables y desacoplados.

```
Prototipo/
├── public/
│   └── favicon.svg              # Icono principal de la app
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── HeaderNav.jsx    # Navegación superior y barra flotante móvil
│   │   ├── Stage1Readiness/
│   │   │   └── Stage1View.jsx   # Etapa 1: Test de Preparación
│   │   ├── Stage2Cuts/
│   │   │   └── Stage2View.jsx   # Etapa 2: Cortes Seguros & Métodos
│   │   ├── Stage3Recipes/
│   │   │   └── Stage3View.jsx   # Etapa 3: Recetas Inteligentes
│   │   ├── Stage4Education/
│   │   │   └── Stage4View.jsx   # Etapa 4: Biblioteca Educativa
│   │   └── Stage5Tracker/
│   │       └── Stage5View.jsx   # Etapa 5: Tracker & Reporte Pediátrico
│   ├── context/
│   │   └── AppContext.jsx       # Gestión de estado global y sync con localStorage
│   ├── data/
│   │   ├── readinessQuestions.js# Cuestionario y algoritmo del Test
│   │   ├── foodCutsData.js      # Base de datos de cortes por edad
│   │   ├── recipesData.js       # Recetas e ingredientes para despensa
│   │   ├── educationData.js     # 16 Temas educativos en Markdown
│   │   └── defaultTrackerData.js# Lista de alérgenos y plantilla de bitácora
│   ├── styles/
│   │   ├── index.css            # Reset global, fuentes Google (Outfit) y variables
│   │   └── components.css       # Estilos modulares (cards, badges, markdown)
│   ├── App.jsx                  # Enrutador principal de pestañas
│   ├── main.jsx                 # Punto de entrada de React
│   └── index.css                # Sobrescritura del reset de Vite
├── index.html                   # Documento HTML base
├── package.json                 # Gestión de dependencias
├── README.md                    # Documentación del proyecto
├── resumen.md                   # Este documento técnico
└── vite.config.js               # Configuración del bundled Vite
```

---

## 🔄 4. Flujo de Datos y Manejo de Estado (`AppContext.jsx`)

Para la gestión de estado global sin sobrecargar la aplicación con librerías pesadas (como Redux), se utilizó la **React Context API** combinada con **sincronización reactiva a LocalStorage**:

* `activeTab`: Control de navegación entre las 5 etapas (`'stage1'`, `'stage2'`, `'stage3'`, `'stage4'`, `'stage5'`).
* `readinessAnswers`: Respuestas guardadas del test de preparación.
* `babyProfile`: Perfil del bebé (Nombre, fecha de inicio, método).
* `foodLogs`: Historial de alimentos probados con nivel de aceptación y síntomas.
* `allergenStatus`: Matriz de alérgenos con seguimiento de los 3 días consecutivas.
* `favoriteRecipes`: Lista de IDs de recetas marcadas como favoritas.

---

## 📦 5. Dependencias del Proyecto (`package.json`)

### Dependencias Principales:
* `react` (^18.3.1): Librería UI reactiva basada en VDOM.
* `react-dom` (^18.3.1): Renderizador en el DOM del navegador.
* `lucide-react` (^1.16.0): Colección de iconos SVG modernos.
* `marked` (^16.0.0): Procesador ligero de Markdown a HTML.

### Dependencias de Desarrollo:
* `vite` (^8.1.5): Compilador y dev server de velocidad ultra rápida.
* `@vitejs/plugin-react` (^5.1.0): Soporte para React Fast Refresh en desarrollo.

---

## ⚙️ 6. Comandos de Consola Útiles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en local (`localhost:5173`) |
| `npm run build` | Compila y genera el paquete de producción en la carpeta `/dist` |
| `npm run preview` | Previsualiza el bundle compilado de producción localmente |
