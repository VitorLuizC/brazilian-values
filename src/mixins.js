/**
 * Adiciona o dado isLoading com true, que assim que o componente é montado e a
 * action é executada ele passa a ser false.
 * @param {function(Vue): Promise} action
 */
export const Loadable = (action) => ({
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    (action ? action(this) : Promise.resolve())
      .then(() => {
        this.isLoading = false
      })
  }
})

/**
 * Resolve o problema das propriedades não inicializadas que não poderiam ser
 * observadas.
 * @param {{}} template
 */
export const ObservableFix = (template = {}) => ({
  props: {
    data: {
      type: Object,
      default: () => Object.assign({}, template)
    }
  },
  data () {
    return {
      selected: Object.assign({}, template)
    }
  },
  watch: {
    data () {
      this.cloneData()
    }
  },
  methods: {
    cloneData () {
      this.selected = Object.assign({}, template, this.data)
    }
  },
  mounted () {
    this.cloneData()
  }
})
