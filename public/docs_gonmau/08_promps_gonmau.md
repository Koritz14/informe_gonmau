# Prompts para recopilación y redacción de informe

**1. Entrega de contexto y petición de casos para elegir con fuentes**

Tengo que hacer un informe para la asignatura de Fundamentos de la Seguridad de la Información. Para esta se nos pide hacer el informe en una página web utilizando Visual Studio Code y React. El informe debe ser sobre un ataque de ciberseguridad y analizarlo con la ley chilena 21.459 artículos 2 al 9 (Art. 2: Acceso ilícito, Art. 3: Interceptación ilícita, Art. 4: Ataque a integridad de datos, Art. 5: Ataque a integridad de sistema, Art. 6: Falsificación informática, Art. 7: Fraude informático, Art. 8: Receptación de datos, Art. 9: Abuso de dispositivos).

¿Podrías darme fuentes de donde sacar información?

**2. Consulta para saber qué tipo de rol debería asumir la IA para el análisis del caso elegido**

¿Qué rol deberías asumir para el análisis del caso?

**3. Generación de instrucciones para el análisis del caso**
Genera instrucciones detalladas y específicas para el análisis del caso elegido.

Formato requerido del informe:
1 01_resumen_<aaa><nnn>.md Transv. Resumen ejecutivo del caso (qué pasó, cuándo, quiénes participaron, impacto).
2 02_marco_<aaa><nnn>.md 2.1.1 Leyes y regulaciones aplicables al caso, nacionales e internacionales (mínimo 4 normas justificadas).
3 03_delitos_<aaa><nnn>.md 2.1.2 Tipificación de delitos según la Ley 21.459, citando artículos y mapeando cada acción del atacante.
4 04_comparacion_<aaa><nnn>.md 2.1.3 Tabla comparativa de marcos regulatorios por industria (mínimo 3 marcos y 3 ejes).
5 05_responsabilidades_<aaa><nnn>.md 2.1.4 Actores identificados y sus responsabilidades penales, civiles y administrativas, con cita de norma.
6 06_datos_<aaa><nnn>.md 2.1.5 Tratamiento de datos según la Ley 19.628: tipos, distinción personales/sensibles y derechos ARCO.
7 07_conclusiones_<aaa><nnn>.md Transv. Recomendaciones de seguridad y reflexión final del análisis.

Utilizando como fuente de información los siguientes enlaces:
https://www.britannica.com/event/Sony-Pictures-hack?utm_source=chatgpt.com
https://www.cisa.gov/?utm_source=chatgpt.com
https://www.fbi.gov/news/press-releases/update-on-sony-investigation?utm_source=chatgpt.com

Rol a asumir: analista forense.

**4. Generación de informe con instrucciones previamente generadas**

Actúa como un analista forense de ciberseguridad con enfoque jurídico especializado en delitos informáticos y normativa chilena.

Analiza el caso del ataque a Sony Pictures Entertainment de 2014 utilizando EXCLUSIVAMENTE como fuentes principales los siguientes enlaces:

- https://www.britannica.com/event/Sony-Pictures-hack
- https://www.cisa.gov
- https://www.fbi.gov/news/press-releases/update-on-sony-investigation

El análisis debe estar orientado a un informe académico universitario para la asignatura Fundamentos de la Seguridad de la Información.

Objetivo:
Relacionar los hechos técnicos del ataque con la Ley chilena 21.459 sobre delitos informáticos y la Ley 19.628 sobre protección de datos personales.

Instrucciones generales:
- No entregar información inventada ni asumir hechos no confirmados por las fuentes.
- Explicar técnicamente cada acción del atacante antes de relacionarla con normas legales.
- Mantener un enfoque técnico-jurídico.
- Justificar cada artículo o norma aplicada utilizando hechos concretos del caso.
- Utilizar lenguaje formal y académico.
- Incluir subtítulos claros.
- Priorizar profundidad antes que extensión innecesaria.
- Diferenciar claramente hechos, análisis técnico y análisis legal.
- Cuando se cite una ley, explicar por qué aplica al caso.
- Cuando se mencionen datos comprometidos, clasificarlos como personales o sensibles.
- Evitar resúmenes superficiales tipo noticia.

Estructura obligatoria del análisis:

1. 01_resumen_<aaa><nnn>.md
- Resumen ejecutivo del caso.
- Explicar:
  - qué ocurrió,
  - cuándo ocurrió,
  - quiénes participaron,
  - cómo ocurrió el ataque,
  - impacto técnico, económico y reputacional.

