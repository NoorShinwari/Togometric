import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: AnimatedContainerApp(),
    );
  }
}

class AnimatedContainerApp extends StatefulWidget {
  @override
  _AnimatedContainerAppState createState() => _AnimatedContainerAppState();
}

class _AnimatedContainerAppState extends State<AnimatedContainerApp> {
  double _width = 410;
  double _height = 600;
  Color _color = Colors.white;
  BorderRadiusGeometry _borderRadius =
      BorderRadius.only(topRight: Radius.circular(139));
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          color: Color(0xff2a7ea9),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              AnimatedContainer(
                width: _width,
                height: _height,
                decoration:
                    BoxDecoration(color: _color, borderRadius: _borderRadius),
                duration: Duration(seconds: 1),
                curve: Curves.fastOutSlowIn,
              ),
              FloatingActionButton(onPressed: () {
                setState(() {
                  final random = Random();
                  //_width = random.nextInt(300).toDouble();
                  // _height = random.nextInt(300).toDouble();
                  _height = 400;
                  _width = 410;
                  _color = Colors.white;
                  _borderRadius = BorderRadius.only(
                    topRight: Radius.circular(139),
                  );
                });
              }),
            ],
          ),
        ),
      ),
    );
  }
}
