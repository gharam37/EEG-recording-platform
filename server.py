from flask import Flask,request
from flask_socketio import SocketIO,send, emit
from flask_cors import CORS
app = Flask(__name__)
socketio = SocketIO(app)
CORS(app)





@app.route('/')
def hello():
    return "Hello World!"
@app.route('/start',methods = ['GET'])
def SendStartSignal():
      # print(request.args['fields'])
      socketio.emit('start','Start Now')
      return "Recieving Start Parameter From Nodejs"

@app.route('/stop',methods = ['GET'])
def SendStopSignal():
      # print(request.args['fields'])
      socketio.emit('stop','stop Now')
      return "Recieving stop Parameter From Nodejs"

@app.route('/send',methods = ['POST'])
def SendData():
      # print(request.args['fields'])
      socketio.emit('Data',request.args['fields'])
      return "Sending Data to NodeJs Client"


if __name__ == '__main__':
    socketio.run(app)
