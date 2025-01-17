
import socket
import csv
import requests
import socketio
import time

global StartFlag;
StartFlag=False;
global Count;
Count=0;

def data2dic(data):
    field_list = data.split(b',')

    if len(field_list) > 17:
        # print(len(field_list))
        return {field:float(field_list[index]) for field, index in FIELDS.items()}
    else:

        return -1

def save_csv(data):
    field_list = data.split(b',')
    if len(field_list) > 17:
        with open ('mytest.csv','a',newline='') as f:
            thewriter = csv.writer(f)
            thewriter.writerow(field_list)




TCP_IP = "127.0.0.1"
TCP_PORT = 54123
MyServer_PORT = 5000

BUFFER_SIZE =256

# Named fields according to Warren doc !
FIELDS = {"COUNTER": 0, "DATA-TYPE": 1, "AF3": 4, "F7": 5, "F3": 2, "FC5": 3, "T7": 6, "P7": 7, "01": 8, "02": 9,
          "P8": 10, "T8": 11, "FC6": 14, "F4": 15, "F8": 12, "AF4": 13, "DATALINE_1": 16, "DATALINE_2": 17}

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((TCP_IP, TCP_PORT))
s.send(b"\r\n")
sio = socketio.Client()
sio.connect('http://localhost:5000')
@sio.on('start')
def on_message(data):
    global StartFlag;
    StartFlag=True;
    global start;
    start= time.time()
    print(data)
# @sio.on('stop')
# def on_message(data):
#     global Start;
#     Start=False;
#     global Count;
#     print(Count);
#     Count=0;
#     print(data)
# Local buffer to store parts of the messages
buffer = b''

with open ('mytest.csv','w',newline='') as f:
    thewriter = csv.writer(f)
    thewriter.writerow(['COUNTER', 'DATA-TYPE', 'AF3', 'F7', 'F3', 'FC5', 'T7', 'P7', '01', '02','P8' ,'T8' ,'FC6', 'F4', 'F8', 'AF4', 'DATALINE_1', 'DATALINE_2'])

# If when when split by \r, \r was the last character of the message, we know that we have to remove \n from
# the begining of the next message
remove_newline = False
# t_end = time.time() + 10

global FieldArray;
FieldArray=[];
while True:
  if StartFlag:
    data = s.recv(BUFFER_SIZE)
    # If we have to remove \n at the begining
    if remove_newline:
        data = data[1:]
        remove_newline = False

    # Splitting the chunk into the end of the previous message and the begining of the next message
    msg_parts = data.split(b'\r')

    # If the second part ends with nothing when splitted we will have to remove \n next time
    if msg_parts[-1] == b'':
        remove_newline = True
        # Therefore the buffer for the next step is empty
        n_buffer = b''
    else:
        # otherwise we store the begining of the next message as the next buffer
        n_buffer = msg_parts[-1][1:]

    # We interprete a whole message (begining from the previous step + the end
    fields = data2dic(buffer + msg_parts[0])
    # Count+=1;
    FieldArray+=[fields]

    # FieldArray=FieldArray+[fields]

    # save_csv(buffer + msg_parts[0])
    # We setup the buffer for next step
    buffer = n_buffer
    if (len(FieldArray)==128*12):
            # print(Count)
            FieldArray=[]
            Count=0
            print(time.time()-start)
            # start= time.time()
            StartFlag=False;
    # data = {"fields":fields}
    # print(fields)

    # if Count==100:
    #    Count=0;
    #    r = requests.post("http://127.0.0.1:5000",params =data)
    # print(Count)

    # print(r.status_code, r.reason)

    # Print all channel
print(len(FieldArray))
