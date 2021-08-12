<template>
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      v-model="state.login.email"
      v-validate="'required|email'"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      v-model="state.login.password"
      v-validate="'required|min:6|max:10'"
    />

    <button @click="onSubmit()">Submit</button>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      login: {
        email: "",
        password: "",
      },
    });

    return { state }
  },
  methods: {
    async onSubmit() {
      let validate = await this.$validator.validateAll();
      if (validate) {
        console.log("Credencias validas, login pode ser realizado");
      } else {
        console.log("Opa, tem algo de errado, verifique e tente novamente");
        console.log(this.$validator.errors);
      }
    },
  },
});

//Não se esqueça de configurar o modulo no nuxt.config.js
// Modules: https://go.nuxtjs.dev/config-modules
//modules: ["nuxt-validate"],
</script>