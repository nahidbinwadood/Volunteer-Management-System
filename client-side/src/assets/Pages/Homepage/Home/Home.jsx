import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { motion, useScroll } from "framer-motion";
const Home = ({ title }) => {
  const {scrollProgress}=useScroll();
  return (
    <motion.div style={{scaleX:scrollProgress}}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Banner></Banner>
      <VolunteerNeeds></VolunteerNeeds>
      <Blog></Blog>
      <Contact></Contact>
    </motion.div>
  );
};
Home.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Home;