2. 02_marco_<aaa><nnn>.md
- Identificar mínimo 4 normas nacionales e internacionales aplicables.
- Justificar al menos 3 usando hechos concretos del caso.
- Incluir Ley 21.459 y Ley 19.628.
- Incorporar marcos internacionales relevantes de ciberseguridad.

3. 03_delitos_<aaa><nnn>.md
- Analizar los artículos 2 al 9 de la Ley 21.459.
- Identificar cuáles aplican realmente al caso.
- Mapear acciones específicas del atacante con artículos específicos.
- Explicar por qué cada conducta encaja jurídicamente.

4. 04_comparacion_<aaa><nnn>.md
- Crear una tabla comparativa con mínimo 3 marcos regulatorios.
- Comparar mínimo 3 ejes:
  - alcance,
  - jurisdicción,
  - sanciones,
  - sujetos regulados,
  - obligaciones.
- Incluir una columna de aplicabilidad al caso Sony Pictures.

5. 05_responsabilidades_<aaa><nnn>.md
- Identificar actores involucrados:
  - atacantes,
  - empresa,
  - ejecutivos,
  - terceros.
- Diferenciar responsabilidades:
  - penales,
  - civiles,
  - administrativas.
- Citar normas aplicables para cada responsabilidad.

6. 06_datos_<aaa><nnn>.md
- Identificar tipos de datos comprometidos.
- Clasificar datos personales y sensibles.
- Analizar derechos ARCO afectados:
  - acceso,
  - rectificación,
  - cancelación,
  - oposición.
- Relacionar el análisis con la Ley 19.628.

7. 07_conclusiones_<aaa><nnn>.md
- Elaborar conclusiones técnicas y legales.
- Proponer recomendaciones de seguridad.
- Reflexionar sobre la importancia de la ciberseguridad y cumplimiento normativo.
- Incluir reflexión crítica sobre prevención y gestión de incidentes.

**6. Consulta de sintaxis Markdown**
Genera una lista con las sintaxis basicas y mas comunes de markdown 

# Modificacion Aplicacion Web

1. Generacion de instrucciones(con chatgpt) para copilo modifique el proyecto con el informe

La parte del informe esta lista, lo siguiente es desarrollar la paguina web con react vite y estilizada con Tailwind CSS.
genera instrucciones para github copilot para modificar el archivo App.jsx creando una aplicacion web que muestre el informe ultizando como fuente de informacion los archivos en la carpeta docs_gonmau(exepto el archivo .md 08_promps_gonmau.md), genera un archivo JSON para indicar la estructura de la pagina. Explica detalladamente todo lo que debe instalar en caso de no estar ya instalado antes de modificar.
arquitectura del codigo:
INFORME_GONMAU/
├── docs_gonmau/
│   ├── 01_resumen_gonmau.md
│   ├── 02_marco_gonmau.md
│   ├── 03_delitos_gonmau.md
│   ├── 04_comparacion_gonmau.md
│   ├── 05_responsabilidades_gonmau.md
│   ├── 06_datos_gonmau.md
│   ├── 07_conclusiones_gonmau.md
│   └── 08_promps_gonmau.md
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── AGENTS.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

2. Instruciones para que copilot modifique el proyecto
**Instrucciones**
/*
INSTRUCCIONES PARA COPILOT:

Objetivo:
Crear una aplicación web en React (Vite) que funcione como visor de informe académico de ciberseguridad.

Reglas:
- Usar Tailwind CSS para toda la estilización.
- La aplicación debe leer archivos .md ubicados en:
  /docs_gonmau/
- EXCLUIR el archivo:
  08_promps_gonmau.md
- Usar react-markdown para renderizar contenido Markdown.
- No hardcodear el contenido del informe en el JSX.
- Cada archivo representa una sección del informe.

Estructura esperada:
- Sidebar con navegación (lista de secciones)
- Área principal donde se muestra el contenido del archivo seleccionado
- Diseño tipo dashboard académico

Secciones:
01_resumen_gonmau.md
02_marco_gonmau.md
03_delitos_gonmau.md
04_comparacion_gonmau.md
05_responsabilidades_gonmau.md
06_datos_gonmau.md
07_conclusiones_gonmau.md

Comportamiento:
- Al iniciar, cargar automáticamente "01_resumen_gonmau.md"
- Al hacer click en una sección del sidebar, cambiar contenido
- Mostrar título derivado del nombre del archivo
- Mantener diseño limpio, académico y responsivo

UX/UI:
- Sidebar fijo en desktop
- Colapsable en móvil
- Fondo claro con acentos azules/grises
- Tipografía legible estilo documento académico

Componentización sugerida:
- Sidebar.jsx
- DocumentViewer.jsx
- useDocs hook para cargar markdown
*/

