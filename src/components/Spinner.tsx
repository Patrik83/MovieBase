const Spinner = () => {
  return (
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
      <span className="hidden">Loading...</span>
    </div>
  )
}

export default Spinner;