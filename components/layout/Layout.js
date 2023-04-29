import Link from "next/link";
function Layout({ children }) {
	return (
		<>
			<header className="header">
				<h2>User Manage</h2>
				<Link href="/add-customer">Add Customer</Link>
			</header>
			<div className="main">{children}</div>
			<footer className="footer">
				<a href="https://google.com" target="_blank" rel="noreferrer">
					Farnoud
				</a>{" "}
				Made By Next.js | Farnoud &copy;
			</footer>
		</>
	);
}

export default Layout;

