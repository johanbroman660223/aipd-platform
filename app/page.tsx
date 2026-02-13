export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Logotypen */}
      <h1 className="text-5xl font-bold mb-6 text-blue-500">AIPD</h1>

      {/* Huvudrubrik */}
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        AIPD – Artificial Intelligence Police Department
      </h1>

      {/* Text under rubrik */}
      <p className="text-lg text-gray-700 mb-6">
        Plattformen är under uppbyggnad.
      </p>

      {/* Registreringsformulär */}
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Registrera dig</h2>
        <input className="w-full p-3 border border-gray-300 rounded mb-4" type="text" placeholder="Namn" />
        <input className="w-full p-3 border border-gray-300 rounded mb-4" type="email" placeholder="E-post" />
        <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Registrera
        </button>
      </form>
    </div>
  )
}
