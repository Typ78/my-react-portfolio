export default function ProjectCard({ name, src }) {
    return (
      <div className="bg-slate-400 rounded-xl overflow-hidden hover:shadow-[10px_10px_10px_rgba(255,0,0,0.4)] transition-shadow duration-300">
        <img
          src={src}
          alt={name}
          className="w-full h-[200px] object-cover rounded-t-xl"
        />
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 border border-red-600 rounded-2xl font-semibold text-sm">
              HTML
            </span>
            <span className="px-3 py-1 border border-red-600 rounded-2xl font-semibold text-sm">
              CSS
            </span>
            <span className="px-3 py-1 border border-red-600 rounded-2xl font-semibold text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 border border-red-600 rounded-2xl font-semibold text-sm">
              React
            </span>
            <span className="px-3 py-1 border border-red-600 rounded-2xl font-semibold text-sm">
              Tailwind
            </span>
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            molestias esse tempora ducimus maxime dolorum nostrum autem error
            libero.
          </p>
        </div>
      </div>
    );
  }
  