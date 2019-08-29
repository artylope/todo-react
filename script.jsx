class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task:"",
      list : [
          {
            "task": "Eat laksa",
            "done": "done",
            "created_at": "",
            "updated_at": ""
          },
          {
            "task": "Go swimming",
            "done": "done",
            "created_at": "",
            "updated_at": ""
          },

      ]
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

          if(listTtem.done === "false"){
              return ( <li key={index} > Not FINISH {listTtem.task}</li> );
          } else if(listTtem.done === "done"){
              return ( <li key={index} > FINISH {listTtem.task}</li> );
          }

          return ( <li key={index} >{listTtem.task}, {listTtem.done}</li> );
        });
      console.log("rendering");
      return (
         <div class="container">
            <div class="add-item">
                <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.task}/>
                <button onClick={(event)=>{this.addItem(event)}}>Add</button>
            </div>
            <div className="list">
              <ul>
                {listItems}
              </ul>
            </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
