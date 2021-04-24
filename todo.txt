# To Do
Mandato

    1) https://jsonresume.org/schema/
    2) Crear un REST API para servir SU Curriculum Vitae (CV / Resume)
    3) Debe respetar el esquema de datos especificado en el punto 1
    4) SIN AUTENTICACIÓN: Puedo leer (GET y HEAD)
    5) CON AUTENTICACIÓN: Se puede editar POST, PUT, PATCH, DELETE
        5.1) La autenciacion debe ser Basic
    6) Las secciones del CV deben ser navegables, ejemplo:
        ~/basics/profiles debe dar como resultado una lista (arreglo) con los profiles dentro de la sección basics
    7) La data debe ser
        Cacheable (basada en etag),
        Soportar lectura condicional (GET y HEAD),
        Controlar dirty updates
        Soportar updates totales (PUT)
        Soportar updates parciales (PATCH)

Entregables

    Video de Youtube Codeando y Probando
    Repositorio Git
    Subir URL del video a la tarea, video debe contener el url del repositorio