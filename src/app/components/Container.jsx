const Container = ({ children, designs = "", noPadding = false }) => {
  return (
    <div
      className={`
          ${noPadding ? "" : "px-5 md:px-10 lg:px-10 py-5 md:py-10"}
          max-w-[1440px] mx-auto
          ${designs}
        `}
    >
      {children}
    </div>
  );
};

export default Container;
