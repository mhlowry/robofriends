import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {  
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <h1>Oooops. That is not good.</h1>
        }
        
        return children;
    }
}

export default ErrorBoundary;