import BoxIcon from './BoxIcon'

export default function DataTable({ title, description, columns, data, icon, iconClass }) {
  return (
    <div className="mb-8 overflow-hidden rounded-[30px] border border-white/10 panel-dark shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
      <div className="border-b border-white/10 bg-white/[0.03] px-6 py-5">
          <div className="flex items-center gap-3">
            {iconClass ? (
              <BoxIcon iconClass={iconClass} className="text-2xl text-[#6d73ff]" />
            ) : icon ? (
              <span className="text-2xl">{icon}</span>
            ) : null}
            <div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-zinc-400">{description}</p>
            </div>
          </div>
        </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="transition-colors duration-200 hover:bg-white/[0.03]"
              >
                {columns.map((col) => {
                  const value = row[col.toLowerCase().replace(/\s+/g, '')] || row[col]

                  if (Array.isArray(value)) {
                    return (
                      <td key={col} className="px-6 py-4 text-sm text-zinc-300">
                        <div className="flex flex-wrap gap-2">
                          {value.map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>
                    )
                  }

                  if (typeof value === 'string' && value.startsWith('http')) {
                    return (
                      <td key={col} className="px-6 py-4 text-sm text-zinc-300">
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#c7cbff] underline decoration-white/20 underline-offset-4 transition hover:text-white"
                        >
                          Open Link
                        </a>
                      </td>
                    )
                  }

                  return (
                    <td key={col} className="px-6 py-4 text-sm text-zinc-300">
                      {value || '-'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
