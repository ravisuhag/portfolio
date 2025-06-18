import Header from "./header";

export default function PageLayout({ children, className = "" }) {
	return (
		<div className="container">
			<Header />
			<main className={`main ${className}`}>
				{children}
			</main>
		</div>
	);
}
