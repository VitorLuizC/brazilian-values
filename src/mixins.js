/**
 * Adiciona o dado isLoading com true, que assim que o componente é montado e a
 * action é executada ele passa a ser false.
 * @param {function(Vue): Promise} action
 * @returns {{ data: function():{ isLoading: Boolean } mounted: function}}
 */
export const Loadable = (action) => {
  const Loadable = {
    data () {
      return {
        isLoading: true
      }
    },
    mounted () {
      (action(this) || Promise.resolve())
        .then(() => {
          this.isLoading = false
        })
    }
  }

  return Loadable
}
