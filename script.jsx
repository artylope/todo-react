
class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task:"",
      list : [
          {
            "task": "Eat laksa",
            "done": "true",
            "created_at": "August 29th 2019, 1:40:58 pm",
            "updated_at": "August 29th 2019, 1:40:58 pm"
          },
          {
            "task": "Go swimming",
            "done": "true",
            "created_at": "August 29th 2019, 1:40:58 pm",
            "updated_at": "August 29th 2019, 1:40:58 pm"
          },

      ]
    }
  }

  addItem(event){
    // debugger;
    let newTask = this.state.task;
    // console.log('inside add item button. new task: ' + newTask );

    this.state.list.push({
       "task": newTask,
       "done": "false",
       "created_at": moment().format('MMMM Do YYYY, h:mm:ss a'),
       "updated_at": moment().format('MMMM Do YYYY, h:mm:ss a')
    })

    this.setState({

        list: this.state.list,
        task: ""

    });

    console.log(this.state.list);
  }

  changeHandler(event){
    // debugger;
    // console.log('inside changeHandler. Word: ' + event.target.value);

    this.setState({
        task: event.target.value
    });
  }

  enterHandler(event){
    // debugger;
    // console.log('inside changeHandler. Word: ' + event.target.value);

    // console.log(event.key);
    if (event.key === "Enter"){

        let newTask = this.state.task;
        // console.log('inside add item button. new task: ' + newTask );

        this.state.list.push({
           "task": newTask,
           "done": "false",
           "created_at": moment().format('MMMM Do YYYY, h:mm:ss a'),
           "updated_at": moment().format('MMMM Do YYYY, h:mm:ss a')
        })

        this.setState({

            list: this.state.list,
            task: ""

        });

        console.log(this.state.list);

    }
  }

  checkDone(index){
      console.log('clicked checkDone' + index);
      console.log(this.state.list[index].task);

      if (this.state.list[index].done === "false"){
          this.state.list[index].done = "true";
      } else if (this.state.list[index].done === "true") {
          this.state.list[index].done = "false";
      }

      this.setState({

          list: this.state.list

      });

      console.log(this.state.list);
  }

  delete(index){
      console.log('delete ' + this.state.list[index].task);

      this.state.list.splice(index,1);

      this.setState({

          list: this.state.list

      });
  }

  render() {
      // render the list with a map() here
      let listItems = this.state.list.map( (listItem, index) => {

          if(listItem.done === "false"){
              return (
                  <div className="list-item" key={index}  onClick={ () => { this.checkDone(index)}}>
                      <i className='bx bx-checkbox'></i>
                     <span className="item-task">{listItem.task}</span>
                     <div className="trash"><i className='bx bx-trash-alt' onClick={ () => { this.delete(index)}} ></i></div>
                </div>
                    );
          } else if(listItem.done === "true"){
              return (
                  <div className="list-item completed" key={index} onClick={ () => { this.checkDone(index)}} >
                      <i className='bx bx-checkbox-checked'></i>
                        <span className="item-task">{listItem.task}</span>
                        <div className="trash"><i className='bx bx-trash-alt' onClick={ () => { this.delete(index)}} ></i></div>
                    </div>
                );
          }

        });
      // console.log("rendering");
      return (
         <div className="container">
         <h1>To Do List</h1>
            <div className="add-item">
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event)=>{this.enterHandler(event)}} value={this.state.task}/>
                <button onClick={(event)=>{this.addItem(event)}}>Add</button>
            </div>
            <div className="list">
                {listItems}
            </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);
