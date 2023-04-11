import { useViewportSize } from './useViewportSize';


function Task4() {
    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}

export default Task4