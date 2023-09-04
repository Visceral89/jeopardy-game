"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Categories from "./components/Categories";

// Edit this out later

export default function Home() {
	const [categories, setCategories] = useState([]);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const catData = await fetch(
				`http://localhost:1337/api/categories?populate=*`
			);
			const cardData = await fetch(
				`http://localhost:1337/api/cards?populate=*`
			);

			const categories = await catData.json();
			const cards = await cardData.json();
			setCategories(categories.data);
			setCards(cards.data);
		};

		fetchData();
		console.log(cards);
		console.log(categories);
	}, []);

	return (
		<main className={styles.main}>
			{categories.map((category) => (
				<Categories
					key={category.id}
					categoryId={category.id}
					title={category.attributes.title}
					allCards={cards}
				/>
			))}
		</main>
	);
}
