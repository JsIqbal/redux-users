import Footer from "./footer.component";
import NavBar from "./nav-bar.component";

function Layout (props) {
    return (
        <div className="Layout">
            <NavBar />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
