const MessageContainer = ({ message, type }) => {
  return (
    <div className="flex justify-center h-60 items-center w-full shadow-md">
      <p className={`${type === 'error' ? 'text-red-500' : 'text-slate-700'}`}>
        {message}
      </p>
    </div>
  )
}

export default MessageContainer
