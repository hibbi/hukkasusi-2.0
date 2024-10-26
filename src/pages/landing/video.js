const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="fixed object-cover w-[calc(100%-4rem)] h-full"
    >
      <source src={"landing.webm"} type="video/webm" />
    </video>
  );
};

export default Video;