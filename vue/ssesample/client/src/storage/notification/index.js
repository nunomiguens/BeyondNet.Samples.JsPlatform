const state = {
    notificationItems:[],   
    notificationSetups:[]
}

const mutations = {
    ADD_NOTIFICATION_ITEMS (state, payload) {
        var item = {read: false, payload: payload}
        state.notificationItems.push(item);  
        console.log(state.notificationItems);      
    },

    REMOVE_NOTIFICATION_ITEMS (state, index) {
        state.notificationItems.splice(index,1);        
    },    

    UPDATE_READNOTIFICATION_ITEMS (state, index) {
        state.notificationItems[index].read = true;        
    }    

}

const actions = {      

      addNotificationItem ({ commit }, notifcationItem) {
          commit('ADD_NOTIFICATION_ITEMS', notifcationItem)
      },     

      removeNotificationItem ({ commit }, index) {
        commit('REMOVE_NOTIFICATION_ITEMS', index)
      },    

      updateReadNotificationItem ({ commit }, index) {
        commit('UPDATE_READNOTIFICATION_ITEMS', index)
      },    
}

const getters = {
    notificationItems: state => { 
        return state.notificationItems.sort(function(a, b){return b-a});
    },
    notificationItemCount: state => state.notificationItems.length,
    notificationPendingReadCount: state => {
        let result = state.notificationItems.filter(item => item.read == false);
        return result.length;        
    }
}


const notificationModule = {
    state,
    mutations,
    actions,
    getters
}

export default notificationModule;