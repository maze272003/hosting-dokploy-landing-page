import { useEffect, useState } from 'react'
import BoxIcon from './BoxIcon'

export default function DataTable({
  title,
  description,
  columns,
  data,
  icon,
  iconClass,
  ctaLabel,
  modalTitle = 'Choose a server region',
  modalDescription,
  modalLinks = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasModalCta = Boolean(ctaLabel && modalLinks.length)

  useEffect(() => {
    if (!isModalOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <>
      <div className="glass-shell animate-rise mb-8 overflow-hidden rounded-[32px]">
        <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(109,115,255,0.12),rgba(255,255,255,0.02))] px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {iconClass ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6d73ff]/14 text-[#d7daff]">
                  <BoxIcon iconClass={iconClass} className="text-2xl text-[#d7daff]" />
                </span>
              ) : icon ? (
                <span className="text-2xl">{icon}</span>
              ) : null}
              <div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="text-sm text-zinc-400">{description}</p>
              </div>
            </div>

            {hasModalCta ? (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="lift-hover animate-sheen inline-flex w-full items-center justify-center rounded-full bg-[#ffd84d] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95 sm:w-auto"
              >
                {ctaLabel}
              </button>
            ) : null}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[640px] w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 sm:px-6 sm:py-4"
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
                  className="lift-hover transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  {columns.map((col) => {
                    const value = row[col.toLowerCase().replace(/\s+/g, '')] || row[col]

                    if (Array.isArray(value)) {
                      return (
                        <td key={col} className="px-4 py-3 text-sm text-zinc-300 sm:px-6 sm:py-4">
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
                        <td key={col} className="px-4 py-3 text-sm text-zinc-300 sm:px-6 sm:py-4">
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
                      <td key={col} className="px-4 py-3 text-sm text-zinc-300 sm:px-6 sm:py-4">
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

      {hasModalCta && isModalOpen ? (
        <div
          className="animate-fade-soft fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="data-table-modal-title"
            className="animate-rise max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-white/10 panel-dark shadow-[0_32px_120px_rgba(0,0,0,0.52)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-white/10 bg-white/[0.04] px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd84d]">
                    Server Access
                  </p>
                  <h3
                    id="data-table-modal-title"
                    className="mt-2 text-2xl font-semibold text-white"
                  >
                    {modalTitle}
                  </h3>
                  {modalDescription ? (
                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                      {modalDescription}
                    </p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="lift-hover inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08] hover:text-white sm:self-auto"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-2">
              {modalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift-hover group rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#6d73ff]/50 hover:bg-white/[0.05] sm:p-5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6d73ff]/14 text-[#d7daff]">
                    <BoxIcon iconClass={link.iconClass || 'bx bx-globe'} className="text-2xl" />
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-white">{link.label}</h4>
                  {link.description ? (
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{link.description}</p>
                  ) : null}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d7daff] transition group-hover:text-white">
                    Open link
                    <BoxIcon iconClass="bx bx-right-arrow-alt" className="text-lg" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
