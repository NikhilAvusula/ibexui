import React from "react";

interface errorBoundaryState{
    hasError:boolean;
}

class ErrorBoundary extends React.Component<
any,
errorBoundaryState
> {
    constructor(props:any){
      super(props);
      this.state = {
        hasError: false
      };
    }
     static getDerivedStateFromError(error:any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    componentDidCatch(error:any, errorInfo:any) {
       console.log("Catched error", errorInfo);
    }
    
    render(){
      if(this.state.hasError){
        return(
          this.props.fallBackUIComponent
        );
      }
      
      return this.props.children;
    }
  }

export default ErrorBoundary