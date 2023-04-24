import React, { Component, ErrorInfo, PropsWithChildren } from 'react'


interface ErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<PropsWithChildren<{}>, ErrorBoundaryState> {
    constructor(props: PropsWithChildren<{}>) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ErrorBoundary: ", error.message)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex flex-1 justify-center items-center text-red-500'>
                    <h4>
                        Что-то пошло не так
                    </h4>
                </div>
            );
        }
        return this.props.children;
    }
}
