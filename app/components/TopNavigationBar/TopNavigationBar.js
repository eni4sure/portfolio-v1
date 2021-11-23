import React from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function TopNavigationBar() {
	const menuRef = React.useRef(null);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const handleMenuClick = () => {
		if (isMenuOpen) {
			gsap.to(menuRef.current, 0.6, { y: "-100%" });
		} else {
			gsap.to(menuRef.current, 0.6, { y: 0 });
		}
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div>
				<div className="navigation-bar">
					<div className="logo-icon">
						<Image src="/assets/logo/E-white.png" width={80} height={80} alt="logo" />
					</div>
					<div className="menubar" onClick={() => handleMenuClick()}>
						<span className="menu-open-icon first-icon" />
						<span className="menu-open-icon second-icon" />
						<span className="menu-open-icon third-icon" />
					</div>
				</div>
				<div className="navigation-content-wrapper" ref={menuRef}>
					<div className="logo-icon">
						<Image src="/assets/logo/E-white.png" width={80} height={80} alt="logo" />
					</div>
					<div className="navigation-close" onClick={() => handleMenuClick()}>
						<span className="close-icon close-first" />
						<span className="close-icon close-second" />
					</div>
					<div className="navigation-links-wrapper">
						<a className="link" big-overlay-text="HOME">
							HOME
						</a>
						<a className="link" big-overlay-text="ABOUT">
							ABOUT
						</a>
						<a className="link" big-overlay-text="PORTFOLIO">
							PORTFOLIO
						</a>
						<a className="link" big-overlay-text="CONTACT">
							CONTACT
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
