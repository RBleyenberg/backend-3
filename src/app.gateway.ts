import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { environment } from './environments/environment';

@WebSocketGateway(environment.wsPort, { transports: ['websocket'] })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()wss;

  private logger = new Logger('AppGateway');

  handleConnection(client) {
    this.logger.log('New client connected');
    client.emit('connection', 'Successfully connected to server');
  }

  handleDisconnect(client) {
    this.logger.log('Client disconnected');
  }
}
