import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import "../styles/globals.css";
import "../styles/dark.css";
import "../styles/code.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang="en" className={inter.className}>
				<body>
					{children}
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</ViewTransitions>
	);
}
