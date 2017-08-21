# Vue Convenia Util

[![Build Status][badge-0]][link-0]
[![JavaScript Style Guide][badge-1]][link-1]

Plugin com validações, formatações e filtros para projetos Vue. Validação e
formatação de CPF, CNPJ, datas, dinheiro (R$) etc.

## Instalação

Instale a dependência publicada no NPM.

```shell
yarn add vue-convenia-util
```

### Instalação global

Adiciona todas as funcionalidades descritas no objeto de configuração ao
protótipo do Vue e consequentemente aos componentes.

```js
import Vue from 'vue'
import Util from 'vue-convenia-util'

Vue.use(Util, {
  formatters: true,
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
    }
```

### Integração com o [`vee-validate`](https://github.com/baianat/vee-validate)

O Util disponibiliza a função `integrate` que serve basicamente para o integrar
em outras libs. Com o vee-validade, e por enquanto só com ele mesmo, basta usar
essa função.

```js
import Util from 'vue-convenia-util'
import VeeValidate, { Validator } from 'vee-validate'

// Util.integrate(nome da lib, objeto de integração, opções opcionais)

Util.integrate('vee-validate', Validator, {
  isEmail: {        // Por padrão apenas o isEmail é a única função que não é
    name: 'email',  // injetada no Validator e essa é a forma de faze-lo.
    getMessage: () => 'Email inválido.'
  }
})
```

<!-- Badges -->
[badge-0]: https://travis-ci.org/convenia/vue-convenia-util.svg?branch=master
[badge-1]: https://img.shields.io/badge/code_style-standard-brightgreen.svg

<!-- Links -->
[link-0]: https://travis-ci.org/convenia/vue-convenia-util
[link-1]: https://standardjs.com
