import 'package:flutter/material.dart';

import './screen2.dart';

class Screen1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text('Screen 1'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Go Forward To Screen 2'),
          color: Colors.red,
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (ctx) => Screen2(),
              ),
            );
          },
        ),
      ),
    );
  }
}
