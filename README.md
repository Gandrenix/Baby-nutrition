# 🍼 NutriBebé - Aplicación Web de Alimentación Complementaria Infantil

![NutriBebé Banner](src/assets/vite.svg)

Aplicación web integral, interactiva y responsiva diseñada para guiar y acompañar a las familias durante el proceso de transición a la alimentación complementaria del bebé. La aplicación abarca desde la evaluación inicial gratuita hasta herramientas avanzadas de cortes seguros, recetas inteligentes, educación médica basada en evidencia y seguimiento diario de alérgenos y síntomas.

## 📌 Etapas Integradas

1. **Etapa 1: Herramienta Gratuita (Test de Preparación)**
   - Cuestionario dinámico de 6 hitos del desarrollo (edad $\ge$ 6m, sostén erguido, pérdida del reflejo de extrusión, agarre mano-boca, curiosidad por comer y masticación).
   - Diagnóstico automático con semáforo de preparación (🟢 100% Preparado, 🟡 Casi listo o 🔴 Esperar) y recomendaciones personalizadas.

2. **Etapa 2: Primera Micro App (Cortes Seguros, Texturas & Métodos)**
   - Guía visual interactiva por edad (6-7m, 8-9m, 10-12m+) para alimentos populares (Aguacate, Zanahoria, Huevo, Carne, Manzana, Pollo, Uvas, Pescado, Brócoli).
   - Banderas de alerta sobre **Riesgo de Asfixia** (zanahoria/manzana cruda, uvas enteras).
   - Comparativa interactiva de métodos: **BLW (Baby-Led Weaning)**, **Tradicional (Papillas/Purés)**, **BLISS** y **Alimentación Perceptiva**.

3. **Etapa 3: Módulo de Recetas Inteligente**
   - Buscador **"¿Qué tengo en mi cocina hoy?"**: Marca los ingredientes disponibles en casa para filtrar recetas en tiempo real.
   - Filtros por edad, método y requerimientos nutricionales (Alto en Hierro 🩸, Antiestreñimiento 💩, Sin alérgenos 🛡️).
   - Instrucciones de preparación paso a paso, tiempos de cocción y pautas de congelación/conservación.

4. **Etapa 4: Módulo Educativo Basado en Evidencia (16 Temas)**
   - Protocolo de introducción segura de alérgenos (**Regla de los 3 Días**).
   - Matriz comparativa entre **Arcadas (Gagging)** y **Asfixia (Choking)**.
   - **Guía de Emergencia y Primeros Auxilios**: Pasos interactivos de actuación ante atragantamiento (5 Golpes en la espalda + 5 Compresiones torácicas).
   - Guías completas sobre hierro, bebidas permitidas vs prohibidas, regla 0 Sal / 0 Azúcar, alimentos peligrosos, mitos y FAQ.

5. **Etapa 5: Módulo de Seguimiento (Tracker & Bitácora)**
   - **Bitácora diaria** para registrar alimentos probados, fecha, nivel de aceptación (😍, 🙂, 😐, 👅) y síntomas.
   - **Matriz de Alérgenos a 3 Días**: Control de cumplimiento día a día para los 9 alérgenos principales.
   - **Informe Pediátrico Imprimible**: Generador de reporte exportable a PDF para revisiones médicas.

---

## 🚀 Tecnologías Utilizadas

- **Core Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Parseador Markdown**: [Marked](https://marked.js.org/)
- **Estilos**: CSS Vanilla con variables, Glassmorphism y diseño responsivo mobile-first.
- **Persistencia**: LocalStorage (almacenamiento 100% privado en el dispositivo del usuario).

---

## 🛠️ Instalación y Uso Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Gandrenix/Baby-nutrition.git

# 2. Entrar a la carpeta del proyecto
cd Baby-nutrition

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre `http://localhost:5173/` en tu navegador.

---

## 📜 Licencia

Desarrollado con fines educativos y de apoyo a las familias basándose en recomendaciones oficiales de la **OMS, AAP y ESPGHAN**.
