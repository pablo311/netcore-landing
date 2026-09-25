export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between sm:items-center text-sm text-[#8FA6BD]">
        <img src="/brand/netcore-horizontal-dark.svg" alt="Netcore" className="h-7 w-auto self-start sm:self-auto" />
        <p>© {new Date().getFullYear()} Netcore Technology EAS · Asunción, Paraguay</p>
      </div>
    </footer>
  )
}
