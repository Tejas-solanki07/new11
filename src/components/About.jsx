import aboutimg from "../images/about2.JPG";

export default function About() {
  
  return (
    <section className="about">
      <div className="about-left">
        <h2>Brand Story</h2>

        <p>
          Calyx was created to solve a problem professionals face every day:
          global products that don’t behave consistently on Indian hair.
        </p>

        <p>
          Indian hair is layered—exposed to heat, colour, humidity, and pollution.
          Calyx was built by studying this chemistry first.
        </p>

        <p>
          By blending traditional Indian knowledge with modern science,
          Calyx respects hair behaviour rather than forcing outcomes.
        </p>

        <div className="about-highlight">
          Formulated globally. Manufactured in India.
          Designed for Indian hair chemistry.
        </div>
      </div>

      <div className="about-right">
        <img
          src={aboutimg}
          alt="Calyx Brand Story"
        />

      </div>
    </section>
  );
}