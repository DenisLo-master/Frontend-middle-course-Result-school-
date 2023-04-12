import { useWindowScroll } from './useWindowScroll';


function Task5() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div>
            <p>
                Scroll position x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
    );
}

export default Task5