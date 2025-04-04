# Reto Técnico: Procesamiento de Transacciones Bancarias (CLI

## Introducción

Este proyecto es una aplicación de línea de comandos (CLI) que procesa un archivo CSV con transacciones bancarias y genera un reporte con el balance final, la transacción de mayor monto y el conteo de transacciones por tipo.

## Instrucciones de Ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta la aplicación:
   ```bash
   npm start
   ```

## Enfoque y Solución

- Se utiliza `csv-parser` para leer y procesar el archivo CSV.
- Se calculan los valores requeridos en tiempo real mientras se leen las filas del archivo.
- El reporte se muestra en la terminal al finalizar el procesamiento.

## Estructura del Proyecto

- `index.js`: Script principal que procesa el archivo CSV y genera el reporte.
- `data.csv`: Archivo de entrada con las transacciones bancarias.
- `package.json`: Archivo de configuración del proyecto y dependencias.
