# Plan de Pruebas - Validación de Teléfono

## Casos de prueba

| Caso | Entrada     | Resultado esperado                       |
|------|-------------|------------------------------------------|
| 1    | 1234567890  | Cliente registrado correctamente (verde) |
| 2    | 123-456-789 | Teléfono inválido. Solo números (rojo)   |
| 3    | abc123      | Teléfono inválido. Solo números (rojo)   |
| 4    | 123 456     | Teléfono inválido. Solo números (rojo)   |
| 5    | ""          | Teléfono inválido. Solo números (rojo)   |
