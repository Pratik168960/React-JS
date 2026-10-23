import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Container from "./container/Container";
import Logo from ".Logo.jsx";
import LogoutBtn from "./Header/LogoutBtn";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
// TUTOR IMPORTANT NOTE: Always export new components from the index file to maintain clean imports across the project.
import Login from "./Login";
import Signup from "./Signup";
import PostCard from "./Postcard";
import AuthLayout from "./AuthLayout"

// Exporting all components as an object so they can be imported on a single line elsewhere
// We will export Button and Input later when we use them, but setting up the structure now.
export {
    Header,
    Footer,
    Container,
    Logo,
    LogoutBtn,
    Button,
    Input,
    Select,
    Login,
    Signup,
    PostCard,
    AuthLayout,
}