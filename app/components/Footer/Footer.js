export default function Footer({ pageViews }) {
	return (
		<>
			<div className="footer">
				<div className="footer-text">
					&copy; {new Date().getFullYear()} Eniola Osabiya. <br />
					<p className="small">Site stats &mdash; {pageViews} views.</p>
				</div>
			</div>
		</>
	);
}
