import { pipe } from "fp-ts/es6/function";
import { fold, none, Option, some } from "fp-ts/es6/Option";
import haversine from "haversine";
import { useState, useEffect } from "preact/hooks";
import { usePosition } from "./usePosition";

export const useOdometer = () => {
    const [totalDistance, updateTotalDistance] = useState(0);
    const [previousPositon, updatePreviousPosition] = useState<
        Option<Position>
    >(none);
    const position = usePosition();
    useEffect(() => {
        if (!(position instanceof Error)) {
            return pipe(
                previousPositon,
                fold(
                    () => {
                        updatePreviousPosition(some(position));
                    },
                    prev => {
                        const distanceIncrement = haversine(
                            {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            },
                            {
                                latitude: prev.coords.latitude,
                                longitude: prev.coords.longitude
                            }
                        );
                        updateTotalDistance(distanceIncrement + totalDistance);
                    }
                )
            );
        }
    }, [position]);
    return totalDistance;
};
