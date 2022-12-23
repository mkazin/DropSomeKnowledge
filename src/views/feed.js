import React, { Component, Text } from "react";
// import { Button, ButtonGroup } from "reactstrap";
// import { Container } from "reactstrap";
// import { ListGroup, ListGroupItem } from "reactstrap";
// import { Row, Col } from "reactstrap";

export class Drop extends Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div>
                <input type="button"></input>
            </div>
        );

    };

}

export class NewDrop extends Component {
    render() {
        return (
            <div class="newDrop">
                <label>Share something you learned:</label>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Content" />
                <input type="submit" />
            </div>
        );
    }
};

class Feed extends Component {
    render() {
        const drops = []
        const listItems = drops.map(drop =>
            <li><Drop></Drop></li>
          );

        return (
            <div class="feed">
                <NewDrop></NewDrop>
                <ul>{listItems}</ul>
            </div>
        );
    }
};

export default Feed;

  // Example usage: <ShoppingList name="Mark" />
                {/* <Button>Share</Button> */}

/**
<body>
    <h1>Todos</h1>
    <ul>
    <% drops.forEach( el => { %>
        <li class='dropItem' data-id='<%=el._id%>'>
            <span class="title"><%= el.title %></span>
            <span class="content"><%= el.content %></span>
            <span class='del'> Delete </span>
        </li>
    <% }) %>    
    </ul>

    <h2>Things left to do: <%= left %></h2>

    <form action="/todos/createTodo" method='POST'>
        <input type="text" placeholder="Enter Todo Item" name='todoItem'>
        <input type="submit">
    </form>

    <script src="js/main.js"></script>
</body>
</html>
*/