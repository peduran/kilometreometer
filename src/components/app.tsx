import { FunctionalComponent, h } from "preact";
import { usePosition } from "../hooks/usePosition";
import { useOdometer } from "../hooks/useOdometer";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    const position = usePosition()
    const distance = useOdometer()
    return (
        <div>
            <h1>Kilometreomter</h1>
            {position instanceof Error ?
                <pre>{position.message}</pre> :
                <pre>{position.coords.latitude} {position.coords.longitude} </pre>
            }
            {distance} km
            <meter max="1" value={distance} />
        </div>
    );
};

export default App;
