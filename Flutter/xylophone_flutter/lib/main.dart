import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() {
  runApp(XylophoneApp());
}

class XylophoneApp extends StatelessWidget {
  @override
  void playsound(int soundTrack) {
    final player = AudioCache();
    player.play('note$soundTrack.wav');
  }

  Widget buildKey({Color color, int soundTrack}) {
    return Expanded(
      child: FlatButton(
        onPressed: () {
          playsound(soundTrack);
        },
        child: null,
        color: color,
      ),
    );
  }

  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              buildKey(color: Colors.red, soundTrack: 1),
              buildKey(color: Colors.orange, soundTrack: 2),
              buildKey(color: Colors.yellow, soundTrack: 3),
              buildKey(color: Colors.green, soundTrack: 4),
              buildKey(color: Colors.teal, soundTrack: 5),
              buildKey(color: Colors.blue, soundTrack: 6),
              buildKey(color: Colors.purple, soundTrack: 7),
            ],
          ),
        ),
      ),
    );
  }
}
