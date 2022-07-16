import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			{/* <Container> */}
			<div>
				<Navbar bg="primary" variant="dark" sticky="top" expand="lg">
					<Navbar.Brand href="home">
						<img src={logo} alt="React Logo" width={50} />
						Brand
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="float-end">
							{routes.map(({ to, name }) => (
								<LinkContainer key={to} to={to}>
									<Nav.Link>{name}</Nav.Link>
								</LinkContainer>
							))}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			{/* </Container> */}

			<Routes>
				{routes.map(({ path, Component }) => {
					return <Route key={path} path={path} element={<Component />} />;
				})}
				<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
			</Routes>
		</BrowserRouter>
	);
};
