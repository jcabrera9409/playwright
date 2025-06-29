# playwright

Proyecto de ejemplo de pruebas automatizadas con Playwright.

## Requisitos previos

- Node.js (versión recomendada: LTS)
- npm

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd playwright
   ```

2. Instala las dependencias:
   ```bash
   npm ci
   ```

3. Instala los navegadores necesarios para Playwright:
   ```bash
   npx playwright install --with-deps
   ```

## Ejecución de pruebas en local

Para ejecutar todas las pruebas:
```bash
npx playwright test
```

Los reportes de las pruebas se generarán en la carpeta `playwright-report/`.

Para abrir el reporte interactivo después de ejecutar las pruebas:
```bash
npx playwright show-report
```

## Estructura del proyecto

- `/tests`: Contiene los archivos de pruebas (por ejemplo, `saucelabs.spec.ts`).
- `/playwright-report`: Carpeta generada automáticamente con los reportes de las pruebas.
- `/test-results`: Resultados de las ejecuciones de pruebas.
- `playwright.config.ts`: Configuración de Playwright.
- `.github/workflows/playwright.yml`: Configuración del workflow de GitHub Actions para CI.

## Integración continua (CI) con GitHub Actions

El proyecto incluye un workflow de GitHub Actions que ejecuta las pruebas automáticamente en cada push o pull request a las ramas `main` o `master`.

### Descripción del workflow

- **Instala dependencias** usando `npm ci`.
- **Instala los navegadores de Playwright** con `npx playwright install --with-deps`.
- **Ejecuta las pruebas** con `npx playwright test`.
- **Sube el reporte** de las pruebas como artefacto (`playwright-report/`).

Puedes ver la configuración completa en [`/.github/workflows/playwright.yml`](.github/workflows/playwright.yml).

---
