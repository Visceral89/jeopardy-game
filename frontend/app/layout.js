import "./globals.scss";
import { Inter } from "next/font/google";
import { CardProvider } from "./context/CardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Jeopardy",
	description: "Jeopardy Game for Rasmus & Jessica",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CardProvider>{children}</CardProvider>
			</body>
		</html>
	);
}
