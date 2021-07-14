class HtmlMessageBuilder{
    Build(payload){
                
        let notification = payload;

        notification.Message =  notification.Message + " Clic <a href='" + notification.Hiperlink + "'>here to view details.</a>";

        notification.Hiperlink="";

        return notification;
    }
}

export default HtmlMessageBuilder