import Header from "./header";

export default function Shell({ children, className = "" }) {
  return (
    <div className="container">
      <Header />
      <main className={`main ${className}`}>{children}</main>
    </div>
  );
}
