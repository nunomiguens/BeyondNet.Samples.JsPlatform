import injector from 'vue-inject';

const sseNotification = {  
  Start(obj) {
      obj.$sse("https://localhost:44353/notifications",{ format: 'json' })
        .then(sse => {
          
          sse.onError(e => {
            sse.close();
          });
  
          sse.subscribe('', msg => {          
            this.BuildNotification(obj, injector.get('messageBuilder').Build(msg));                    
          }); 

        })
        .catch(err => {
            alert('Failed to connect to server', err);
        });
    },

    BuildNotification(obj, msg)
    {    
      obj.addNotificationItem(msg);                  
    }
  }

export default sseNotification;

