const ErrorFallback = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-60">
      <h2 className="text-lg">Something went wrong.</h2>
      <p className="text-red-500 dark:text-red-300 text-sm">
        {error.message || "unknown error inside component"}
      </p>
    </div>
  );
};
export default ErrorFallback;
