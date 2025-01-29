/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
import Contact from "./Contact";
function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr Whiskerson"
        phone="75773784895"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="75773784895"
        email="mr.Felix@catnap.meow"
      />
      <Contact
        img="./images/fluffykins.png"
        name="Mr Fluffykins"
        phone="7467384"
        email="mr.fluffykins@catnap.meow"
      />
      <Contact
        img="./images/pumpkin.png"
        name="Mr pumpkin"
        phone="6535647"
        email="mr.pumpkin@catnap.meow"
      />
    </div>
  );
}

export default App;
