function createTodoList() {
  const todoListObject = {
    items: [
      {
        text: "Завершить текущий челлендж",
        completed: false
      },
      {
        text: "Отдохнуть во время перерыва",
        completed: false
      },
      {
        text: "Помочь напарнику понять код",
        completed: false
      },
      {
        text: "Выиграть в мафию",
        completed: true
      },
    ],
    printAll: function(){
      for(let index in this.items){
        this.print(++index);
      }
    },

    add: function(text){
      this.items.unshift({text: text, completed: false})
    },
    remove: function(index){
      this.items.splice(index -1, 1);
    },
    print: function(index){
      let x = (this.items[index - 1].completed) ? '[x]': '[]';
      console.log(x + this.items[index -1].text);
    },
    completed: function(index){
      this.items[index-1].completed = true;
      console.log('дело: ' +this.items[index-1].text+ ' -> завершено');
    }

  }

  return todoListObject;
}

const todoList = createTodoList();
todoList.add('Новый элемент');
todoList.remove(2);
todoList.print(4);
todoList.printAll();
todoList.completed(3);