import { useToggle } from './useToggle';


function Task6() {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

    return (
        <button onClick={() => toggle()}>
            {typeof value === "boolean" ? JSON.stringify(value) : value}
        </button>
    );
}

export default Task6