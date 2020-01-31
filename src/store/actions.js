export default {

  addpet: ({ commit }, payload) => {
    commit('appendPet', payload);
  }
}
