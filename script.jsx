class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task:"",
      list : []
    }
  }

  addItem(event){
    // debugger;
    let newTask = this.state.task;
    console.log('inside add item button. new task: ' + newTask );

    this.state.list.push({
       "task": newTask,
       "done": "false",
       "created_at": "",
       "updated_at": ""
    })

    this.setState({ list: this.state.list });

    console.log(this.state.list);
  }

  changeHandler(){
    // debugger;
    console.log('inside changeHandler. Word: ' + event.target.value);

    this.setState({
        task: event.target.value
    });
  }

  render() {
      // render the list with a map() here
      let listItems = this.state.list.map( (listTtem, index) => {
          return ( <li key={index} >{listTtem.task}, {listTtem.done}</li> );
        });
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.task}/>
          <button onClick={(event)=>{this.addItem(event)}}>add item</button>


          <ul>
            {listItems}

          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
