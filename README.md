# Vue Convenia Util

Plugin com validações, formatações e filtros para projetos Vue.

## Instalação

Instale a dependência publicada no NPM.

```shell
npm i vue-convenia-util
```

### Instalação global

Adiciona todas as funcionalidades descritas no objeto de configuração ao
protótipo do Vue e consequentemente aos componentes.

```js
import Vue from 'vue'
import Util from 'vue-convenia-util'

Vue.use(Util, {
  format: true,
  formatFilters: true
})

new Vue({
  ...
```

```vue
<template>
  <strong>CPF: {{ user.document | toCPF }}</strong>
  <strong>{{ cash }}</strong>
</template>

<script>
  export default {
    data: () => ({ user: { ... } })
    computed: {
      cash() {
        return this.$format.toMoney(this.user.cash)
      }
.gitignore
    }
```
