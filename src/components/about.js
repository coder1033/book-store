import { AiFillGithub } from "react-icons/ai";
import { Container, Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>About</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat magni
          facilis. Facilis, consequatur nisi molestias cupiditate sapiente
          labore officiis illo suscipit at nesciunt omnis doloribus mollitia
          neque porro earum ab numquam laudantium laboriosam itaque iure atque,
          beatae animi sequi. Architecto voluptatum impedit, molestias ipsam
          eius modi non aut optio, cumque quasi maxime? Iste, necessitatibus sed
          voluptatem nam at consequuntur ipsum et maxime corrupti animi eaque
          aliquam minima reiciendis unde consectetur tempore velit, debitis
          rerum ab sunt nihil nobis accusantium? Temporibus architecto nesciunt
          explicabo laboriosam vel exercitationem ut animi illum laborum
          corporis assumenda iusto consequuntur cumque, atque quibusdam quod ad!
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.github.com/coder1033"
        >
          <AiFillGithub size={50} style={{ color: "#111" }} />
        </a>
      </Jumbotron>
    </Container>
  );
};

export default About;
