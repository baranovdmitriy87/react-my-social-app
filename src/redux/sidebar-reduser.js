let initialState = {
  friends: [
    { id: 1, name: 'Никитос', avatar: 'ava1', },
    { id: 2, name: 'Наташа', avatar: 'ava2', },
    { id: 3, name: 'Дмитрий', avatar: 'ava3' }
  ]
}
const sidebarReduser = (state = initialState, action) => {


  return state;
}

export default sidebarReduser;
