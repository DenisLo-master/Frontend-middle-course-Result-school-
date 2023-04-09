import { useHover } from './useHover';


function Task3() {
    const { hovered, ref } = useHover();

    return (
        <div ref={ref} style={{ border: "solid 1px blue", padding: "10px" }}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}

export default Task3