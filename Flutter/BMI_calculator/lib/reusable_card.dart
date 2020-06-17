import 'package:flutter/material.dart';

class ReUsableCard extends StatelessWidget {
  final Color color;
  final Widget cardChild;
  ReUsableCard({@required this.color, this.cardChild});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: cardChild,
      margin: EdgeInsets.all(15),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(10),
      ),
    );
  }
}
