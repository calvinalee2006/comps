import { GoBell, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <Button secondary outline>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </>
  );
}

export default App;
