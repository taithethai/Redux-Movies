Add a `MovieDetail` component.  This component should grab the `activeMovie` property
from the state object and display it.
An edge case that you'll have to worry about is that when the application is first rendered `activeMovie` will be set to null.  You may see an error in your `MovieDetail`
component if you don't account for the fact that the `this.props.activeMovie` will initially be `null` and not an object.
