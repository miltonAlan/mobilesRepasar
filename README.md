## Instalación
npm install

## Ejecución

- back
npm run dev

-front
npm start

## Pruebas de Endpoints

## GET
http://localhost:9004/ping


## POST
http://localhost:9004/openapi
- cuerpo:
    - json
        - {"prompt": "50"}

http://localhost:9004/upload
    - question: "explica el documento"
    - file: *.pdf