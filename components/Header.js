import headerStyles from "../styles/Header.module.css"

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>First Next.js</span> Guille Page
			</h1>
			<p className={headerStyles.description}> A new side project based on next.js</p>
		</div>
	)
}

export default Header