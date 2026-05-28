"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Lun", huevos: 98 },
  { name: "Mar", huevos: 105 },
  { name: "Mié", huevos: 112 },
  { name: "Jue", huevos: 110 },
  { name: "Vie", huevos: 120 },
  { name: "Sáb", huevos: 130 },
  { name: "Dom", huevos: 128 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-green-700 mb-8">
          AGROLAB 🌱
        </h2>

        <nav className="flex flex-col gap-4 text-gray-600">
          <a>Dashboard</a>
          <a>Asistencia</a>
          <a>Producción</a>
          <a>Reportes</a>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">
            Dashboard Escolar 🌱
          </h1>
          <div className="text-gray-500">
            Usuario: Admin
          </div>
        </div>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Gallineros</p>
            <h2 className="text-2xl font-bold">5</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Gallinas</p>
            <h2 className="text-2xl font-bold">243</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Producción hoy</p>
            <h2 className="text-2xl font-bold">128</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Controles</p>
            <h2 className="text-2xl font-bold">4</h2>
          </div>
        </div>

        {/* GRAFICO */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">
            Producción de huevos (últimos 7 días)
          </h2>

          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="huevos" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        

{/* TABLA */}
<div className="bg-white p-6 rounded-xl shadow mt-10">

  <h2 className="text-lg font-bold mb-4">
    Registro de Producción
  </h2>

  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="text-gray-500 text-sm border-b">
        <th className="py-2">Gallinero</th>
        <th className="py-2">Gallinas</th>
        <th className="py-2">Producción</th>
        <th className="py-2">Estado</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b hover:bg-gray-50">
        <td className="py-2">A1</td>
        <td>50</td>
        <td>32 huevos</td>
        <td className="text-green-600">Activo</td>
      </tr>

      <tr className="border-b hover:bg-gray-50">
        <td className="py-2">B2</td>
        <td>60</td>
        <td>40 huevos</td>
        <td className="text-green-600">Activo</td>
      </tr>

      <tr className="border-b hover:bg-gray-50">
        <td className="py-2">C3</td>
        <td>45</td>
        <td>28 huevos</td>
        <td className="text-yellow-500">Revisión</td>
      </tr>

      <tr className="hover:bg-gray-50">
        <td className="py-2">D4</td>
        <td>38</td>
        <td>20 huevos</td>
        <td className="text-red-500">Inactivo</td>
      </tr>
    </tbody>
  </table>

</div>




      </main>
    </div>
  );
}