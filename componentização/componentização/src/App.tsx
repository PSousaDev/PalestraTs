import React from 'react'
export default function App(){
  interface Props {
  name: string;
  age: number;
  onClick: () => void;
}

interface State {
  isOpen: boolean;
}

class MyComponent extends React.Component<Props, State> {
  constructor(props: Props) {
      super(props);
      this.state = { isOpen: false };
  }

  handleClick = () => {
      this.setState(prevState => ({
          isOpen: !prevState.isOpen
      }));
      this.props.onClick();
  }
  render(){
    return <div>
      <h1>Hello, {this.props.name}!</h1>
      <p>You are {this.props.age} years old.</p>
      <button onClick={this.handleClick}>
        {this.state.isOpen ? "Close" : "Open"}
      </button>
    </div>;
  }
  }

}
