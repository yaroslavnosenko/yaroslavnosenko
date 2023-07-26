export const Grid = () => {
  return (
    <div className="bg">
      <div className="container h-full grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-x-8">
        {[...Array(12).keys()].map((key) => (
          <div key={key} className="border-r border-l border-black/5" />
        ))}
      </div>
    </div>
  )
}
