<template>
  <div class="container p-5 col-lg-12 col-sm-12">
    <h3 class="text-danger">{{ title }}</h3>
    <div class="row align-items-center mt-5">
      <div class="col-lg-12 col-md-12">
        <b-card class="card shadow-lg border-0 p-3">
          <div class="row mb-4">
            <div class="col-lg-12 m-0">
              <span class="text-muted font-weight-bold">Add todo</span>
            </div>
            <div class="col-lg-10">
              <b-form-input
                v-model="todo"
                class="text-dark bg-light border-0"
              ></b-form-input>
            </div>
            <b-button-group class="col-lg-2 mt-lg-0 mt-md-3 mt-sm-3">
              <b-button :disabled="disabled" variant="danger" @click="addTodo()"
                >Add</b-button
              >
            </b-button-group>
          </div>
          <div
            class="row mt-2"
            v-for="(item, idx) in $store.state.todos"
            :key="idx"
          >
            <div class="col-lg-12 d-inline-flex">
              <b-form-checkbox
                  v-model="item.isDone"
                >
                </b-form-checkbox>
              <span class="font-weight-bold media-aside-right" :class="{ finished: item.isDone }">{{
                item.title
              }}</span>
            </div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["title"],
  data() {
    return {
      todo: null,
    };
  },
  computed: {
    disabled() {
      return this.todo === null;
    },
  },
  methods: {
    addTodo() {
      this.$store.state.todo = {title: this.todo, isDone: false};
      this.$store.dispatch("addTodoAction");
      console.log(this.$store.state.todos)
      this.todo = "";
    },
    removeTodo() {
      this.isDone = true;
      // this.$store.state.todos.splice(0, 1)
    },
  },
};
</script>

<style>
.card {
  height: 100vh;
}
.finished {
  text-decoration-line: line-through;
}
</style>
