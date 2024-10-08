import CodeComponent from "../code/CodeComponent"

const codeJsson_1 = `{
    "name": "node-typescript",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
      "typescript": "^5.5.4"
    }
  }
  `

function Seccion2() {
  return (
    <section id="configuracion2" className="md:w-11/12 md:pt-24 pt-5 pb-10 text-sm sm:text-base">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Instalación de Typescript</h2>
    <div className="mt-6">
      Typescript es un superconjunto de JavaScript que añade tipado estático al lenguaje.
      Para instalar Typescript en el proyecto, ejecuta el siguiente comando:
      <CodeComponent codeString="npm install typescript --save-dev"/>
    </div>
    <p>
      Este comando instalará Typescript como una dependencia de desarrollo en el proyecto.
    </p>
    <div>
      Para verificar que Typescript se instaló correctamente, ejecuta el siguiente comando:
      <CodeComponent codeString="npx tsc --version" />
    </div>
    <div>
      Otra forma de verificar la instalación de Typescript es visualizando el archivo <code>package.json</code> y verificar que se haya agregado la dependencia de Typescript.
      <CodeComponent codeString={codeJsson_1} />
      Para este ejemplo usaremos la versión 5.5.4 de Typescript.
    </div>
  </section>
  )
}

export default Seccion2