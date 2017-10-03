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