**Estructura De la pagina**
{
  "app": "InformeGonmau",
  "theme": "academic-light",
  "layout": {
    "type": "dashboard",
    "sidebar": {
      "position": "left",
      "width": "280px",
      "collapsible": true
    },
    "content": {
      "type": "markdown-viewer",
      "scroll": true
    }
  },
  "docs": {
    "basePath": "/docs_gonmau/",
    "exclude": ["08_promps_gonmau.md"],
    "files": [
      {
        "id": "resumen",
        "file": "01_resumen_gonmau.md",
        "title": "Resumen del Caso"
      },
      {
        "id": "marco",
        "file": "02_marco_gonmau.md",
        "title": "Marco Normativo"
      },
      {
        "id": "delitos",
        "file": "03_delitos_gonmau.md",
        "title": "Tipificación de Delitos"
      },
      {
        "id": "comparacion",
        "file": "04_comparacion_gonmau.md",
        "title": "Comparación Regulatoria"
      },
      {
        "id": "responsabilidades",
        "file": "05_responsabilidades_gonmau.md",
        "title": "Responsabilidades Legales"
      },
      {
        "id": "datos",
        "file": "06_datos_gonmau.md",
        "title": "Tratamiento de Datos"
      },
      {
        "id": "conclusiones",
        "file": "07_conclusiones_gonmau.md",
        "title": "Conclusiones"
      }
    ]
  }
}

3. Arreglo de color de fondo mal ajustado

en el navegador abierto en VS Code el informe se ve bien, pero al abrirlo en otros navegadores (microsoft edge, chorme, Opera GX) el fondo se ve mal, como se ve en la imagen no se llena todo el fondo de blanco y si bajo esta todo con azul

4. Intento de arreglo de cuadro mal hecho en seccion "Comparacion Regulatoria"

en la pagina en la seccion de comparacion regulatoria, Comparación de marcos regulatorios aplicables el cuadro esta redactado en markdown modificalo para que se vea como un cuadro

5. Intento 2 de arreglo de cuadro
ahora el cuadro se ve asi:
<table> <thead> <tr> <th>Marco regulatorio</th> <th>Alcance</th> <th>Jurisdicción</th> <th>Sanciones</th> <th>Sujetos regulados</th> <th>Aplicabilidad al caso Sony</th> </tr> </thead> <tbody> <tr> <td><strong>Ley 21.459</strong></td> <td>Delitos informáticos y protección de sistemas</td> <td>Chile</td> <td>Penas privativas de libertad y multas</td> <td>Personas naturales responsables de delitos informáticos</td> <td>Alta aplicabilidad para tipificar acceso ilícito y sabotaje</td> </tr> <tr> <td><strong>Ley 19.628</strong></td> <td>Tratamiento y protección de datos personales</td> <td>Chile</td> <td>Responsabilidad civil y sanciones asociadas</td> <td>Organizaciones que procesan datos personales</td> <td>Aplicable por filtración de datos de empleados</td> </tr> <tr> <td><strong>Convenio de Budapest</strong></td> <td>Cooperación internacional y ciberdelitos</td> <td>Internacional</td> <td>Depende de legislación interna de cada Estado</td> <td>Estados adherentes e investigadores</td> <td>Relevante por carácter transnacional del ataque</td> </tr> <tr> <td><strong>NIST Cybersecurity Framework</strong></td> <td>Gestión de riesgos y controles de seguridad</td> <td>Referencia internacional</td> <td>No establece sanciones penales</td> <td>Organizaciones públicas y privadas</td> <td>Útil para evaluar fallas preventivas y respuesta</td> </tr> <tr> <td><strong>CISA Guidance</strong></td> <td>Recomendaciones técnicas y resiliencia</td> <td>Estados Unidos / referencia internacional</td> <td>No posee sanciones directas</td> <td>Infraestructura crítica y organizaciones</td> <td>Relevante para mitigación de malware destructivo</td> </tr> </tbody> </table>