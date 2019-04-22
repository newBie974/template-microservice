export default class Connection {
    private static instance: Connection;
    private constructor() {}

    static getInstance(){
        if(Connection.instance){
            // Must do the connection
        }
        return Connection.instance;
    }
}