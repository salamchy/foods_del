const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading loading-spinner text-info"></span>
      <span className="loading loading-spinner text-success"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-error"></span>
    </div>
  )
}
export default LoadingSpinner