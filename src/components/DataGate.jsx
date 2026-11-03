import { useQueries } from "@tanstack/react-query"
import { queries } from "../hooks/useData"

export default function DataGate ({ children }) {
const results = useQueries({ queries: Object.values(queries) })

if (results.some(r => r.isError)) {
return (
<div className="min-h-screen flex flex-col items-center justify-center gap-3">
<p>Gagal memuat data</p>
<button
className="px-4 py-2 bg-red-600 text-white rounded-xl"
onClick={() => results.forEach(r => r.isError && r.refetch())}
>
Coba lagi
</button>
</div>
)
}

if (results.some(r => r.isPending)) {
return (
<div className="min-h-screen flex items-center justify-center">
Memuat...
</div>
)
}

return children
}