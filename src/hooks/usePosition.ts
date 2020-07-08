import { useEffect, useState } from "preact/hooks";

type UsePosition = Error | Position;
export const usePosition = (): UsePosition => {
    const [result, setResult] = useState<UsePosition>(Error("loading"));

    useEffect(() => {
        const POSITION_OPTIONS = { enableHighAccuracy: true };
        if (!navigator.geolocation) {
            setResult(Error("Geolocation not available"));
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            setResult,
            e => setResult(Error(JSON.stringify(e))),
            POSITION_OPTIONS
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);
    return result;
};
