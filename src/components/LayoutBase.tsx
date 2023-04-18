import Sidebar from "./Sidebar";

const LayoutBase: React.FC<{
  children: React.ReactNode;
  hideSidebar?: boolean;
  isContentVerticallyCentered?: boolean;
}> = ({ children, hideSidebar, isContentVerticallyCentered }) => (
  <div className="w-full">
    <div className="flex h-full w-full grow-0 justify-between bg-gray-100 dark:bg-gray-900">
      {!hideSidebar && (
        <>
          <Sidebar />
        </>
      )}

      <div
        className={`min-h-[100dvh] w-full ${
          isContentVerticallyCentered ? "flex items-center" : ""
        } ${hideSidebar ? "" : ""}`}
      >
        <main className="min-h-screen bg-slate-50 p-3 dark:bg-gray-800 dark:text-gray-50">
          {children}
        </main>
      </div>
    </div>
  </div>
);

export default LayoutBase;
