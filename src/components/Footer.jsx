import { Code } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      {/* Línea divisora superior */}
      <div className="border-t border-slate-700"></div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Sección 1: Créditos */}
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-sm text-slate-300 uppercase tracking-wide font-semibold">
              Desarrollador
            </p>
            <p className="text-lg font-medium text-white">
              Mauro Gonzalez
            </p>
          </div>

          {/* Sección 2: Botón GitHub */}
          <div className="flex flex-col justify-center items-center">
            <a
              href="https://github.com/Koritz14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              <Code size={20} className="group-hover:animate-bounce" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Sección 3: Tecnologías */}
          <div className="flex flex-col justify-center space-y-2">
            <p className="text-sm text-slate-300 uppercase tracking-wide font-semibold">
              Tecnologías
            </p>
            <p className="text-sm text-slate-200">
              React + Vite + Tailwind CSS
            </p>
          </div>
        </div>

        {/* Línea divisora interna */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Sección: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            © {currentYear} Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Informe Gonmau - Análisis Forense y Legal
          </p>
        </div>
      </div>
    </footer>
  )
}
