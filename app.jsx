// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  onItemOver(e) {
    this.setState({
      active: true
    });
  }

  onItemOut(e) {
    this.setState({
      active: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.active ? 800 : 400
    };
    return (<li style={style} onMouseOver={this.onItemOver.bind(this)} onMouseOut={this.onItemOut.bind(this)}>{this.props.name}</li>);
  }
}

var GroceryList = (props) => {
  return (
    <ul>
      {props.items.map(name =>
        <GroceryListItem name={name} />
      )}
    </ul>
  );
};

ReactDOM.render(<GroceryList items={['milk', 'eggs', 'ham', 'spinach']} />, document.getElementById("app"));