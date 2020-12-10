#include <SoftwareSerial.h>

#define BAUD_RATE      9600
#define MAX_BUF_SZ     128
SoftwareSerial srl(12,13);   //// rx,  tx
SoftwareSerial usrl(11,10);   //// rx,  tx

char buf[MAX_BUF_SZ];
int  idx=0;
int c = 0;

void setup()
{
  Serial.begin(9600);
  srl.begin(BAUD_RATE);
  usrl.begin(BAUD_RATE);
  //usrl.listen();

  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
}

void debug_print(char* b, int sz)
{
  int i=0;
  int pos = 0;
  char tmp[MAX_BUF_SZ];

  sprintf(&tmp[pos], "-> ");
  pos+=3;
  for ( i=0 ; i<sz ; i++ )
  {
    sprintf(&tmp[pos], "%02X ", (unsigned char)*(b+i));
    pos+=3;
  }
  tmp[pos] = 0;
  Serial.println(tmp);
}

void io_control(char* b, int sz)
{
  int pin;
  int mode;
  if ( *(b+1) == 0x31 ) pin = 4;
  else if ( *(b+1) == 0x32 ) pin = 5;
  else if ( *(b+1) == 0x33 ) pin = 6;
  else if ( *(b+1) == 0x34 ) pin = 7;

  if ( *(b+2) == 0x4F ) mode = HIGH; // ON
  else if ( *(b+2) == 0x46 ) mode = LOW; // OFF

  digitalWrite(pin, mode);
}

void loop()
{
  srl.listen();
  c = srl.read();
  if ( c>=0 )
  {
    if ( c == 0x02 )
    {
      idx = 0;      
    }
    buf[idx] = c;
    idx++;
    idx = idx%MAX_BUF_SZ;
  
    if ( c == 0x03 )
    {
      usrl.write(buf, idx);
      debug_print(buf, idx);
      io_control(buf, idx);
    }
  }
}


