import { Component, ErrorInfo, ReactNode } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";

interface Props {
	children?: ReactNode;
  }
  
  interface State {
	error: boolean;
  }

class ErrorBoundary extends Component<Props, State> {
	state = {
		error: false
	};

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		this.setState({
			error: true
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage/>;
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;