const Card: React.FC<{
  children?: React.ReactNode;
  title?: string;
  postTitleContent?: React.ReactNode;
}> = ({ children, title, postTitleContent }) => {
  return (
    <div className="rounded border border-gray-200 bg-white px-4 py-2 shadow-md dark:border-gray-500 dark:bg-gray-800">
      {title && (
        <h5 className="mb-3 flex items-center gap-3 text-2xl">
          {title}
          {postTitleContent}
        </h5>
      )}
      {children}
    </div>
  );
};

export default Card;
