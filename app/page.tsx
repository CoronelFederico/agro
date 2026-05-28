export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-green-700">
          SISTEMA AGROTECNICA 🌱
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#">Inicio</a>
          <a href="#">Sistema</a>
          <a href="#">Beneficios</a>
          <a href="#">Funciones</a>
          <a href="#">Contacto</a>
        </nav>

        <a
          href="/dashboard"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Ingresar
        </a>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center px-10 py-16">

        {/* TEXTO */}
        <div>
          <p className="text-green-600 font-semibold mb-4">
            SISTEMA DE GESTIÓN AGROTÉCNICO
          </p>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Toda la información
            <br />
            de tu sistema,
            <br />
            organizada y bajo control.
          </h2>

          <p className="text-gray-600 mb-8 max-w-lg">
            Gestioná datos productivos, asistencia de alumnos y actividades rurales 
            en una sola plataforma simple, rápida y eficiente.
          </p>

          <div className="flex gap-4">
            <a className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Comenzar ahora
            </a>

            <a className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Ver demo
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1589927986089-35812388d1f4"
            alt="campo"
            className="rounded-xl shadow-xl"
          />
        </div>

      </section>

{/* FEATURES / TARJETAS */}
<section className="px-10 py-10">

  <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-4 gap-6">

    {/* TARJETA 1 */}
    <div className="flex items-start gap-4">
      <div className="text-green-600 text-2xl">📊</div>
      <div>
        <h3 className="font-bold">Organización total</h3>
        <p className="text-gray-500 text-sm">
          Toda la información del sistema en un solo lugar y bien estructurada.
        </p>
      </div>
    </div>

    {/* TARJETA 2 */}
    <div className="flex items-start gap-4">
      <div className="text-yellow-500 text-2xl">📈</div>
      <div>
        <h3 className="font-bold">Datos en tiempo real</h3>
        <p className="text-gray-500 text-sm">
          Consultá datos actualizados para tomar mejores decisiones.
        </p>
      </div>
    </div>

    {/* TARJETA 3 */}
    <div className="flex items-start gap-4">
      <div className="text-blue-500 text-2xl">✅</div>
      <div>
        <h3 className="font-bold">Control y seguimiento</h3>
        <p className="text-gray-500 text-sm">
          Gestioná asistencia, actividades y tareas fácilmente.
        </p>
      </div>
    </div>

    {/* TARJETA 4 */}
    <div className="flex items-start gap-4">
      <div className="text-purple-500 text-2xl">📊</div>
      <div>
        <h3 className="font-bold">Reportes y análisis</h3>
        <p className="text-gray-500 text-sm">
          Visualizá gráficos y estadísticas del sistema.
        </p>
      </div>
    </div>

  </div>

</section>


{/* COMO FUNCIONA */}
<section className="px-10 py-16 text-center">

  <h2 className="text-3xl font-bold mb-4">
    ¿Cómo funciona el sistema?
  </h2>

  <p className="text-gray-500 mb-10">
    Organizá la información en 4 simples pasos
  </p>

  <div className="grid md:grid-cols-4 gap-8">

    {/* PASO 1 */}
    <div>
      <div className="bg-green-100 text-green-700 w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-4">
        1
      </div>
      <h3 className="font-bold mb-2">Recolectamos datos</h3>
      <p className="text-sm text-gray-500">
        Información ingresada por alumnos y docentes.
      </p>
    </div>

    {/* PASO 2 */}
    <div>
      <div className="bg-green-100 text-green-700 w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-4">
        2
      </div>
      <h3 className="font-bold mb-2">Organizamos</h3>
      <p className="text-sm text-gray-500">
        Cada tipo de dato se guarda de forma estructurada.
      </p>
    </div>

    {/* PASO 3 */}
    <div>
      <div className="bg-green-100 text-green-700 w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-4">
        3
      </div>
      <h3 className="font-bold mb-2">Relacionamos</h3>
      <p className="text-sm text-gray-500">
        Los datos se conectan entre sí para análisis.
      </p>
    </div>

    {/* PASO 4 */}
    <div>
      <div className="bg-green-100 text-green-700 w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-4">
        4
      </div>
      <h3 className="font-bold mb-2">Tomamos decisiones</h3>
      <p className="text-sm text-gray-500">
        Visualizás resultados y mejorás la producción.
      </p>
    </div>

  </div>

</section>

{/* BENEFICIOS */}
<section className="px-10 py-16">

  <h2 className="text-3xl font-bold text-center mb-10">
    Beneficios de usar nuestro sistema
  </h2>

  <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-5 gap-6 text-center">

    {/* BENEFICIO 1 */}
    <div>
      <div className="text-green-600 text-3xl mb-2">✔</div>
      <h3 className="font-bold">Ahorra tiempo</h3>
      <p className="text-gray-500 text-sm">
        Todo organizado y fácil de encontrar.
      </p>
    </div>

    {/* BENEFICIO 2 */}
    <div>
      <div className="text-yellow-500 text-3xl mb-2">🎯</div>
      <h3 className="font-bold">Menos errores</h3>
      <p className="text-gray-500 text-sm">
        Evita datos repetidos o confusos.
      </p>
    </div>

    {/* BENEFICIO 3 */}
    <div>
      <div className="text-blue-500 text-3xl mb-2">⏱</div>
      <h3 className="font-bold">Mejores decisiones</h3>
      <p className="text-gray-500 text-sm">
        Información clara para planificar mejor.
      </p>
    </div>

    {/* BENEFICIO 4 */}
    <div>
      <div className="text-purple-500 text-3xl mb-2">📈</div>
      <h3 className="font-bold">Más productividad</h3>
      <p className="text-gray-500 text-sm">
        Optimizá recursos y mejorá resultados.
      </p>
    </div>

    {/* BENEFICIO 5 */}
    <div>
      <div className="text-red-500 text-3xl mb-2">🔒</div>
      <h3 className="font-bold">Seguridad</h3>
      <p className="text-gray-500 text-sm">
        Tus datos siempre protegidos.
      </p>
    </div>

  </div>

</section>

{/* CTA FINAL */}
<section className="px-10 py-16">

  <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between text-white">

    <div>
      <h2 className="text-3xl font-bold mb-2">
        Transformá tu escuela con tecnología 🌱
      </h2>
      <p className="text-green-100">
        Organizá, analizá y mejorá la producción con un sistema moderno.
      </p>
    </div>

    <div className="mt-6 md:mt-0">
      <a
        href="/dashboard"
        className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Iniciar sesion →
      </a>
    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="text-center text-gray-400 py-6">
  © 2026 AGROLAB - Sistema Agrotécnico
</footer>


    </main>
  );
}