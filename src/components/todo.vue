<template>
        <div class="container">
            <br>
            <div class="form-inline" action="#">
            <input type="text" id="form-name" v-model="item.name" placeholder="Name" class="form-control"> 
            <!-- <input type="text" v-model="item.status" placeholder="Status" class="form-control" v-on:keyup.enter="addItem"> -->
            <div class="form-grp">
              <select class="form-control" v-model="item.status" >
                <option value="" disabled selected>Status...</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not completed</option>
              </select>                    
            </div>
            <input type="date" v-model="item.date" placeholder="Date" class="form-control" v-on:keyup.enter="addItem">
            <input type="text" v-model="item.task" placeholder="Task" class="form-control" v-on:keyup.enter="addItem">
            <input type="text" v-model="item.assigned" placeholder="Assigned" class="form-control" v-on:keyup.enter="addItem">
            <button @click="addItem" class="btn btn-dark"><i class="fas fa-plus"></i></button>
              </div>
            <br><br>
            <table class="table table-striped table-bordered ">
              <thead class="thead-light">
                <th>Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Task Type</th>
                <th>Assigned To</th>
                <th>Edit/Del</th>
              </thead>
              <tr v-for="(item, index) in items">
                <td>
                  <input v-if="item.edit" type="text" v-model="item.name"  v-on:keyup.enter="item.edit = !item.edit">
                  <span v-else>{{item.name}} </span>
                </td>
                <td>
                <!-- / <select v-if="item.edit" type="text" v-model="item.status" v-on:keyup.enter="item.edit = !item.edit">
                  <span v-else>{{item.status}} </span>  -->
                  {{item.status}}
                </td>
                <td>
                    <input v-if="item.edit" type="text" v-model="item.date" v-on:keyup.enter="item.edit = !item.edit">
                    <span v-else>{{item.date}} </span>
                </td>
                <td>
                    <input v-if="item.edit" type="text" v-model="item.task" v-on:keyup.enter="item.edit = !item.edit">
                    <span v-else>{{item.task}} </span>
                </td>
                <td>
                    <input v-if="item.edit" type="text" v-model="item.assigned" v-on:keyup.enter="item.edit = !item.edit">
                    <span v-else>{{item.assigned}} </span>
                </td>
                <td><button @click="item.edit = !item.edit" class="btn btn-info"><i class="far fa-edit"></i></button>
                  <button @click="removeItem(index)" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
              </tr>
            </table>
          </div>
</template>

<script>
export default {
    data(){
        return{
            item: {name: "",status: "", date: 'mm-dd-yy' ,task:'', assigned: '', edit: false},
            items: [] 
        }
    },
    methods:{
      addItem(){

        if( !this.item.name|| !this.item.status || !this.item.date || !this.item.task  || !this.item.assigned  ){
          alert('fields can not be empty');
          return
        }else{
          // this.items.push({name:this.item.name, status:this.item.status, date:this.item.date, task:this.item.task,assigned:this.item.assigned, edit: false})
          this.items.push(this.item);
          this.item = {};
          // $('#form-name').focus();
        }
      },
      removeItem(index){
        this.items.splice(index, 1)
      }
    }
}
</script>

