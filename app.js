// TODO
var Milk = () => (
  <li>Milk</li>
);

var Eggs = () => (
  <li>Eggs</li>
);

var GroceryList = () => (
  <ul>
    <Milk />
    <Eggs />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));