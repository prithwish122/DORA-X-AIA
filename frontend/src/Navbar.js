import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaHome, FaPlusSquare, FaListAlt, FaShoppingCart } from 'react-icons/fa';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navigation = ({ web3Handler, account }) => {
    const navbarRef = useRef(null); // UseRef for the animated element

    useEffect(() => {
        const navbarElement = navbarRef.current;
        
        // Get the computed style to apply the same border radius
        const borderRadius = window.getComputedStyle(navbarElement).borderRadius;

        // GSAP Border Animation
        // gsap.to(navbarElement, {
        //     borderImageSource: "linear-gradient(45deg, red, black, red)",
        //     borderImageSlice: 1,
        //     borderRadius: 45, // Set the border radius dynamically
        //     duration: 4,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power1.inOut",
        // });
    }, []);

    return (
        <div className="relative">
            <Navbar
                expand="lg"
                ref={navbarRef}  // Reference to the navbar for GSAP animations
                className="backdrop-blur-lg bg-white/10 shadow-xl fixed top-4 left-0 right-0 mx-4 lg:mx-20 px-6 py-4 z-50 border-4 border-transparent bg-clip-padding transition duration-300 rounded-full"> {/* Blurry background with border */}
                <Container fluid className="flex justify-between items-center">
                    <Navbar.Brand className="text-3xl font-semibold text-white hover:text-red-400 transition-all duration-300">
                        DORA POCKET
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="lg:hidden text-white focus:outline-none" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="w-full lg:w-auto flex flex-col lg:flex-row lg:items-center lg:space-x-10">
                        <Nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-white">
                            <Nav.Link as={Link} to="/" className="flex items-center space-x-2 group">
                                <FaHome className="text-lg group-hover:text-red-400 transition duration-300" />
                                <span className="group-hover:text-red-400 transition duration-300">Home</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/create" className="flex items-center space-x-2 group">
                                <FaPlusSquare className="text-lg group-hover:text-red-400 transition duration-300" />
                                <span className="group-hover:text-red-400 transition duration-300">Create</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/my-listed-items" className="flex items-center space-x-2 group">
                                <FaListAlt className="text-lg group-hover:text-red-400 transition duration-300" />
                                <span className="group-hover:text-red-400 transition duration-300">My Listed Items</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/my-purchases" className="flex items-center space-x-2 group">
                                <FaShoppingCart className="text-lg group-hover:text-red-400 transition duration-300" />
                                <span className="group-hover:text-red-400 transition duration-300">My Purchases</span>
                            </Nav.Link>
                        </Nav>
                        <div className="mt-4 lg:mt-0 flex justify-center lg:justify-end items-center w-full lg:w-auto">
                            {account ? (
                                <Nav.Link
                                    href={`https://opencampus-codex.blockscout.com/address/${account}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4">
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 border-2 border-red-600 text-white rounded-full hover:bg-red-600 hover:text-white transition duration-300 shadow-md hover:shadow-lg focus:outline-none">
                                        {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                    </Button>
                                </Nav.Link>
                            ) : (
                                <Button 
                                    onClick={web3Handler}
                                    className="px-5 py-2 bg-gradient-to-r from-red-500 via-black to-red-700 text-white rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:via-black hover:to-red-800 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300">
                                    Connect Wallet
                                </Button>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
