import React, { ErrorInfo } from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | undefined;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: undefined as Error | undefined,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // this.setState({ error });
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return <div>There was an error: {this.state.error.message}</div>;
    }

    return this.props.children;
  }
}
