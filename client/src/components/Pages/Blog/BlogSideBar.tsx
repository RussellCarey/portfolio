import { useContext } from "react";
import ThemeContext from "../../../context/theme/themeContext";
import { SideBar } from "./styles/styled";

const BlogSidebar = () => {
  const { theme } = useContext(ThemeContext);

  return <SideBar></SideBar>;
};

export default BlogSidebar;
