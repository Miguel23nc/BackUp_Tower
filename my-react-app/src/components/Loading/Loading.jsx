const Loading = () => {
  return (
    <div className="bg-black z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50">
      {<img src="/GIFT LOGO.gif" alt="Loading..." /> || <p> Loading...</p>}
    </div>
  );
};

export default Loading;
